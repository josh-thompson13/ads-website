import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Guide",
  description:
    "Transparent hourly pricing for agricultural drone spraying with minimum charge, travel policy and job ranges across South East QLD & Northern NSW.",
  alternates: { canonical: "/pricing" },
};

const pricingTiers = [
  {
    title: "Small acreage / spot spraying / hobby farms",
    context: "Fence lines, small paddocks, steep or wet areas, small orchards",
    price: "$750 – $1,000 total",
  },
  {
    title: "Medium farms / multiple paddocks",
    context:
      "Pasture spraying, fungicide/insecticide runs, several paddocks or blocks",
    price: "$1,000 – $1,500 total",
  },
  {
    title: "Larger jobs / high volume spraying",
    context: "Broadacre-style work, large orchards, multiple chemical runs",
    price: "From $1,500+ total",
  },
];

const highlights = [
  {
    title: "Hourly Rate",
    value: "$250/hr + GST",
    body: "Labour-only rate covering the drone, CASA licensed pilot, equipment, flight planning and on-site operations. Clients supply the chemicals they prefer.",
  },
  {
    title: "Minimum Charge",
    value: "$750 + GST",
    body: "Equal to the first three hours on site, including setup and flight time. Ensures travel and mobilisation are properly covered, even for smaller sites.",
  },
  {
    title: "Travel",
    value: "Included within 1 hour",
    body: "No travel fee for properties within one hour of the Gold Coast. For locations beyond this (if agreed), travel can be quoted separately.",
  },
];

const scopeChecklist = [
  "Assess access, terrain, buffer zones and surrounding sensitivity.",
  "Plan the litres/hectare or litres/minute required per run.",
  "Estimate drone flight hours, refill cycles and battery swaps.",
  "Provide a written hourly estimate before confirming the booking.",
];

const inclusions = [
  "CASA licensed remote pilot in command.",
  "DJI Agras T40 drone, batteries and smart charging.",
  "Flight planning, log keeping and compliance paperwork.",
  "Liability cover and safety procedures for aerial spraying.",
];

const requestFields = [
  "Name and phone number",
  "Email address",
  "Property location (suburb/area)",
  "Brief description of what needs spraying",
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Pricing Guide</h1>
      <p className="mt-4 text-lg text-neutral-700">
        Fast, accurate aerial spraying for farms and acreage within one hour of
        the Gold Coast. We operate on a simple hourly rate with a transparent
        minimum and a clear process for estimating your total time on site.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border bg-white/90 p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-secondary">{item.title}</p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">
              {item.value}
            </p>
            <p className="mt-3 text-sm text-neutral-600">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Typical Job Ranges (Guide Only)
          </h2>
          <p className="mt-3 text-neutral-700">
            Every property has different access, terrain and spray volumes, but
            most agricultural spraying projects fall within these ranges (all
            prices exclude GST):
          </p>
          <div className="mt-6 space-y-5">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className="rounded-2xl border bg-neutral-50 p-5"
              >
                <p className="font-semibold text-neutral-900">{tier.title}</p>
                <p className="mt-1 text-sm text-neutral-600">{tier.context}</p>
                <p className="mt-3 text-lg font-bold text-secondary">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            These figures are indicative only. Final pricing is calculated on
            the actual time required on site at $250/hr + GST, subject to the
            $750 + GST minimum charge.
          </p>
        </div>
        <div className="rounded-3xl border bg-secondary/5 p-6">
          <h2 className="text-2xl font-semibold">What to Expect</h2>
          <p className="mt-3 text-neutral-700">
            We scope every property before confirming a booking so there are no
            surprises on the day.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {scopeChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 font-semibold text-neutral-900">
            Included with every job:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Need A Detailed Estimate?</h2>
          <p className="mt-3 text-neutral-700">
            Share the essentials about your property and what needs spraying.
            We’ll respond quickly with an obligation-free assessment outlining
            the expected hours on site, travel (if required) and next steps.
          </p>
          <p className="mt-4 font-semibold text-neutral-900">
            Information to include:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-700">
            {requestFields.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border bg-secondary/10 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ready To Schedule?</h2>
            <p className="mt-3 text-neutral-700">
              We prioritise farms and acreage within one hour of the Gold Coast,
              but can consider projects further afield on request. Let us know
              your timing and any constraints so we can align the flight plan
              with your agronomy schedule.
            </p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex">
            <Button size="lg">Request Free Assessment</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
