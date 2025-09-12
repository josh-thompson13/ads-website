import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing: from $X/hr or $Y/ha. Minimum call-out and travel rates apply.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="mt-6 rounded-2xl border p-5 bg-white">
        <ul className="list-disc pl-5 space-y-2">
          <li>From $X/hr or $Y/ha (job dependent)</li>
          <li>Minimum call-out applies</li>
          <li>Travel rates based on distance</li>
          <li>Factors: terrain, access, product, buffer zones, permits</li>
        </ul>
        <p className="mt-4 text-sm text-neutral-600">Download our rate card:</p>
        <Link href="/rate-card.pdf" className="inline-block mt-2 text-secondary-hover hover:underline">Rate card (PDF)</Link>
      </div>
    </section>
  );
}
