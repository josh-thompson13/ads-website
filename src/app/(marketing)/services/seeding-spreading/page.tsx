import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seeding & Spreading",
  description: "Pasture reseeding, revegetation, cover crops and granular application with even, efficient coverage.",
  alternates: { canonical: "/services/seeding-spreading" },
};

const items = [
  { title: "Pasture Reseeding", href: "/services/seeding-spreading/pasture-reseeding", desc: "Improve grazing land with even seed distribution." },
  { title: "Revegetation Projects", href: "/services/seeding-spreading/revegetation-projects", desc: "Seed spreading for rehabilitation and erosion control." },
  { title: "Cover Crops", href: "/services/seeding-spreading/cover-crops", desc: "Establish cover crops quickly and efficiently." },
  { title: "Granular Application", href: "/services/seeding-spreading/granular-application", desc: "Fertiliser, fire ant bait, or other granular products spread with accuracy." },
];

export default function SeedingSpreadingIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Seeding & Spreading</h1>
      <p className="mt-3 text-neutral-700">Efficient, even distribution of seed and granular products across varied terrain.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="block rounded-2xl border p-5 bg-white shadow-sm hover:border-secondary-hover">
            <h2 className="font-semibold text-lg">{i.title}</h2>
            <p className="text-sm text-neutral-700 mt-2">{i.desc}</p>
            <span className="inline-block mt-3 text-secondary-hover">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

