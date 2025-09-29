import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Weed Control (Herbicide Spraying)",
  description: "Knock down unwanted weeds in crops, pastures, and hard-to-reach areas with targeted herbicide applications.",
  alternates: { canonical: "/services/spraying/weed-control" },
};

export default function WeedControlPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Weed Control (Herbicide Spraying)") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Weed Control (Herbicide Spraying)</h1>
          <p className="mt-3 text-neutral-700">Knock down unwanted weeds in crops, pastures, and hard-to-reach areas.</p>
          <h2 className="mt-8 text-xl font-semibold">Where it fits</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Crops and orchards</li>
            <li>Pastures and acreage</li>
            <li>Roadside and difficult access areas</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold">Approach</h2>
          <p className="text-neutral-700">Label-aligned rates, droplet size and flight profiles to minimise drift and maximise efficacy.</p>
        </article>
        <aside className="lg:col-span-1">
          <div className="rounded-2xl border p-5 sticky top-24">
            <h2 className="text-xl font-semibold mb-2">Request a Callback</h2>
            <QuoteForm />
          </div>
        </aside>
      </div>
    </section>
  );
}
