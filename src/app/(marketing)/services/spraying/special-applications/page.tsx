import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Special Applications",
  description: "Turf management (golf courses, sports fields), acreage spraying, and sensitive area treatments.",
  alternates: { canonical: "/services/spraying/special-applications" },
};

export default function SpecialApplicationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Special Applications (Spraying)") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Special Applications</h1>
          <p className="mt-3 text-neutral-700">Turf management (golf courses, sports fields), acreage spraying, and sensitive area treatments.</p>
          <h2 className="mt-8 text-xl font-semibold">Use cases</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Golf courses and sports turf</li>
            <li>Acreage and estates</li>
            <li>Operations near sensitive areas with appropriate buffers</li>
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

