import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Local, safety-first drone spraying operator based on the Gold Coast serving SE QLD & Northern NSW.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">
        Australian Drone Solutions (ADS) is a Gold Coast–based operator focused on safe, precise aerial spraying.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Founder story</h2>
      <p>Our founder brings hands-on experience in weed spraying and has grown ADS carefully to ensure quality and safety.</p>
      <h2 className="mt-8 text-xl font-semibold">Licences & insurance</h2>
      <ul className="list-disc pl-5">
        <li>Licensed & insured</li>
        <li>CASA-compliant operations</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Safety & environment</h2>
      <p>We operate with stewardship in mind — matching products, rates and conditions to minimise drift and protect the environment.</p>
    </section>
  );
}

