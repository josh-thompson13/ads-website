import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Infrastructure Inspections",
  description: "High-resolution images of roofs, towers, solar panels, and other assets.",
  alternates: { canonical: "/services/surveying-mapping/infrastructure-inspections" },
};

export default function InfrastructureInspectionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Infrastructure Inspections") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Infrastructure Inspections</h1>
          <p className="mt-3 text-neutral-700">High-resolution images of roofs, towers, solar panels, and other assets.</p>
          <h2 className="mt-8 text-xl font-semibold">Targets</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Roofs and gutters</li>
            <li>Communication towers</li>
            <li>Solar arrays and critical infrastructure</li>
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
