// CTA removed; keep page focused on story and process
import type { Metadata } from "next";

// Service region map omitted on About; see /service-area

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Gold Coast–based, safety‑first drone operator serving South East QLD & Northern NSW for spraying, seeding, and more.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="max-w-3xl">
          <span className="kicker">About Us</span>
          <h1 className="h1 mt-3">Local, safety‑first drone operations</h1>
          <p className="lead mt-3">
            We’re a Gold Coast–based operator focused on precise aerial
            application with tidy, reliable execution. We plan carefully,
            communicate clearly, and deliver practical outcomes for farms,
            councils and facilities across SE QLD and Northern NSW.
          </p>
          {/* Removed extra value bullets for a cleaner hero */}
        </div>
      </section>

      {/* Snapshot removed to avoid repeating home page */}

      {/* Values combined into compact How We Work */}

      {/* How We Work */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="panel p-6 md:p-8">
          <h2 className="h2">How We Work</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            <div>
              <div className="text-sm text-ink/70">Step 1</div>
              <div className="font-semibold mt-1">Site Assessment</div>
              <p className="text-sm text-ink/70 mt-1">
                We discuss goals, constraints and timing, then plan coverage and
                access.
              </p>
            </div>
            <div>
              <div className="text-sm text-ink/70">Step 2</div>
              <div className="font-semibold mt-1">Plan & Prep</div>
              <p className="text-sm text-ink/70 mt-1">
                Equipment, product and rates are prepared to specification and
                conditions.
              </p>
            </div>
            <div>
              <div className="text-sm text-ink/70">Step 3</div>
              <div className="font-semibold mt-1">Execute & Verify</div>
              <p className="text-sm text-ink/70 mt-1">
                Operations completed efficiently with clean tidy‑ups and clear
                reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ADS */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="panel p-6 md:p-8">
          <h2 className="h2">Why Choose ADS</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2 text-sm text-ink/80">
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              Licensed pilots on every job with disciplined checklists.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              Clear pre‑start communications and tidy site execution.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              Modern fleet, careful maintenance and product stewardship.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              Practical outcomes: consistent coverage and reduced waste.
            </li>
          </ul>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="panel p-6 md:p-7">
          <h2 className="h2">Licences & Accreditation</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-primary" />{" "}
              Remote Pilot License &lt;25KG
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-primary" />{" "}
              Aeronautical Radio Operator Certification
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-primary" />{" "}
              Remotely Piloted Aircraft Operators Certificate (REoC)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-primary" />{" "}
              QLD ground distribution contractor license
            </li>
          </ul>
        </div>
      </section>

      {/* CTA removed on request */}
    </>
  );
}
