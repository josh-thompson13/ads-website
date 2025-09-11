"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Australian Drone Solutions home">
          <span className="h-8 w-8 rounded-md bg-teal-700 inline-block" aria-hidden />
          <span className="font-bold text-lg tracking-tight">Australian Drone Solutions</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <div className="relative group">
            <Link href="/services" className="hover:text-teal-700">Services</Link>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow p-3 w-64">
              <ul className="space-y-2">
                <li><Link href="/services/weed-spraying" className="hover:text-teal-700">Weed Spraying</Link></li>
                <li><Link href="/services/crop-spraying" className="hover:text-teal-700">Crop Spraying</Link></li>
                <li><Link href="/services/fire-ant-eradication" className="hover:text-teal-700">Fire Ant Eradication</Link></li>
              </ul>
            </div>
          </div>
          <Link href="/pricing" className="hover:text-teal-700">Pricing</Link>
          <Link href="/service-area" className="hover:text-teal-700">Service Area</Link>
          <Link href="/gallery" className="hover:text-teal-700">Gallery</Link>
          <Link href="/about" className="hover:text-teal-700">About</Link>
          <Link href="/faq" className="hover:text-teal-700">FAQ</Link>
          <Link href="/blog" className="hover:text-teal-700">Blog</Link>
          <Link href="/contact" className="hover:text-teal-700">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/contact">
            <Button size="md" variant="primary" aria-label="Get a Quote">Get a Quote</Button>
          </Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 dark:border-neutral-800"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="h-0.5 w-5 bg-current mb-1.5" />
          <div className="h-0.5 w-5 bg-current mb-1.5" />
          <div className="h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/services/weed-spraying" onClick={() => setOpen(false)} className="pl-3 text-sm">Weed Spraying</Link>
            <Link href="/services/crop-spraying" onClick={() => setOpen(false)} className="pl-3 text-sm">Crop Spraying</Link>
            <Link href="/services/fire-ant-eradication" onClick={() => setOpen(false)} className="pl-3 text-sm">Fire Ant Eradication</Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/service-area" onClick={() => setOpen(false)}>Service Area</Link>
            <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Get a Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

