import { CtaBanner } from "@/components/cta-banner";
import ServiceAreaMap from "@/components/map/ServiceAreaMap";
import { Button } from "@/components/ui/button";
import { localBusinessJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
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
  const fieldVideos = ["/videos/IMG_2626.mp4", "/videos/IMG_2627.mp4"];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: localBusinessJsonLd() }}
      />
      {/* Hero — full-bleed card with background image, gradient overlay, lime CTA */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div
          className="relative overflow-hidden rounded-[1.25rem] soft-shadow"
          style={{
            backgroundImage: `url(/hero_spraying.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label="Hero section with farm field background"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center p-8 md:p-12 min-h-[420px]">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                Agriculture Drone Services
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Drone spraying and farm mapping across SE QLD & Northern NSW
              </h1>
              <p className="mt-4 text-lg text-white/90 max-w-xl">
                We handle spraying, seeding and mapping for farms, councils and worksites. Licensed and insured. Straightforward and reliable.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button size="lg" variant="primary" className="shadow-[0_0_0_6px_rgba(163,230,53,0.25)]">
                    Get a Quote
                  </Button>
                </Link>
                <a href="tel:+6104xxxxxxxx">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    Call Us Today
                  </Button>
                </a>
              </div>
            </div>
            {/* Side card */}
            <div className="">
              <div className="ml-auto max-w-md rounded-2xl bg-white/85 backdrop-blur p-6 ring-1 ring-black/5">
                <p className="text-sm font-medium text-foreground/70">Our Focus</p>
                <ul className="mt-3 space-y-3 text-foreground/90">
                  {[{
                    title: "Spraying",
                    desc: "Fast, even coverage for weeds, pests and disease.",
                  }, {
                    title: "Seeding & Spreading",
                    desc: "Accurate application for seed, bait and granular products.",
                  }, {
                    title: "Farm & Land Mapping",
                    desc: "High‑resolution mapping without the hassle.",
                  }].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-secondary">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                          <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm opacity-80">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="mt-4 inline-flex items-center gap-2 text-secondary hover:underline">
                  Learn more
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section pills (visual only) */}
      <section className="mx-auto max-w-6xl px-4 pt-6">
        <div className="flex flex-wrap gap-2">
          {[
            { label: "About Us", href: "#about" },
            { label: "Journey", href: "#services" },
            { label: "Vision", href: "#tech" },
            { label: "Mission", href: "#testimonials" },
          ].map((t) => (
            <a
              key={t.label}
              href={t.href}
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm hover:bg-neutral-50"
            >
              {t.label}
            </a>
          ))}
        </div>
      </section>

      {/* Features panel matching the dark card section */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-10">
        <div className="panel-dark p-6 md:p-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Unlock powerful, efficient services</h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                key: "spraying",
                title: "Spraying",
                desc: "Fast, even coverage for weeds, pests and disease.",
                href: "/services/spraying",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M5 12h6" strokeLinecap="round" />
                    <path d="M3 8h8M4 16h7" strokeLinecap="round" />
                    <rect x="12" y="6" width="8" height="12" rx="2" />
                  </svg>
                ),
              },
              {
                key: "seeding",
                title: "Seeding & Spreading",
                desc: "Accurate application for seed, bait and granular products.",
                href: "/services/seeding-spreading",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M7 17c2-5 8-5 10 0" />
                    <path d="M12 7c-2 1-3 3-3 5 2-1 4-2 5-4 1-2-1-3-2-1z" />
                  </svg>
                ),
              },
              {
                key: "mapping",
                title: "Farm & Land Mapping",
                desc: "High‑resolution mapping without the hassle.",
                href: "/services/surveying-mapping",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
                    <path d="M9 4v14M15 6v14" />
                  </svg>
                ),
              },
              {
                key: "safety",
                title: "Compliance & Safety",
                desc: "CASA‑compliant procedures and insured operations.",
                href: "/contact",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div key={s.key} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary text-secondary">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-lg mt-3">{s.title}</h3>
                <p className="text-sm text-white/80 mt-2">{s.desc}</p>
                <Link href={s.href} className="inline-flex items-center gap-1 mt-4 text-white hover:underline">
                  Learn more
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/intro block like the large paragraph section */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-10">
        <div className="panel p-8 soft-shadow">
          <p className="text-2xl md:text-3xl leading-snug">
            With years of hands‑on experience, we help farms, councils and worksites get reliable drone services that improve results and save time. Together, we’re shaping a smarter approach to land management across South East QLD & Northern NSW.
          </p>
          <Link href="/contact" className="mt-6 inline-block">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10" id="tech">
        <div className="rounded-[1.25rem] overflow-hidden border soft-shadow">
          <div className="relative">
            <img src="/hero_spraying.jpg" alt="Drone technology in action" className="h-[320px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute left-6 bottom-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-sm">Our Technologies</span>
              <h3 className="mt-3 text-2xl font-semibold">In the field</h3>
              <p className="text-white/85 max-w-xl">Real work in real conditions — consistent coverage and precise application across a variety of terrain.</p>
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
            {fieldVideos.map((srcPath) => (
              <div key={srcPath} className="rounded-xl overflow-hidden border">
                <video className="w-full h-56 object-cover" src={srcPath} controls playsInline preload="metadata" muted />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Service Area</h2>
        <ServiceAreaMap />
      </section>

      {/* Field videos moved into technology section above */}

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-10">
        <div className="panel p-8 soft-shadow">
          <h2 className="text-2xl font-semibold">What clients say</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {["Reliable and precise.", "Great coverage and fast.", "Professional and safety-first."].map((t, i) => (
              <blockquote key={i} className="rounded-2xl border p-5 bg-white">
                <p className="text-neutral-800">“{t}”</p>
                <footer className="mt-3 text-sm text-neutral-600">— Local landholder</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need drone services?"
        subtitle="We service South East QLD & Northern NSW."
      />
    </>
  );
}
