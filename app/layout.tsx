import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "QResponse — Dynamic QR Codes, One-Time Fee",
  description:
    "Stop paying subscriptions for QR codes. Create dynamic, trackable QR codes for a flat one-time fee of $5. No hidden subscriptions. No expired codes.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-transparent.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} min-h-full flex flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}