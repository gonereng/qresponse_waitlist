import Image from "next/image";

export function Footer() {
  return (
    <footer className="font-sans bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/logo_complete_transparent.png"
            alt="QResponse"
            width={160}
            height={40}
            className="h-18 w-36"
          />{" "}
          &copy; 2026
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
            href="/privacy"
          >
            Privacy Policy
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
            href="/legal"
          >
            Legal Notice
          </a>
        </div>
      </div>
    </footer>
  );
}
