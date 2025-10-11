import type { ReactNode } from "react";
type Props = { icon: ReactNode; title: string; subtitle?: string };
export default function StatCard({ icon, title, subtitle }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-surface p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-hover">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-0 h-32 -translate-y-1/2 rounded-full bg-accent/40 opacity-70 blur-3xl transition-opacity duration-200 group-hover:opacity-100"
      />
      <div className="relative flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/30 text-primary transition duration-200 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <div className="space-y-1">
          <div className="text-base font-semibold md:text-lg">{title}</div>
          {subtitle && <p className="text-sm leading-snug text-ink/70">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
