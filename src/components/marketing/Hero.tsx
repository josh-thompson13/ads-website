import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] overflow-hidden rounded-[1.25rem] shadow-card">
      <Image
        src="/Capture-2025-09-28-222601.png"
        alt="Australian Drone Solutions"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Drone spraying over a field"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
      <div className="relative z-10 h-full w-full px-4 md:px-6 flex items-center">
        <div className="max-w-xl glass-card ring-glass p-6 md:p-8 rounded-[1.25rem] text-white">
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
          <ul className="mt-4 space-y-2 text-white/90">
            <li className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-accent inline-block" />{" "}
              Targeted herbicide spraying
            </li>
            <li className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-accent inline-block" />{" "}
              Aerial mapping & insights
            </li>
            <li className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-accent inline-block" />{" "}
              Seeding & spreading
            </li>
          </ul>
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
    </section>
  );
}
