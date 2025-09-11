import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How we handle your information submitted via this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">
        We collect your contact details to respond to enquiries. We do not sell your data. You may request deletion at any time.
      </p>
    </section>
  );
}

