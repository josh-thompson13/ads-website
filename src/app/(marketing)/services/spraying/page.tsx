import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/with-base-path";
import { genericBlurDataURL } from "@/lib/image-placeholder";

export const metadata: Metadata = {
  title: "Spraying Services",
  description: "Herbicide, fungicide and insecticide spraying, plus special applications across South East QLD & Northern NSW.",
  alternates: { canonical: "/services/spraying" },
};

const items = [
  {
    title: "Weed Control (Herbicide)",
    href: "/services/spraying/weed-control",
    desc: "Knock down unwanted weeds in crops, pastures, and hard-to-reach areas.",
    image: "/Spraying/Weeds.jpg",
  },
  {
    title: "Disease Management (Fungicide)",
    href: "/services/spraying/disease-management",
    desc: "Prevent and control fungal diseases in orchards, turf, and crops.",
    image: "/Spraying/Fungicide.jpg",
  },
  {
    title: "Pest Control (Insecticide)",
    href: "/services/spraying/pest-control",
    desc: "Effective treatment for pests including mosquitoes, fire ants, and crop insects.",
    image: "/Spraying/Mosquito.jpg",
  },
  {
    title: "Special Applications",
    href: "/services/spraying/special-applications",
    desc: "Turf management (golf courses, sports fields), acreage spraying, and sensitive area treatments.",
    image: "/Spraying/Special_Application.jpg",
  },
];

const pricingTiers = [
  {
    title: "Small acreage / spot spraying / hobby farms",
    context: "Fence lines, small paddocks, steep or wet areas, small orchards",
    price: "➜ $750 – $1,000 total",
  },
  {
    title: "Medium farms / multiple paddocks",
    context: "Pasture spraying, fungicide/insecticide runs, several paddocks or blocks",
    price: "➜ $1,000 – $1,500 total",
  },
  {
    title: "Larger jobs / high volume spraying",
    context: "Broadacre-style work, large orchards, multiple chemical runs",
    price: "➜ From $1,500+ total",
  },
];

export default function SprayingIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Spraying</h1>
      <p className="mt-3 text-neutral-700">Targeted aerial application for weeds, disease and pests with compliant, efficient coverage.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map((i, index) => {
          const imageSrc = withBasePath(i.image);
          return (
          <div key={i.href} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={genericBlurDataURL}
                priority={index < 2}
              />
            </div>
            <div className="p-5">
              <h2 className="font-semibold text-lg">
                <Link href={i.href} className="hover:underline">{i.title}</Link>
              </h2>
              <p className="text-sm text-neutral-700 mt-2">{i.desc}</p>
              <div className="mt-4">
                <Link href="/contact"><Button size="sm">Request a Callback</Button></Link>
              </div>
            </div>
          </div>
        );
        })}
      </div>
      <div id="pricing" className="mt-16 rounded-3xl border bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">🌾 Agricultural Drone Spraying</p>
        <h2 className="mt-2 text-2xl font-bold">Agricultural Drone Spraying – Pricing Guide</h2>
        <p className="mt-3 max-w-3xl text-neutral-700">
          We provide fast, accurate and cost-effective agricultural spraying for farms and acreage within one hour of Mermaid Beach. You supply your preferred chemicals and we take care of the drone, pilot and precision application.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">💲 Hourly Rate (Labour Only)</h3>
              <p className="mt-2 text-3xl font-bold">$250/hr <span className="text-base font-medium">+ GST</span></p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700">
                <li>You supply all chemicals.</li>
                <li>Rate covers the drone, pilot, equipment, flight planning and on-site operations.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">📦 Minimum Charge Per Job</h3>
              <p className="mt-2 text-neutral-700">$750 + GST minimum charge (equal to 3 on-site billable hours including setup and flight time).</p>
              <p className="mt-2 text-neutral-700">Minimum applies even for small jobs to cover travel, setup and operational requirements.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🚗 Travel</h3>
              <p className="mt-2 text-neutral-700">No travel fee for properties within 1 hour of Mermaid Beach.</p>
              <p className="mt-2 text-neutral-700">For jobs outside this area (if agreed), travel can be quoted separately.</p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border bg-neutral-50 p-6">
              <h3 className="text-xl font-semibold">🔎 Typical Job Pricing (Guide Only)</h3>
              <p className="mt-2 text-neutral-700">Every property is different (terrain, access, spray volume and area size), but most customers fall into these ranges (all ex GST):</p>
              <div className="mt-6 space-y-5">
                {pricingTiers.map((tier) => (
                  <div key={tier.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                    <p className="font-semibold">{tier.title}</p>
                    <p className="mt-1 text-sm text-neutral-600">{tier.context}</p>
                    <p className="mt-3 text-lg font-bold text-secondary-hover">{tier.price}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-neutral-600">These ranges are a guide only — final pricing depends on the actual time required on site at $250/hr + GST, with a $750 + GST minimum.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border bg-secondary/5 p-6 md:flex-row md:items-center">
          <div className="md:flex-1">
            <h3 className="text-xl font-semibold">📞 Get a Free Property Assessment</h3>
            <p className="mt-2 text-neutral-700">Send your location and what you need sprayed, and we’ll provide a quick, obligation-free assessment and an estimated cost based on the pricing guide above.</p>
          </div>
          <Link href="/contact" className="md:self-start">
            <Button size="lg">Request Free Assessment</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
