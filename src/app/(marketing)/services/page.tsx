import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional drone services: Spraying, Seeding & Spreading, and Surveying & Mapping across South East QLD & Northern NSW.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Spraying",
    href: "/services/spraying",
    bullets: [
      "Weed control (herbicide)",
      "Disease management (fungicide)",
      "Pest control (insecticide)",
      "Special applications",
    ],
  },
  {
    title: "Seeding & Spreading",
    href: "/services/seeding-spreading",
    bullets: [
      "Pasture reseeding",
      "Revegetation projects",
      "Cover crops",
      "Granular application",
    ],
  },
  {
    title: "Surveying & Mapping",
    href: "/services/surveying-mapping",
    bullets: [
      "Farm mapping (NDVI, multispectral)",
      "Land surveys (orthos, elevation)",
      "Infrastructure inspections",
      "Environmental monitoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border p-5 bg-white shadow-sm">
            <h2 className="font-semibold text-xl">{s.title}</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-800">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <Link href={s.href} className="text-secondary-hover hover:underline">Learn more</Link>
              <Link href="/contact"><Button size="sm">Request a Callback</Button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
