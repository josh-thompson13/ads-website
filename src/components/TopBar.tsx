import Link from "next/link";

export function TopBar() {
  return (
    <div className="w-full text-sm">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between py-2 text-ink/80">
        <div className="flex items-center gap-4">
          <a href="tel:+6104xxxxxxxx" className="hover:underline">+61 (0)4xx xxx xxx</a>
          <a href="mailto:hello@australiandronesolutions.com.au" className="hover:underline">hello@australiandronesolutions.com.au</a>
        </div>
        <div className="hidden sm:block">
          <Link href="/contact" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-ink shadow-card shadow-hover">
            Get Quote
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

