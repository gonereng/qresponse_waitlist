import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confirmed — QResponse",
  description: "Your email has been confirmed on the QResponse waitlist.",
};

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ already?: string }>;
}) {
  const { already } = await searchParams;

  return (
    <main className="pt-24 pb-section-gap px-6 max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
        <span className="material-symbols-outlined text-4xl">check_circle</span>
      </div>
      <h1 className="font-sans text-headline-section text-text-main dark:text-white mb-4">
        {already ? "You're already confirmed!" : "You're on the list!"}
      </h1>
      <p className="text-text-muted text-lg leading-relaxed mb-8">
        {already
          ? "Your email was already confirmed. You're all set!"
          : "Your email has been confirmed. We'll let you know as soon as QResponse launches."}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-on-primary dark:bg-primary-fixed-dim dark:text-on-primary-fixed px-6 py-3 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to home
      </Link>
    </main>
  );
}