import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pasture Reseeding",
  description: "Improve grazing land with even seed distribution using drone seeding.",
  alternates: { canonical: "/services/seeding-spreading/pasture-reseeding" },
};

export default function PastureReseedingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Pasture Reseeding") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Pasture Reseeding</h1>
          <p className="mt-3 text-neutral-700">Improve grazing land with even seed distribution.</p>
          <h2 className="mt-8 text-xl font-semibold">Benefits</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Consistent coverage across variable terrain</li>
            <li>Rapid turnaround for large areas</li>
            <li>Minimal ground disturbance</li>
          </ul>
        </article>
        <aside className="lg:col-span-1">
          <div className="rounded-2xl border p-5 sticky top-24">
            <h2 className="text-xl font-semibold mb-2">Request a Quote</h2>
            <QuoteForm />
          </div>
        </aside>
      </div>
    </section>
  );
}

