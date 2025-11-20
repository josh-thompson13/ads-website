import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/with-base-path";
import { genericBlurDataURL } from "@/lib/image-placeholder";

export const metadata: Metadata = {
  title: "Seeding & Spreading",
  description: "Pasture reseeding, revegetation, cover crops and granular application with even, efficient coverage.",
  alternates: { canonical: "/services/seeding-spreading" },
};

const items = [
  {
    title: "Pasture Reseeding",
    href: "/services/seeding-spreading/pasture-reseeding",
    desc: "Improve grazing land with even seed distribution.",
    image: "/Seeding/Pasture_Reseeding.jpg",
  },
  {
    title: "Revegetation Projects",
    href: "/services/seeding-spreading/revegetation-projects",
    desc: "Seed spreading for rehabilitation and erosion control.",
    image: "/Seeding/Revegetation.png",
  },
  {
    title: "Cover Crops",
    href: "/services/seeding-spreading/cover-crops",
    desc: "Establish cover crops quickly and efficiently.",
    image: "/Seeding/Cover_crop.jpg",
  },

];

export default function SeedingSpreadingIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Seeding & Spreading</h1>
      <p className="mt-3 text-neutral-700">Efficient, even distribution of seed and granular products across varied terrain.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map((i, index) => {
          const imageSrc = withBasePath(i.image);
          return (
            <div key={i.href} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={genericBlurDataURL}
                  priority={index < 2}
                />
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-lg">
                  <Link href={i.href} className="hover:underline">{i.title}</Link>
                </h2>
                <p className="text-sm text-neutral-700 mt-2">{i.desc}</p>
                <div className="mt-4">
                  <Link href="/contact"><Button size="sm">Request a Callback</Button></Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
