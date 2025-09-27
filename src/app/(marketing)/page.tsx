import { CtaBanner } from "@/components/cta-banner";
import ServiceAreaMap from "@/components/map/ServiceAreaMap";
import { Button } from "@/components/ui/button";
import { localBusinessJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drone Solutions South East QLD & Northern NSW",
  description:
    "Precision drone solutions across South East QLD and Northern NSW. Spraying, seeding & spreading, and surveying & mapping by licensed, CASA-compliant operators.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drone Solutions South East QLD & Northern NSW | ADS",
    description:
      "Precision drone solutions across South East QLD & Northern NSW.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: localBusinessJsonLd() }}
      />
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Precision drone solutions across South East QLD and Northern NSW
            </h1>
            <p className="mt-3 text-neutral-700 text-lg">
              Gold Coast–based, servicing South East QLD & Northern NSW.
            </p>
            <p className="mt-4 text-neutral-700">
              Targeted drone operations. Faster, safer, and precise.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact">
                <Button size="lg">Get a Quote</Button>
              </Link>
              <a href="tel:+6104xxxxxxxx">
                <Button size="lg" variant="outline">
                  Call now
                </Button>
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border">
            <Image
              src="/hero_spraying.jpg"
              alt="Drone operations over farmland near the Gold Coast"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Spraying",
              desc: "Weed control, disease management, pest control and special applications.",
              href: "/services/spraying",
            },
            {
              title: "Seeding & Spreading",
              desc: "Pasture reseeding, revegetation, cover crops and granular application.",
              href: "/services/seeding-spreading",
            },
            {
              title: "Surveying & Mapping",
              desc: "Farm mapping, land surveys, inspections and environmental monitoring.",
              href: "/services/surveying-mapping",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border p-5 bg-white shadow-sm"
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-neutral-700 mt-2">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-block mt-4 text-secondary-hover hover:underline"
              >
                Learn more →
              </Link>
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
        <div
          className="mt-6 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]
        *:mb-4"
        >
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
          {[
            "Reliable and precise.",
            "Great coverage and fast.",
            "Professional and safety-first.",
          ].map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border p-5 bg-white shadow-sm"
            >
              <p className="text-neutral-800">“{t}”</p>
              <footer className="mt-3 text-sm text-neutral-600">
                — Local landholder
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Need drone services?"
        subtitle="We service South East QLD & Northern NSW."
      />
    </>
  );
}
