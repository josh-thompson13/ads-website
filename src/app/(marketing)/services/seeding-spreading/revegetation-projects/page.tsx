import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Revegetation Projects",
  description: "Seed spreading for rehabilitation and erosion control.",
  alternates: { canonical: "/services/seeding-spreading/revegetation-projects" },
};

export default function RevegetationProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Revegetation Projects") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Revegetation Projects</h1>
          <p className="mt-3 text-neutral-700">Seed spreading for rehabilitation and erosion control.</p>
          <h2 className="mt-8 text-xl font-semibold">Use cases</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Post-disturbance rehabilitation</li>
            <li>Erosion control</li>
            <li>Habitat restoration</li>
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
