import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pest Control (Insecticide Spraying)",
  description: "Effective treatment for pests including mosquitoes, fire ants, and crop insects.",
  alternates: { canonical: "/services/spraying/pest-control" },
};

export default function PestControlPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Pest Control (Insecticide Spraying)") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Pest Control (Insecticide)</h1>
          <p className="mt-3 text-neutral-700">Effective treatment for pests including mosquitoes, fire ants, and crop insects.</p>
          <h2 className="mt-8 text-xl font-semibold">Typical targets</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Mosquito control</li>
            <li>Fire ant baiting</li>
            <li>Caterpillars and other crop insects</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold">Approach</h2>
          <p className="text-neutral-700">Product selection and flight profiles align with labels and sensitive area buffers.</p>
        </article>
        <aside className="lg:col-span-1">
          <div className="rounded-2xl border p-5 sticky top-24">
            <h2 className="text-xl font-semibold mb-2">Request a Callback</h2>
            <p className="text-neutral-700 text-sm">Tell us about your job and we’ll call you back fast.</p>
            <div className="mt-3">
              <Link href="/contact"><Button size="sm">Go to Contact Form</Button></Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
