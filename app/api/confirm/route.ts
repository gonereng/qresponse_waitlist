import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/?error=missing-token", appUrl));
  }

  const entry = await prisma.waitlistEntry.findUnique({
    where: { confirmToken: token },
  });

  if (!entry) {
    return NextResponse.redirect(new URL("/?error=invalid-token", appUrl));
  }

  if (entry.confirmed) {
    return NextResponse.redirect(new URL("/confirmed?already=1", appUrl));
  }

  await prisma.waitlistEntry.update({
    where: { id: entry.id },
    data: { confirmed: true, confirmedAt: new Date() },
  });

  return NextResponse.redirect(new URL("/confirmed", appUrl));
}