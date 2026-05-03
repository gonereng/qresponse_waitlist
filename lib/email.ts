import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendConfirmationEmail(
  to: string,
  confirmToken: string
) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const confirmUrl = `${appUrl}/api/confirm?token=${confirmToken}`;

  const fromName = process.env.SMTP_FROM_NAME || "QResponse";
  const fromAddress = process.env.SMTP_FROM || "noreply@qresponse.codes";

  await transporter.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to,
    subject: "Confirm your spot on the QResponse waitlist",
    html: `
      <div style="max-width:560px;margin:0 auto;font-family:Manrope,system-ui,sans-serif;color:#191b23;">
        <h1 style="font-size:24px;font-weight:700;margin:0 0 24px;">You're almost on the list!</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 24px;">
          Thanks for signing up for QResponse — dynamic QR codes with no subscription.
          To make sure it's really you, please confirm your email by clicking the button below.
        </p>
        <a href="${confirmUrl}"
           style="display:inline-block;background:#004ac6;color:#ffffff;padding:14px 32px;border-radius:12px;font-weight:700;font-size:16px;text-decoration:none;">
          Confirm my email
        </a>
        <p style="font-size:14px;color:#64748B;margin:24px 0 0;">
          If the button above doesn't work, copy and paste this link into your browser:<br/>
          <a href="${confirmUrl}" style="color:#004ac6;word-break:break-all;">${confirmUrl}</a>
        </p>
        <hr style="border:none;border-top:1px solid #E2E8F0;margin:32px 0;" />
        <p style="font-size:12px;color:#94a3b8;margin:0;">
          If you didn't sign up for QResponse, you can safely ignore this email.
        </p>
      </div>
    `,
  });
}