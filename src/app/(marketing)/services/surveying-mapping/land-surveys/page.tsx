import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Land Surveys",
  description: "Orthomosaic maps, elevation models, and property mapping.",
  alternates: { canonical: "/services/surveying-mapping/land-surveys" },
};

export default function LandSurveysPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Land Surveys") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Land Surveys</h1>
          <p className="mt-3 text-neutral-700">Orthomosaic maps, elevation models, and property mapping.</p>
          <h2 className="mt-8 text-xl font-semibold">Outputs</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>High-resolution orthomosaics</li>
            <li>Digital elevation models</li>
            <li>Property and asset mapping</li>
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

