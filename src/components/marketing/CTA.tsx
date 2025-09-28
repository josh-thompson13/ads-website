import Link from "next/link";

export function CTA() {
  return (
    <section className="w-full px-4 md:px-6 py-10">
      <div className="rounded-[1.25rem] bg-primary text-white px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-card">
        <div>
          <h2 className="text-2xl font-display font-bold">Need drone services?</h2>
          <p className="opacity-90">We service South East QLD & Northern NSW.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className="inline-flex items-center rounded-xl bg-white text-ink px-5 py-3">Contact Us</Link>
          <a href="tel:+6104xxxxxxxx" className="inline-flex items-center rounded-xl border border-white/60 px-5 py-3">Call Us</a>
        </div>
      </div>
    </section>
  );
}
