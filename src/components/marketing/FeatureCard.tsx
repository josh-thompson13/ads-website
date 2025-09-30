import Link from "next/link";

export function FeatureCard({ icon, title, children, href, ctaLabel }: { icon: React.ReactNode; title: string; children: React.ReactNode; href?: string; ctaLabel?: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 text-white">
      <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-accent text-ink">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mt-3">{title}</h3>
      <p className="text-sm text-white/80 mt-2">{children}</p>
      {href ? (
        <Link href={href} className="inline-flex items-center gap-1 mt-4 text-white hover:underline">
          {ctaLabel ?? "Learn more"}
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      ) : null}
    </div>
  );
}
