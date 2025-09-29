import type { ReactNode } from "react";
type Props = { icon: ReactNode; title: string; subtitle?: string };
export default function StatCard({ icon, title, subtitle }: Props) {
  return (
    <div className="rounded-2xl shadow-card bg-surface p-5 md:p-6 flex items-start gap-3">
      <div className="shrink-0 h-9 w-9 rounded-xl bg-accent/40 grid place-items-center">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        {subtitle && <p className="text-sm text-ink/70 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
