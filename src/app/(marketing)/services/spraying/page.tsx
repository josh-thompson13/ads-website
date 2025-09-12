import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spraying Services",
  description: "Herbicide, fungicide and insecticide spraying, plus special applications across South East QLD & Northern NSW.",
  alternates: { canonical: "/services/spraying" },
};

const items = [
  { title: "Weed Control (Herbicide)", href: "/services/spraying/weed-control", desc: "Knock down unwanted weeds in crops, pastures, and hard-to-reach areas." },
  { title: "Disease Management (Fungicide)", href: "/services/spraying/disease-management", desc: "Prevent and control fungal diseases in orchards, turf, and crops." },
  { title: "Pest Control (Insecticide)", href: "/services/spraying/pest-control", desc: "Effective treatment for pests including mosquitoes, fire ants, and crop insects." },
  { title: "Special Applications", href: "/services/spraying/special-applications", desc: "Turf management (golf courses, sports fields), acreage spraying, and sensitive area treatments." },
];

export default function SprayingIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Spraying</h1>
      <p className="mt-3 text-neutral-700">Targeted aerial application for weeds, disease and pests with compliant, efficient coverage.</p>
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
