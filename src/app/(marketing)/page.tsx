import { CTA } from "@/components/marketing/CTA";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import Hero from "@/components/marketing/Hero";
import { ImageShowcase } from "@/components/marketing/ImageShowcase";
import { Testimonial } from "@/components/marketing/Testimonial";
import { localBusinessJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Drone spraying, mapping and surveying for farms, golf courses & councils across SE QLD & Northern NSW",
  description:
    "Drone spraying, mosquito control, seeding, mapping and surveying for farms, golf courses, councils and worksites across South East QLD & Northern NSW. Licensed, insured and on time.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drone spraying, mapping & surveying | ADS",
    description:
      "Spraying, mosquito control, seeding, mapping and surveying across SE QLD & Northern NSW.",
    url: "/",
  },
};

export default function HomePage() {
  // Media used throughout the page
  // const fieldVideos = ["/videos/IMG_2626.mp4", "/videos/IMG_2627.mp4"];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: localBusinessJsonLd() }}
      />
      <Hero />

      {/* Full‑width highlight cards band (matches provided design) */}
      <section id="highlights" className="bg-white py-10">
        <div className="w-full px-3 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Card 1: split image + info */}
            <div className="grid grid-cols-2 rounded-[1.25rem] overflow-hidden border border-black/10 bg-white shadow-card min-h-[220px]">
              <div className="relative col-span-1">
                <Image
                  src="/Drone_Spraying_Paddock.png"
                  alt="Drone spraying over a paddock"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-1 bg-muted p-5">
                <Link
                  href="/services"
                  aria-label="Open services"
                  className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                    <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className="text-3xl font-display font-bold text-ink">On‑Time</div>
                <div className="mt-1 font-semibold text-ink">Scheduling Built Around Your Season</div>
                <p className="text-sm text-ink/70 mt-1">
                  Reliable, CASA‑compliant operations planned around weather windows and site conditions.
                </p>
              </div>
            </div>

            {/* Card 2: image only */}
            <div className="relative rounded-[1.25rem] overflow-hidden border border-black/10 shadow-card min-h-[220px]">
              <Image
                src="/Drone_Golf_Course.png"
                alt="Drone operations on a golf course"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Card 3: accent info */}
            <div className="relative rounded-[1.25rem] overflow-hidden border border-black/10 bg-[var(--stat)] p-5 shadow-card min-h-[220px]">
              <Link
                href="/contact"
                aria-label="Contact"
                className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="text-4xl font-display font-extrabold text-ink">Lower Cost</div>
              <div className="mt-1 font-semibold text-ink">Typical Savings vs Traditional Methods</div>
              <p className="text-sm text-ink/80 mt-1">
                Cut labour and setup time while improving consistency—often more cost‑effective than manual or helicopter application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature dark section */}
      <section id="services" className="bg-[#0b1220] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-display font-semibold">
            Unlock smarter land management with powerful features
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Precision Spraying"
              href="/services/spraying"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path
                    d="M5 12h6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 8h8M4 16h7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <rect
                    x="12"
                    y="6"
                    width="8"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              }
            >
              Fast, even coverage for weeds, pests and disease.
            </FeatureCard>
            <FeatureCard
              title="Seeding & Spreading"
              href="/services/seeding-spreading"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path
                    d="M7 17c2-5 8-5 10 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M12 7c-2 1-3 3-3 5 2-1 4-2 5-4 1-2-1-3-2-1z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              }
            >
              Accurate application for seed, bait and granular products.
            </FeatureCard>
            <FeatureCard
              title="Surveying & Mapping"
              href="/services/surveying-mapping"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path
                    d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M9 4v14M15 6v14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              }
            >
              High‑resolution mapping without the hassle.
            </FeatureCard>
            <FeatureCard
              title="Compliance & Safety"
              href="/contact"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              CASA‑compliant procedures and insured operations.
            </FeatureCard>
            <FeatureCard
              title="Field Analytics"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path
                    d="M3 3v18h18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M7 14l3-3 3 2 4-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Insights from aerial data to help plan and track work.
            </FeatureCard>
            <FeatureCard
              title="Reliable Scheduling"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M12 7v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              }
            >
              On‑time operations built around your season and weather windows.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Technology image showcase */}

      <section id="tech" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-0 md:px-0">
          <ImageShowcase
            heroSrc="/Drone_Spraying_Paddock.png"
            thumbs={["/Drone_Golf_Course.png", "/Drone_Spraying.png"]}
          />
        </div>
      </section>

      {/* Testimonial strip */}
      <section id="testimonials" className="bg-white py-12">
        <Testimonial />
      </section>

      {/* Field videos are part of the technology showcase */}

      <CTA />
    </>
  );
}
