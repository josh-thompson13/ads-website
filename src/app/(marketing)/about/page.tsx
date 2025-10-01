import StatCard from "@/components/StatCard";
import { CtaBanner } from "@/components/cta-banner";
import type { Metadata } from "next";
import Image from "next/image";

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
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="kicker">About Us</span>
            <h1 className="h1 mt-3">Local, safety‑first drone operations</h1>
            <p className="lead mt-3 max-w-prose">
              Australian Drone Solutions delivers precise aerial application
              across farms, golf courses, public land and worksites. We’re based
              on the Gold Coast and serve South East QLD and Northern NSW with
              licensed, CASA‑compliant operations.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="panel p-4">
                <div className="font-semibold">Practical outcomes</div>
                <p className="text-sm text-ink/70 mt-1">
                  Coverage, consistency and tidy execution.
                </p>
              </div>
              <div className="panel p-4">
                <div className="font-semibold">Stewardship mindset</div>
                <p className="text-sm text-ink/70 mt-1">
                  Minimising drift and waste everywhere we fly.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden shadow-card border border-black/10">
              <Image
                src="/Drone_Spraying.png"
                alt="Drone spraying"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden shadow-card border border-black/10">
                <Image
                  src="/Drone_Golf_Course.png"
                  alt="Golf course application"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card border border-black/10">
                <Image
                  src="/Drone_Spraying_Paddock.png"
                  alt="Paddock spraying"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="container mx-auto px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <path
                  d="M12 22s8-4 8-10V6L12 3 4 6v6c0 6 8 10 8 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="m9 12 2 2 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="CASA Licensed"
            subtitle="Compliant operations"
          />
          <StatCard
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <path
                  d="M12 2v20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M8 10c2 0 3-2 4-3 1 1 2 3 4 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M7 15c2 0 3-1 5-1s3 1 5 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            }
            title="Precision Application"
            subtitle="Less waste, better coverage"
          />
          <StatCard
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <path
                  d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="11"
                  r="2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            }
            title="SE QLD & Northern NSW"
            subtitle="Local and reliable"
          />
          <StatCard
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="m8 12 3 3 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="On‑Time Scheduling"
            subtitle="Built around your season"
          />
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="h2">What We Stand For</h2>
        <p className="lead mt-2 max-w-prose">
          We combine practical on‑ground experience with disciplined flight
          operations to deliver dependable results for farms, councils and
          facilities.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="panel p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  d="m9 12 2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mt-3">
              Safety‑First Operations
            </h3>
            <p className="text-sm text-ink/70 mt-1">
              Procedures, checklists and site assessments underpin every job. We
              operate to CASA requirements and client WHS standards.
            </p>
          </div>
          <div className="panel p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  d="M3 12h8M4 16h6M5 8h7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mt-3">
              Precision & Stewardship
            </h3>
            <p className="text-sm text-ink/70 mt-1">
              Matching products, rates and conditions to minimise drift and
              overspray while achieving the desired control.
            </p>
          </div>
          <div className="panel p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  d="M12 7v6l4 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mt-3">Reliable Scheduling</h3>
            <p className="text-sm text-ink/70 mt-1">
              We plan around your season and windows, keep you informed, and
              arrive prepared to execute.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="panel p-6 md:p-8">
          <h2 className="h2">How We Work</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
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

      {/* Credentials */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="panel p-6 md:p-8">
          <h3 className="font-semibold text-lg">Licences & Compliance</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-primary" />{" "}
              CASA‑compliant operations
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-primary" />{" "}
              Licensed operator
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-primary" />{" "}
              ABN: 71 690 832 912
            </li>
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Ready to work together?"
        subtitle="Request a fast callback — we’ll get back promptly."
        href="/contact"
      />
    </>
  );
}
