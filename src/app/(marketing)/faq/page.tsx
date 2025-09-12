import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "General FAQs: weather windows, drift management, permissions, insurance, privacy, and lead time.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqs = [
    ["What weather windows do you target?", "Calm conditions with suitable temperature and humidity to minimise drift."],
    ["How do you manage drift?", "By selecting droplet size, nozzles and altitude to match label and conditions."],
    ["Do you handle flight permissions?", "We operate within CASA rules and coordinate permissions where required."],
    ["Are you insured?", "Yes, we hold appropriate insurances for our operations."],
    ["What about data privacy?", "We only collect what we need to deliver the service and do not share data."],
    ["Lead time?", "Often within 1–2 weeks depending on weather and job size."],
  ] as const;
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <dl className="mt-6 space-y-5">
        {faqs.map(([q, a]) => (
          <div key={q}>
            <dt className="font-medium">{q}</dt>
            <dd className="text-neutral-700">{a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
