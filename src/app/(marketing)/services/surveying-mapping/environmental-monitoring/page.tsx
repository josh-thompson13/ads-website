import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Environmental Monitoring",
  description: "Track erosion, invasive weeds, and land use changes with repeatable aerial surveys.",
  alternates: { canonical: "/services/surveying-mapping/environmental-monitoring" },
};

export default function EnvironmentalMonitoringPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Environmental Monitoring") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Environmental Monitoring</h1>
          <p className="mt-3 text-neutral-700">Track erosion, invasive weeds, and land use changes.</p>
          <h2 className="mt-8 text-xl font-semibold">Use cases</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Erosion and sediment control</li>
            <li>Invasive species mapping</li>
            <li>Change detection over time</li>
          </ul>
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
