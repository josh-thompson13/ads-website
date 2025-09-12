import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Surveying & Mapping",
  description: "Farm mapping, land surveys, infrastructure inspections and environmental monitoring with high-resolution outputs.",
  alternates: { canonical: "/services/surveying-mapping" },
};

const items = [
  { title: "Farm Mapping", href: "/services/surveying-mapping/farm-mapping", desc: "NDVI and multispectral imaging for crop health analysis." },
  { title: "Land Surveys", href: "/services/surveying-mapping/land-surveys", desc: "Orthomosaic maps, elevation models, and property mapping." },
  { title: "Infrastructure Inspections", href: "/services/surveying-mapping/infrastructure-inspections", desc: "High-resolution images of roofs, towers, solar panels, and other assets." },
  { title: "Environmental Monitoring", href: "/services/surveying-mapping/environmental-monitoring", desc: "Track erosion, invasive weeds, and land use changes." },
];

export default function SurveyingMappingIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Surveying & Mapping</h1>
      <p className="mt-3 text-neutral-700">High-resolution mapping and inspection outputs to support decisions and documentation.</p>
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

