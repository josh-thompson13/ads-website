import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Crop Spraying",
  description: "Variable-rate aerial application that minimises crop damage while reducing labour and compaction.",
  alternates: { canonical: "/services/crop-spraying" },
};

export default function CropSprayingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Crop Spraying") }} />
      <div className="grid gap-10">
        <article>
          <h1 className="text-3xl font-bold">Crop Spraying</h1>
          <p className="mt-3 text-neutral-700">
            Variable-rate application to protect yield while reducing ground compaction and labour.
          </p>
          <h2 className="mt-8 text-xl font-semibold">Supported crops</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Sugarcane</li>
            <li>Horticulture</li>
            <li>Pasture</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold">Efficacy & notes</h2>
          <p>We tailor nozzles and rates to label guidance and crop stage for effective coverage and minimal drift.</p>
          <h2 className="mt-8 text-xl font-semibold">FAQ</h2>
          <dl className="mt-3 space-y-4">
            <div>
              <dt className="font-medium">How do you handle variable-rate?</dt>
              <dd className="text-neutral-700">We plan missions with mapped blocks and adjust rates to match field zones.</dd>
            </div>
            <div>
              <dt className="font-medium">What about pre-harvest intervals?</dt>
              <dd className="text-neutral-700">We follow label PHIs and schedule accordingly.</dd>
            </div>
            <div>
              <dt className="font-medium">Do you operate near sensitive crops?</dt>
              <dd className="text-neutral-700">Yes — with buffer zones and drift-reduction strategies.</dd>
            </div>
          </dl>
          <div className="mt-8 rounded-2xl border p-5">
            <h2 className="text-xl font-semibold mb-2">Request a Callback</h2>
            <QuoteForm />
          </div>
        </article>
      </div>
    </section>
  );
}
