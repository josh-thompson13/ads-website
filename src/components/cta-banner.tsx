import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaBanner({
  title = "Ready to get started?",
  subtitle = "Request a fast callback — we’ll get back promptly.",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  href?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl bg-accent/60 text-ink px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="opacity-90">{subtitle}</p>
        </div>
        <div className="flex gap-3">
          <Link href={href}>
            <Button variant="primary" size="lg">Request a Callback</Button>
          </Link>
          <a href="tel:+61 406 371 630">
            <Button variant="outline" size="lg" className="bg-transparent text-ink border-ink/15 hover:bg-black/5">
              Call Us Today
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
