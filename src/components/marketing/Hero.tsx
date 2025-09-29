import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // Full‑bleed hero that extends under the sticky header
    <section className="relative hero-offset h-[88vh] min-h-[560px] overflow-hidden">
      {/* Background image for sm and up */}
      <div className="hidden sm:block absolute inset-0 w-full h-full">
        <Image
          src="/Capture-2025-09-28-222601.png"
          alt="Australian Drone Solutions"
          fill
          priority
          className="object-cover"
          aria-label="Drone spraying over a field"
        />
      </div>
      {/* Background image for xs (below sm) */}
      <div className="block sm:hidden absolute inset-0 w-full h-full">
        <Image
          src="/Capture-2025-09-28-225210.png"
          alt="Australian Drone Solutions mobile"
          fill
          priority
          className="object-cover"
          aria-label="Drone spraying over a field mobile"
        />
      </div>
      {/* Gradient wash similar to reference */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent" />

      {/* Content layout: left hero copy + right mission card */}
      <div className="relative z-10 h-full w-full px-4 md:px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-center">
          {/* Left: main message */}
          <div className="lg:col-span-7">
            <div className="max-w-xl text-white">
              <Badge className="bg-accent/30 text-ink/80">
                Aerial Spraying • Mapping • Surveying
              </Badge>
              <h1 className="h1 mt-4 text-white">
                Drone Spraying, Seeding, Mapping & Surveying
              </h1>
              <p className="mt-3 text-white/90">
                Spraying (weeds, pests & mosquitoes), seeding, mapping and
                surveying for farms, golf courses, parks and worksites. Licensed
                and insured. Straightforward and reliable.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/contact">
                  <Button className="px-5 py-3 rounded-[1.25rem] shadow-card shadow-hover">
                    Get Started
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    variant="outline"
                    className="px-5 py-3 rounded-[1.25rem] border-white/40 bg-white/20 text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Right: mission card (glass) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="ml-auto max-w-md rounded-2xl glass-card ring-glass text-white p-5">
              <div className="text-sm opacity-90 mb-2">Our Mission</div>
              <h3 className="font-display text-2xl font-semibold leading-snug">
                Practical drone services that save time and reduce costs—
                delivered safely and on schedule.
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                  Precise application for consistent results
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                  Safer, compliant operations (CASA‑aligned)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                  Flexible scheduling across SE QLD & Northern NSW
                </li>
              </ul>
              <div className="mt-4 flex gap-3">
                <Link href="#about">
                  <Button
                    variant="accent"
                    className="px-4 py-2 rounded-xl text-ink"
                  >
                    Our Approach
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-4 py-2 rounded-xl border-white/40 bg-white/10 text-white"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
