import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { serviceJsonLd } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Ant Eradication",
  description: "QLD-compliant bait application: survey → plan → bait → follow-up with rapid response.",
  alternates: { canonical: "/services/fire-ant-eradication" },
};

export default function FireAntPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: serviceJsonLd("Fire Ant Eradication") }} />
      <div className="grid gap-10">
        <article>
          <h1 className="text-3xl font-bold">Fire Ant Eradication</h1>
          <p className="mt-3 text-neutral-700">Rapid bait application aligned with QLD guidance.</p>
          <h2 className="mt-8 text-xl font-semibold">Flow</h2>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Survey the site and map infestations</li>
            <li>Plan treatment windows and products</li>
            <li>Apply bait evenly via drone</li>
            <li>Follow up and re-treat as needed</li>
          </ol>
          <h2 className="mt-8 text-xl font-semibold">Compliance</h2>
          <p>
            We follow QLD guidance and manufacturer labels to ensure safe, compliant treatment. See official guidance: {" "}
            <Link href="#" className="text-secondary-hover hover:underline">QLD fire ant resources</Link>.
          </p>
          <h2 className="mt-8 text-xl font-semibold">FAQ</h2>
          <dl className="mt-3 space-y-4">
            <div>
              <dt className="font-medium">When is baiting most effective?</dt>
              <dd className="text-neutral-700">When ants are actively foraging and rain is not forecast.</dd>
            </div>
            <div>
              <dt className="font-medium">How many rounds are required?</dt>
              <dd className="text-neutral-700">Usually multiple rounds across the season to ensure control.</dd>
            </div>
            <div>
              <dt className="font-medium">Can you cover large areas quickly?</dt>
              <dd className="text-neutral-700">Yes — drones enable fast, even coverage across broad areas.</dd>
            </div>
          </dl>
          <div className="mt-8 rounded-2xl border p-5">
            <h2 className="text-xl font-semibold mb-2">Request a Callback</h2>
            <p className="text-neutral-700 text-sm">Tell us about your job and we’ll call you back fast.</p>
            <div className="mt-3">
              <Link href="/contact"><Button size="sm">Go to Contact Form</Button></Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
