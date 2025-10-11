import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/with-base-path";
import { genericBlurDataURL } from "@/lib/image-placeholder";

export const metadata: Metadata = {
  title: "Spraying Services",
  description: "Herbicide, fungicide and insecticide spraying, plus special applications across South East QLD & Northern NSW.",
  alternates: { canonical: "/services/spraying" },
};

const items = [
  {
    title: "Weed Control (Herbicide)",
    href: "/services/spraying/weed-control",
    desc: "Knock down unwanted weeds in crops, pastures, and hard-to-reach areas.",
    image: "/Spraying/Weeds.jpg",
  },
  {
    title: "Disease Management (Fungicide)",
    href: "/services/spraying/disease-management",
    desc: "Prevent and control fungal diseases in orchards, turf, and crops.",
    image: "/Spraying/Fungicide.jpg",
  },
  {
    title: "Pest Control (Insecticide)",
    href: "/services/spraying/pest-control",
    desc: "Effective treatment for pests including mosquitoes, fire ants, and crop insects.",
    image: "/Spraying/Mosquito.jpg",
  },
  {
    title: "Special Applications",
    href: "/services/spraying/special-applications",
    desc: "Turf management (golf courses, sports fields), acreage spraying, and sensitive area treatments.",
    image: "/Spraying/Special_Application.jpg",
  },
];

export default function SprayingIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Spraying</h1>
      <p className="mt-3 text-neutral-700">Targeted aerial application for weeds, disease and pests with compliant, efficient coverage.</p>
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
