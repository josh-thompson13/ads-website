import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Farm Mapping",
  description: "NDVI and multispectral imaging for crop health analysis.",
  alternates: { canonical: "/services/surveying-mapping/farm-mapping" },
};

export default function FarmMappingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Farm Mapping") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Farm Mapping</h1>
          <p className="mt-3 text-neutral-700">NDVI and multispectral imaging for crop health analysis.</p>
          <h2 className="mt-8 text-xl font-semibold">Outputs</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>NDVI and vegetation indices</li>
            <li>Geo-referenced orthomosaics</li>
            <li>Block and zone mapping for variable-rate</li>
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

