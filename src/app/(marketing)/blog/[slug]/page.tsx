import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, MDXContent } from "@/lib/contentlayer";
import Image from "next/image";

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const Content = post.body?.code ? (MDXContent as any) : null;
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral dark:prose-invert">
      <h1 className="!mb-2">{post.title}</h1>
      <p className="!mt-0 text-neutral-600 dark:text-neutral-400">{new Date(post.date).toLocaleDateString()}</p>
      {post.cover ? (
        <div className="relative w-full aspect-[16/9] my-6 overflow-hidden rounded-xl border">
          <Image src={post.cover} alt="Cover image" fill className="object-cover" />
        </div>
      ) : null}
      {Content ? <Content code={post.body.code} /> : null}
    </article>
  );
}
