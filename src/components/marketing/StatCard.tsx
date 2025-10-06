import Image from "next/image";
import { withBasePath } from "@/lib/with-base-path";

export function StatCard({
  title,
  description,
  value,
  imageSrc,
  accent = false,
}: {
  title: string;
  description: string;
  value: string;
  imageSrc?: string;
  accent?: boolean;
}) {
  return (
    <div className={`rounded-[1.25rem] overflow-hidden border ${accent ? "bg-[var(--stat)]" : "bg-white"} shadow-card`}>
      <div className="flex gap-4 p-5 items-center">
        {imageSrc ? (
          <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-xl">
            <Image src={withBasePath(imageSrc)} alt="stat image" fill className="object-cover" />
          </div>
        ) : null}
        <div>
          <div className="text-3xl font-display font-bold">{value}</div>
          <div className="mt-1 font-semibold">{title}</div>
          <p className="text-sm text-ink/70 mt-1 max-w-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
