import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Weed Spraying",
  description: "Broadacre and spot spraying for acreage, parks/reserves and roadside with compliant, targeted application.",
  alternates: { canonical: "/services/weed-spraying" },
};

export default function WeedSprayingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Weed Spraying") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Weed Spraying</h1>
          <p className="mt-3 text-neutral-700">
            Spot and blanket applications for acreage, parks and roadside. Minimise drift, maximise efficacy.
          </p>
          <h2 className="mt-8 text-xl font-semibold">Applications</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Broadacre and spot spraying</li>
            <li>Parks and reserves</li>
            <li>Roadside and hard-to-access areas</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold">Safety & compliance</h2>
          <p>Licensed and insured, CASA-compliant operations with herbicide stewardship front of mind.</p>
          <h2 className="mt-8 text-xl font-semibold">FAQ</h2>
          <dl className="mt-3 space-y-4">
            <div>
              <dt className="font-medium">What weather windows do you target?</dt>
              <dd className="text-neutral-700">Calm conditions with suitable temperature and humidity to minimise drift.</dd>
            </div>
            <div>
              <dt className="font-medium">How do you manage drift?</dt>
              <dd className="text-neutral-700">We select droplet size, nozzles and altitude to match the label and conditions.</dd>
            </div>
            <div>
              <dt className="font-medium">Do you handle permits?</dt>
              <dd className="text-neutral-700">We operate within CASA rules and coordinate permissions where required.</dd>
            </div>
            <div>
              <dt className="font-medium">Can you service roadside corridors?</dt>
              <dd className="text-neutral-700">Yes — drones provide safe access and efficient coverage.</dd>
            </div>
            <div>
              <dt className="font-medium">What about sensitive areas?</dt>
              <dd className="text-neutral-700">We plan buffer zones and application parameters to protect sensitive sites.</dd>
            </div>
          </dl>
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
