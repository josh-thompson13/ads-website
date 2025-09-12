import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaBanner({
  title = "Ready to get started?",
  subtitle = "Request a fast, obligation-free quote.",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  href?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl bg-primary text-white px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="opacity-90">{subtitle}</p>
        </div>
        <div className="flex gap-3">
          <Link href={href}>
            <Button variant="secondary" size="lg">Get a Quote</Button>
          </Link>
          <a href="tel:+6104xxxxxxxx">
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">Call now</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
