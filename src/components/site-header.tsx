"use client";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/with-base-path";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  // No dropdowns; only mobile menu toggle remains

  // Ensure mobile menu does not auto-open or persist across breakpoint changes
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)"); // lg breakpoint
    const handleChange = () => setOpen(false);
    mql.addEventListener("change", handleChange);
    // close on mount to avoid accidental open due to hot reload/state carryover
    handleChange();
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-6xl w-full px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 flex-nowrap min-w-0"
          aria-label="Australian Drone Solutions home"
        >
          <Image
            src={withBasePath("/logo_no_text.png")}
            alt="Australian Drone Solutions logo"
            width={75}
            height={0}
            priority
          />
          <span className="font-bold text-lg tracking-tight break-words leading-tight">
            Australian Drone Solutions
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center flex-1 justify-evenly whitespace-nowrap"
        >
          <Link href="/" className="hover:text-secondary-hover">
            Home
          </Link>
          <Link
            href="/services/spraying"
            className="hover:text-secondary-hover"
          >
            Spraying
          </Link>
          <Link
            href="/pricing"
            className="hover:text-secondary-hover"
          >
            Pricing
          </Link>
          <Link
            href="/services/seeding-spreading"
            className="hover:text-secondary-hover"
          >
            Seeding & Spreading
          </Link>
          <Link href="/service-area" className="hover:text-secondary-hover">
            Service Area
          </Link>
          <Link href="/contact" className="hover:text-secondary-hover">
            Contact
          </Link>
        </nav>
        <div className="hidden lg:block">
          <Link href="/contact">
            <Button size="md" variant="primary" aria-label="Request a Callback">
              Request a Callback
            </Button>
          </Link>
        </div>
        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 hover:bg-neutral-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-neutral-200 bg-white shadow-sm"
        >
          <div className="mx-auto max-w-6xl px-4">
            <nav className="py-3">
              <ul className="divide-y divide-neutral-200">
                <li>
                  <Link
                    href="/"
                    className="block py-3 hover:text-secondary-hover"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/spraying"
                    className="block py-3 hover:text-secondary-hover"
                    onClick={() => setOpen(false)}
                  >
                    Spraying
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="block py-3 hover:text-secondary-hover"
                    onClick={() => setOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seeding-spreading"
                    className="block py-3 hover:text-secondary-hover"
                    onClick={() => setOpen(false)}
                  >
                    Seeding & Spreading
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-area"
                    className="block py-3 hover:text-secondary-hover"
                    onClick={() => setOpen(false)}
                  >
                    Service Area
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-3 hover:text-secondary-hover"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="py-3">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <Button className="w-full">Request a Callback</Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
