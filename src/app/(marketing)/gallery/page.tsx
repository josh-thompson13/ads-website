"use client";
import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at our drone operations across SE QLD & Northern NSW.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const images = Array.from({ length: 6 }).map((_, i) => `/gallery/gallery-${(i % 6) + 1}.svg`);
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <div className="mt-6 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance] *:mb-4">
        {images.map((src, i) => (
          <button key={i} className="block w-full" onClick={() => setOpenSrc(src)} aria-label="Open image">
            <Image src={src} alt={`Drone spraying gallery image ${i + 1}`} width={800} height={600} className="w-full h-auto rounded-xl border" />
          </button>
        ))}
      </div>
      {openSrc && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6" onClick={() => setOpenSrc(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image src={openSrc} alt="Preview" width={1200} height={900} className="w-full h-auto rounded-xl" />
            <button onClick={() => setOpenSrc(null)} className="absolute top-2 right-2 bg-white/90 rounded-full px-3 py-1">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

