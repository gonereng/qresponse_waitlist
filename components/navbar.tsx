import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-border-subtle dark:border-slate-800">
      <div className="max-w-container-max mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo_complete_transparent.png"
            alt="QResponse"
            width={160}
            height={40}
            className="h-18 w-36"
            priority
          />
        </Link>
      </div>
    </nav>
  );
}