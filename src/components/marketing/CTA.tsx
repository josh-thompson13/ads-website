import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
