import { withBasePath } from "@/lib/with-base-path";
import Image from "next/image";

type Props = { image: string; sector: string; headline: string; blurb: string; href?: string };
export default function CaseStudyCard({ image, sector, headline, blurb, href }: Props) {
  const imageSrc = withBasePath(image);
  return (
    <article className="rounded-2xl overflow-hidden bg-surface shadow-card hover:shadow-hover transition">
      <div className="relative w-full h-56">
        <Image
          src={imageSrc}
          alt={headline}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 md:p-6">
        <span className="kicker">{sector}</span>
        <h3 className="mt-3 font-semibold text-xl">{headline}</h3>
        <p className="mt-2 text-ink/70">{blurb}</p>
        {href && (
          <a className="mt-3 inline-flex items-center gap-2 text-primary hover:text-primary-600" href={href}>
            Read more →
          </a>
        )}
      </div>
    </article>
  );
}
