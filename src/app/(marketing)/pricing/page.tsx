import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drone Spraying Pricing",
  description:
    "Simple, transparent pricing for agricultural drone spraying – per-hectare broadacre rates, hourly spot spraying and small-acreage packages across South East QLD & Northern NSW.",
  alternates: { canonical: "/pricing" },
};

const serviceHighlights = [
  {
    title: "Broadacre spraying",
    value: "From $50/ha",
    body: "Per-hectare pricing for paddocks, pasture and cropping blocks. Discounts available for 10+ hectares and repeat work.",
  },
  {
    title: "Spot & problem weed spraying",
    value: "From $280/hr",
    body: "Hourly rate for targeted work like lantana, blackberry, fireweed and wet or steep areas. Two-hour minimum applies.",
  },
  {
    title: "Small acreage & hobby farms",
    value: "From $560",
    body: "Simple minimum call-out for lifestyle blocks and smaller orchards, covering around 1–10 acres depending on access and terrain.",
  },
];

const pricingTiers = [
  {
    title: "Small acreage / spot spraying / hobby farms",
    context:
      "Fence lines, small paddocks, steep or wet areas, small orchards and lifestyle properties.",
    price:
      "Most small jobs fall between $560 and $850 once access, terrain and spray volume are factored in.",
  },
  {
    title: "Medium farms / multiple paddocks",
    context:
      "Pasture spraying, fungicide/insecticide runs, several paddocks or blocks in one visit.",
    price:
      "Broadacre spraying is usually $50–$70 per hectare depending on water rate, paddock layout and access.",
  },
  {
    title: "Larger jobs / high volume spraying",
    context:
      "Broadacre-style work, large orchards or multiple chemical runs over bigger areas.",
    price:
      "For 50+ hectares, rates usually sit between $48 and $60 per hectare with volume discounts for larger programs.",
  },
];

const highlights = [
  {
    title: "How pricing works",
    value: "Per-hectare & hourly",
    body: "Broadacre work is priced per hectare, while spot spraying and tricky areas are hourly. Once we've reviewed your property and spray rates, you'll receive a clear written estimate.",
  },
  {
    title: "Minimum job size",
    value: "$560 minimum",
    body: "A two-hour minimum applies to make small and spot jobs viable. We'll confirm how this applies to your property when we scope the work.",
  },
  {
    title: "Travel",
    value: "Local first, then by quote",
    body: "We prioritise properties across SEQ and Northern NSW. Any travel component for jobs further afield is discussed and priced upfront.",
  },
];

const scopeChecklist = [
  "Review your map, target areas and any sensitive zones.",
  "Confirm the spray rate (litres per hectare) you want applied.",
  "Confirm the exact chemical(s) you choose to supply.",
  "Estimate drone flight hours, refill cycles and battery swaps.",
  "Provide a written per-hectare and/or hourly estimate before confirming the booking.",
];

const inclusions = [
  "CASA licensed remote pilot in command.",
  "DJI Agras T50 drone, batteries and smart charging.",
  "Flight planning, log keeping and compliance paperwork.",
  "Chemical mixing and refilling based on your requested rates.",
  "Optional chemical supply for cost +20% (payment required upfront).",
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
        Drone Spraying Pricing
      </h1>
      <p className="mt-4 text-lg text-neutral-700">
        Professional aerial spraying for farms and acreage across SEQ and
        Northern NSW, with work also available further afield on request.
        Broadacre work is priced per hectare, while spot spraying and tricky
        areas are hourly. You’ll always know the numbers before we fly.
      </p>

      {/* Top service-highlight cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {serviceHighlights.map((item) => (
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

      {/* Job ranges + what to expect */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Typical Job Ranges</h2>
          <p className="mt-3 text-neutral-700">
            Every property is different, but most projects fall into the guide
            brackets below. Once we’ve reviewed your spray rate, chemical choice
            and paddock layout, we’ll confirm a tailored quote.
          </p>
          <div className="mt-6 space-y-5">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className="rounded-2xl border bg-neutral-50 p-5"
              >
                <p className="font-semibold text-neutral-900">{tier.title}</p>
                <p className="mt-1 text-sm text-neutral-600">{tier.context}</p>
                <p className="mt-3 text-lg font-semibold text-secondary">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Final pricing is confirmed once we’ve reviewed your property,
            checked access and buffers, and planned the spraying runs. You’ll
            always receive a clear written estimate before we lock in a booking.
          </p>
        </div>

        <div className="rounded-3xl border bg-secondary/5 p-6">
          <h2 className="text-2xl font-semibold">What to Expect</h2>
          <p className="mt-3 text-neutral-700">
            Before we confirm a booking, we review your property details so the
            plan and price are accurate.
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

      {/* Estimate + CTA */}
      <div className="mt-12">
        <div className="flex flex-col justify-between rounded-3xl border bg-secondary/10 p-6">
          <div>
            <h2 className="text-2xl font-semibold">Ready To Schedule?</h2>
            <p className="mt-3 text-neutral-700">
              Share your property details on the contact form and we’ll confirm
              pricing before we book flights. We prioritise farms across SEQ and
              Northern NSW.
            </p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex">
            <Button size="lg">Get in contact</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
