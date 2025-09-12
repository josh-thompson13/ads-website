import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a fast quote for drone spraying. Call, email, or request a site assessment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-neutral-700">Mon–Fri 7:00–17:00 AEST</p>
      <div className="mt-6 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border p-5">
            <h2 className="text-xl font-semibold mb-2">Request a Quote</h2>
            <QuoteForm />
            <p className="text-xs text-neutral-500 mt-3">We respect your privacy and only use your details to respond to your enquiry.</p>
          </div>
        </div>
        <aside className="space-y-2">
          <p><strong>Phone:</strong> <a href="tel:+6104xxxxxxxx" className="text-secondary-hover hover:underline">+61 (0)4xx xxx xxx</a></p>
          <p><strong>Email:</strong> <a href="mailto:hello@australiandronesolutions.com.au" className="text-secondary-hover hover:underline">hello@australiandronesolutions.com.au</a></p>
          <p><strong>Region:</strong> SE QLD & Northern NSW</p>
          <a className="inline-block mt-2 text-secondary-hover hover:underline" href="#">Book a site assessment</a>
        </aside>
      </div>
    </section>
  );
}
