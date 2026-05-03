import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/?error=missing-token", request.url));
  }

  const entry = await prisma.waitlistEntry.findUnique({
    where: { confirmToken: token },
  });

  if (!entry) {
    return NextResponse.redirect(new URL("/?error=invalid-token", request.url));
  }

  if (entry.confirmed) {
    return NextResponse.redirect(new URL("/confirmed?already=1", request.url));
  }

  await prisma.waitlistEntry.update({
    where: { id: entry.id },
    data: { confirmed: true, confirmedAt: new Date() },
  });

  return NextResponse.redirect(new URL("/confirmed", request.url));
}