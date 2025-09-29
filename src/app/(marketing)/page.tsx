import { CTA } from "@/components/marketing/CTA";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import Hero from "@/components/marketing/Hero";
import { ImageShowcase } from "@/components/marketing/ImageShowcase";
import { StatCard } from "@/components/marketing/StatCard";
import { Testimonial } from "@/components/marketing/Testimonial";
import { Button } from "@/components/ui/button";
import { localBusinessJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drone spraying, mapping and surveying across SE QLD & Northern NSW",
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
  const fieldVideos = ["/videos/IMG_2626.mp4", "/videos/IMG_2627.mp4"];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: localBusinessJsonLd() }}
      />
      <Hero />

      {/* About panel with tabs + intro + stats to mirror the reference band */}
      <section id="about" className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Tabs row */}
          <div className="flex flex-wrap gap-2">
            {["About Us", "Journey", "Vision", "Mission"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm hover:bg-muted"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Intro copy */}
          <div className="py-6">
            <div className="flex items-start gap-3">
              <span
                className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-ink/60"
                aria-hidden
              />
              <div className="flex-1">
                <p className="text-2xl md:text-3xl leading-snug">
                  With years of hands‑on experience, we help farms, councils and
                  worksites get reliable drone services that improve results and
                  save time. Together, we’re shaping a smarter approach to land
                  management across South East QLD & Northern NSW.
                </p>
                <Link href="/contact" className="mt-6 inline-block">
                  <Button variant="secondary">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="pb-2 grid gap-4 md:grid-cols-3">
            <StatCard
              value="10+"
              title="Years of Agricultural Innovation"
              description="With a decade of experience, we deliver advancements in precision agriculture."
              imageSrc="/hero_spraying.jpg"
            />
            <StatCard
              value="30%"
              title="Water Savings"
              description="Precision application reduces waste and improves efficiency."
              imageSrc="/hero_spraying.jpg"
            />
            <StatCard
              value="85%"
              title="Customer Satisfaction"
              description="Our clients trust us to deliver reliable outcomes."
              accent
            />
          </div>
        </div>
      </section>

      {/* Feature dark section */}
      <section id="services" className="bg-[#0b1220] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-display font-semibold">
            Unlock the future of farming with powerful features
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
              title="Farm & Land Mapping"
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
            heroSrc="/hero_spraying.jpg"
            thumbs={["/gallery/gallery-1.svg", "/gallery/gallery-2.svg"]}
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
