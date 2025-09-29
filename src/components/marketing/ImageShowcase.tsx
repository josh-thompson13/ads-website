import Image from "next/image";
import Link from "next/link";

export function ImageShowcase({
  heroSrc = "/hero_spraying.jpg",
  thumbs = ["/gallery/gallery-1.svg", "/gallery/gallery-2.svg"],
}: {
  heroSrc?: string;
  thumbs?: string[];
}) {
  return (
    <div className="w-full">
      <div className="relative h-[380px] md:h-[460px] w-full">
        <Image
          src={heroSrc}
          alt="Drone technology"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute left-6 bottom-6 text-white max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-sm">
            Our Technologies
          </span>
          <h3 className="mt-3 text-3xl font-display font-bold">
            Drone Technology
          </h3>
          <p className="text-white/90">
            Real work in real conditions — consistent coverage and precise
            application across a variety of terrain.
          </p>
          <Link
            href="/services"
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-4 py-2 text-white backdrop-blur"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {thumbs.slice(0, 2).map((src) => (
          <div
            key={src}
            className="relative h-80 w-full overflow-hidden rounded-xl border"
          >
            <Image src={src} alt="Showcase" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
