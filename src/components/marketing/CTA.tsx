import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto px-6">
      <div className="max-w-6xl mx-auto rounded-2xl bg-accent/60 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Need drone services in South East QLD & Northern NSW?</h3>
          <p className="text-ink/80">Request a fast callback for scheduling options today.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className="px-5 py-3 rounded-2xl bg-primary text-white hover:bg-primary-600">Request a Callback</Link>
          <a href="tel:+61 406 371 630" className="px-5 py-3 rounded-2xl border border-ink/15">Call Us</a>
        </div>
      </div>
    </section>
  );
}
