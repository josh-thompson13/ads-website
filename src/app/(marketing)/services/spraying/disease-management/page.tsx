import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Disease Management (Fungicide Spraying)",
  description: "Prevent and control fungal diseases in orchards, turf, and crops with precise aerial applications.",
  alternates: { canonical: "/services/spraying/disease-management" },
};

export default function DiseaseManagementPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Disease Management (Fungicide Spraying)") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Disease Management (Fungicide)</h1>
          <p className="mt-3 text-neutral-700">Prevent and control fungal diseases in orchards, turf, and crops.</p>
          <h2 className="mt-8 text-xl font-semibold">Applications</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Orchards and vineyards</li>
            <li>Turf surfaces</li>
            <li>Broadacre crops</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold">Approach</h2>
          <p className="text-neutral-700">We tailor coverage and timing to disease pressure, growth stage and label guidance.</p>
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

