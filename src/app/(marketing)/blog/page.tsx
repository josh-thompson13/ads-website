import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "@/lib/contentlayer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on drone spraying, fire ant baiting, and stewardship across SE QLD.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = allPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article key={p._id} className="rounded-2xl border p-5 bg-white shadow-sm">
            {p.cover ? (
              <div className="relative w-full aspect-[16/9] mb-3 overflow-hidden rounded-lg border">
                <Image src={p.cover} alt="Cover image" fill className="object-cover" />
              </div>
            ) : null}
            <h2 className="font-semibold text-xl">
              <Link href={p.url} className="hover:underline">{p.title}</Link>
            </h2>
            <p className="text-sm text-neutral-600 mt-1">{new Date(p.date).toLocaleDateString()}</p>
            <p className="mt-2 text-neutral-800">{p.description}</p>
            <Link href={p.url} className="mt-3 inline-block text-secondary-hover hover:underline">Read more →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
