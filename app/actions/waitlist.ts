"use server";

import { prisma } from "@/lib/prisma";
import { sendConfirmationEmail } from "@/lib/email";
import crypto from "crypto";

const CONSENT_TEXT =
  "I agree that QResponse may store my email to send me updates about the launch. I have read the Privacy Policy, and I understand I can unsubscribe at any time.";

export type SignupResult =
  | { success: true; message: string }
  | { success: false; error: string };

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    }
  );

  const data = await res.json();
  return data.success === true;
}

export async function signup(
  email: string,
  agreed: boolean,
  turnstileToken: string | null
): Promise<SignupResult> {
  if (!agreed) {
    return { success: false, error: "You must agree to the privacy policy to sign up." };
  }

  const isDev = process.env.NODE_ENV === "development";
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!isDev && secret && !turnstileToken) {
    return { success: false, error: "Bot verification failed. Please try again." };
  }

  if (!isDev && turnstileToken && !(await verifyTurnstile(turnstileToken))) {
    return { success: false, error: "Bot verification failed. Please try again." };
  }

  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const existing = await prisma.waitlistEntry.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      if (existing.confirmed) {
        return { success: false, error: "This email is already on the waitlist." };
      }

      const newToken = crypto.randomUUID();
      await prisma.waitlistEntry.update({
        where: { id: existing.id },
        data: { confirmToken: newToken },
      });

      await sendConfirmationEmail(normalizedEmail, newToken);
      return { success: true, message: "We've resent the confirmation email. Please check your inbox." };
    }

    const confirmToken = crypto.randomUUID();
    await prisma.waitlistEntry.create({
      data: {
        email: normalizedEmail,
        consentText: CONSENT_TEXT,
        confirmToken,
      },
    });

    await sendConfirmationEmail(normalizedEmail, confirmToken);
    return { success: true, message: "You're on the list! Check your email to confirm your spot." };
  } catch (err) {
    console.error("Signup error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}