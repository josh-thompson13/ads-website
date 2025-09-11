import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceAreaMap from "@/components/map/ServiceAreaMap";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";
import { localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Drone Spraying Gold Coast & SE QLD",
  description:
    "Precision drone spraying across SE Queensland and Northern NSW. Weed, crop, and fire ant baiting by licensed, CASA-compliant operators.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drone Spraying Gold Coast & SE QLD | ADS",
    description:
      "Targeted aerial spraying. Faster, safer, and precise across SE QLD.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: localBusinessJsonLd() }} />
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Precision drone spraying across SE Queensland
            </h1>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-lg">
              Gold Coast–based, servicing SE QLD & Northern NSW.
            </p>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              Targeted aerial spraying. Faster, safer, and precise.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact"><Button size="lg">Get a Quote</Button></Link>
              <a href="tel:+6104xxxxxxxx"><Button size="lg" variant="outline">Call now</Button></a>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-2xl border p-3">Licensed & insured</li>
              <li className="rounded-2xl border p-3">CASA-compliant operations</li>
              <li className="rounded-2xl border p-3">Reduced drift</li>
              <li className="rounded-2xl border p-3">Faster coverage</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border">
            <Image src="/hero-placeholder.svg" alt="Drone spraying over farmland near the Gold Coast" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Weed Spraying",
              desc:
                "Spot and blanket applications for acreage, parks and roadside. Minimise drift, maximise efficacy.",
              href: "/services/weed-spraying",
            },
            {
              title: "Crop Spraying",
              desc:
                "Variable-rate aerial application to protect yield while reducing ground compaction and labour.",
              href: "/services/crop-spraying",
            },
            {
              title: "Fire Ant Eradication",
              desc:
                "Rapid bait application aligned with QLD guidance for containment and eradication.",
              href: "/services/fire-ant-eradication",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border p-5 bg-white dark:bg-neutral-950 shadow-sm">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">{s.desc}</p>
              <Link href={s.href} className="inline-block mt-4 text-teal-700 hover:underline">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Service Area</h2>
        <ServiceAreaMap />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="mt-6 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]
        *:mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Image
              key={i}
              src={`/gallery/gallery-${(i % 6) + 1}.svg`}
              alt={`Drone operations gallery image ${i + 1}`}
              width={800}
              height={600}
              className="w-full h-auto rounded-xl border"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">What clients say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {["Reliable and precise.", "Great coverage and fast.", "Professional and safety-first."].map((t, i) => (
            <blockquote key={i} className="rounded-2xl border p-5 bg-white dark:bg-neutral-950 shadow-sm">
              <p className="text-neutral-800 dark:text-neutral-200">“{t}”</p>
              <footer className="mt-3 text-sm text-neutral-600">— Local landholder</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CtaBanner title="Need aerial spraying?" subtitle="We service SE QLD & Northern NSW." />
    </>
  );
}
