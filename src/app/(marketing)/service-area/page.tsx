import type { Metadata } from "next";
import ServiceAreaMap from "@/components/map/ServiceAreaMap";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Gold Coast–based drone services across South East QLD & Northern NSW: Brisbane, Ipswich, Toowoomba, Sunshine Coast, Tweed, Byron.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Service Area</h1>
      <div className="mt-6">
        <ServiceAreaMap />
      </div>
      <h2 className="mt-8 text-xl font-semibold">Areas we service</h2>
      <p className="mt-2 text-neutral-700">
        Gold Coast, Brisbane, Ipswich, Toowoomba, Sunshine Coast, Tweed Heads, Byron Bay and surrounding regions.
      </p>
      <p className="mt-4">Outside the area? <a className="text-secondary-hover hover:underline" href="/contact">Ask us</a>.</p>
    </section>
  );
}
