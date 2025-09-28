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
                Sustainable Farming Tech
              </Badge>
              <h1 className="h1 mt-4 text-white">
                Drone spraying and farm mapping across SE QLD & Northern NSW
              </h1>
              <p className="mt-3 text-white/90">
                We handle spraying, seeding and mapping for farms, councils and
                worksites. Licensed and insured. Straightforward and reliable.
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
        </div>
      </div>
    </section>
  );
}
