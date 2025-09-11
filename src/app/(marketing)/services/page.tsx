import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional drone spraying: weed spraying, crop spraying, and fire ant eradication across SE QLD & Northern NSW.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Weed Spraying",
    href: "/services/weed-spraying",
    bullets: [
      "Acreage, parks & roadside",
      "Spot and blanket applications",
      "Minimise drift, maximise efficacy",
    ],
  },
  {
    title: "Crop Spraying",
    href: "/services/crop-spraying",
    bullets: [
      "Variable-rate application",
      "Minimal crop damage",
      "Reduced labour & compaction",
    ],
  },
  {
    title: "Fire Ant Eradication",
    href: "/services/fire-ant-eradication",
    bullets: [
      "Survey → plan → bait → follow-up",
      "QLD compliance",
      "Rapid response",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border p-5 bg-white dark:bg-neutral-950 shadow-sm">
            <h2 className="font-semibold text-xl">{s.title}</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-800 dark:text-neutral-200">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <Link href={s.href} className="text-teal-700 hover:underline">Learn more</Link>
              <Link href="/contact"><Button size="sm">Request a Quote</Button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

