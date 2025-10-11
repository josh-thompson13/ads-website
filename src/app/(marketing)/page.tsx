import CaseStudyCard from "@/components/CaseStudyCard";
import { CTA } from "@/components/marketing/CTA";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import Hero from "@/components/marketing/Hero";
import StatCard from "@/components/StatCard";
import { localBusinessJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Drone spraying and surveying for farms, golf courses & councils across SE QLD & Northern NSW",
  description:
    "Drone spraying, mosquito control, seeding, and surveying for farms, golf courses, councils and worksites across South East QLD & Northern NSW. Licensed and on time.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drone spraying & surveying | ADS",
    description:
      "Spraying, mosquito control, seeding, and surveying across SE QLD & Northern NSW.",
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
      {/* Trust Snapshot (Stats row) */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <path
                  d="M12 22s8-4 8-10V6L12 3 4 6v6c0 6 8 10 8 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="m9 12 2 2 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="CASA Qualified Crews"
            subtitle="CASA-approved operations, every flight verified and logged."
          />
          <StatCard
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <path
                  d="M12 2.5S6 9 6 13a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Sharper Chemical Use"
            subtitle="Precision spraying hits the target while trimming inputs."
          />
          <StatCard
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <path
                  d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="11"
                  r="2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            }
            title="Qld NSW Coverage"
            subtitle="We mobilise fast across Southeast Queensland and northern NSW."
          />
          <StatCard
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="m8 12 3 3 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Trusted Field Partner"
            subtitle="Preferred by councils, golf courses, and property managers."
          />
        </div>
      </section>
      {/* Feature dark section */}
      <section id="services" className="bg-[#0b1220] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="h2">Our Services</h2>
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
              Precise weed & pest control with less waste.
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
              Accurate seed, bait and granular application.
            </FeatureCard>
            {/** Surveying & Mapping features removed */}
            <FeatureCard
              title="Reliable Scheduling"
              href="/contact"
              ctaLabel="Ask us about it"
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
              On‑time service built around your season.
            </FeatureCard>
            <FeatureCard
              title="Compliance & Safety"
              href="/contact"
              ctaLabel="Ask us about it"
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
              CASA‑compliant operations you can rely on.
            </FeatureCard>
            <FeatureCard
              title="Weed Control"
              href="/contact"
              ctaLabel="Ask us about it"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path
                    d="M12 2v20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 10c2 0 3-2 4-3 1 1 2 3 4 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 15c2 0 3-1 5-1s3 1 5 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              }
            >
              Targeted herbicide application that reduces waste and overspray.
            </FeatureCard>
            <FeatureCard
              title="Pest Control"
              href="/contact"
              ctaLabel="Ask us about it"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path
                    d="M8 9a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0V9Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5v14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 11h4M5 15h4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19 11h-4M19 15h-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 5 7.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 5 16.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Precise treatments for public spaces and properties.
            </FeatureCard>
          </div>
        </div>
      </section>
      {/* Case Studies */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="h2">Proven Results in the Field</h2>
        <p className="lead mt-3 max-w-2xl">
          Real outcomes from real jobs. Faster coverage, reduced waste, better
          consistency.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CaseStudyCard
            image="/Drone_Golf_Course.png"
            sector="Golf Course"
            headline="40% faster coverage"
            blurb="Uniform application across fairways and greens with minimal disruption."
          />
          <CaseStudyCard
            image="/Drone_Spraying_Paddock.png"
            sector="Cropping Farm"
            headline="30% less chemical use"
            blurb="Targeted weed control reduced overspray and saved input costs."
          />
          <CaseStudyCard
            image="/Drone_Spraying.png"
            sector="Council"
            headline="50ha treated efficiently"
            blurb="Coordinated operations across reserves with verifiable coverage."
          />
        </div>
      </section>

      {/* Testimonial omitted until real quotes are available */}
      {/** TODO: Add a real client testimonial with name, role, and location. */}
      <CTA />
    </>
  );
}
