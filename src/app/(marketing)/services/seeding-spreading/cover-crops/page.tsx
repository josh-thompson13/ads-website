import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cover Crops",
  description: "Establish cover crops quickly and efficiently using aerial seeding.",
  alternates: { canonical: "/services/seeding-spreading/cover-crops" },
};

export default function CoverCropsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Cover Crops") }} />
      <div className="grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold">Cover Crops</h1>
          <p className="mt-3 text-neutral-700">Establish cover crops quickly and efficiently.</p>
          <h2 className="mt-8 text-xl font-semibold">Benefits</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Fast establishment windows</li>
            <li>Uniform distribution</li>
            <li>Reduced compaction vs ground equipment</li>
          </ul>
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
