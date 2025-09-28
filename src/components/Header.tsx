"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Home", href: "/" },
  { label: "Spraying", href: "/services/spraying" },
  { label: "Seeding & Spreading", href: "/services/seeding-spreading" },
  { label: "Mapping", href: "/services/surveying-mapping" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const close = () => setOpen(false);
    mql.addEventListener("change", close);
    return () => mql.removeEventListener("change", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass-header border-b border-black/5">
      <div className="w-full px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Australian Drone Solutions home">
          <Image src="/logo_no_text.png" alt="Australian Drone Solutions logo" width={75} height={32} priority />
          <span className="font-display font-bold tracking-tight">Australian Drone Solutions</span>
        </Link>
        <nav aria-label="Main" className="hidden lg:flex items-center flex-1 justify-evenly whitespace-nowrap">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-ink/80 hover:text-ink relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-ink after:transition-[width]"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center">
          <Link href="/contact"><Button className="px-5 py-2 rounded-[1.25rem]">Get a Quote</Button></Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-black/10 bg-white/80 backdrop-blur">
          <div className="w-full px-4 py-4 space-y-3">
            {nav.map((n) => (
              <Link key={n.label} href={n.href} className="block py-2" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="inline-flex rounded-xl bg-primary text-white px-4 py-2" onClick={() => setOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
