import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Gold Coast–based drone services across South East QLD & Northern NSW: Brisbane, Ipswich, Toowoomba, Sunshine Coast, Tweed, Byron.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Service Area</h1>
      <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=11NgVseLwN61QnAtteZmd9wM1bZf_5R8&ehbc=2E312F&noprof=1"
          width="640"
          height="480"
          className="w-full"
          style={{ border: 0 }}
        />
      </div>
      <h2 className="mt-8 text-xl font-semibold">Areas we service</h2>
      <p className="mt-2 text-neutral-700">
        Gold Coast, Brisbane, Ipswich, Sunshine Coast, Toowoomba, Warwick,
        Lismore, Ballina, Byron Bay, Tweed Heads
      </p>
      <p className="mt-4">
        Outside the area?{" "}
        <Link className="text-secondary-hover hover:underline" href="/contact">
          Ask us
        </Link>
        .
      </p>
    </section>
  );
}
