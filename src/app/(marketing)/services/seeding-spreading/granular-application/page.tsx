import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Granular Application",
  description: "Fertiliser, fire ant bait, or other granular products spread with accuracy.",
  alternates: { canonical: "/services/seeding-spreading/granular-application" },
};

export default function GranularApplicationPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Granular Application") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Granular Application</h1>
          <p className="mt-3 text-neutral-700">Fertiliser, fire ant bait, or other granular products spread with accuracy.</p>
          <h2 className="mt-8 text-xl font-semibold">Products</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Fertilisers</li>
            <li>Fire ant bait</li>
            <li>Other label-approved granular products</li>
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
