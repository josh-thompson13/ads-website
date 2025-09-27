import { CtaBanner } from "@/components/cta-banner";
import ServiceAreaMap from "@/components/map/ServiceAreaMap";
import { Button } from "@/components/ui/button";
import { localBusinessJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drone spraying and farm mapping across SE QLD & Northern NSW",
  description:
    "Drone spraying, seeding and mapping for farms, councils and worksites. Licensed, insured and on time across South East QLD & Northern NSW.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drone spraying and farm mapping | ADS",
    description: "Spraying, seeding and mapping across SE QLD & Northern NSW.",
    url: "/",
  },
};

export default function HomePage() {
  // Manually list field clips to avoid any server FS issues in some runtimes
  const fieldVideos = [
    "/videos/IMG_2626.mp4",
    "/videos/IMG_2627.mp4",
    "/videos/IMG_2627 2.mp4",
  ];

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
              Drone spraying and farm mapping across SE QLD & Northern NSW
            </h1>
            <p className="mt-4 text-neutral-800 text-lg">
              We handle spraying, seeding and mapping for farms, councils and
              worksites. Licensed and insured. Straightforward and reliable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Get a Quote
                </Button>
              </Link>
              <a href="tel:+6104xxxxxxxx">
                <Button size="lg" variant="secondary">
                  Call Us Today
                </Button>
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] md:aspect-[4/3] w-full rounded-2xl overflow-hidden border">
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              src="/videos/IMG_2591.mov"
              poster="/videos/FC58FEC5-7D31-450C-AD76-FE9C4F578B74_1_102_o.jpeg"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Drone flying over a field in South East QLD"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              key: "spraying",
              title: "Spraying",
              desc: "Fast, even spraying for weeds, pests and disease control.",
              href: "/services/spraying",
              icon: (
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M5 12h6" strokeLinecap="round" />
                  <path d="M3 8h8M4 16h7" strokeLinecap="round" />
                  <rect x="12" y="6" width="8" height="12" rx="2" />
                </svg>
              ),
            },
            {
              key: "seeding",
              title: "Seeding & Spreading",
              desc: "Accurate drop for seed, bait and granular products.",
              href: "/services/seeding-spreading",
              icon: (
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M7 17c2-5 8-5 10 0" />
                  <path d="M12 7c-2 1-3 3-3 5 2-1 4-2 5-4 1-2-1-3-2-1z" />
                </svg>
              ),
            },
            {
              key: "mapping",
              title: "Farm & Land Mapping",
              desc: "Accurate farm mapping without the hassle.",
              href: "/services/surveying-mapping",
              icon: (
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
                  <path d="M9 4v14M15 6v14" />
                </svg>
              ),
            },
          ].map((s) => (
            <div key={s.key} className="rounded-xl border p-5 bg-white">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-neutral-100 text-secondary">
                {s.icon}
              </div>
              <h3 className="font-semibold text-lg mt-3">{s.title}</h3>
              <p className="text-sm text-neutral-800 mt-2">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-block mt-4 text-secondary-hover hover:underline"
              >
                Learn more
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
        <h2 className="text-2xl font-semibold">In the field</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Filling photo first */}
          <div className="rounded-xl overflow-hidden border">
            <Image
              src="/IMG_2629.jpeg"
              alt="Filling the spray drone on-site"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Unique videos discovered in /public/videos */}
          {fieldVideos.map((srcPath) => (
            <div key={srcPath} className="rounded-xl overflow-hidden border">
              <video
                className="w-full h-full object-cover"
                src={srcPath}
                controls
                playsInline
                preload="metadata"
              />
            </div>
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
