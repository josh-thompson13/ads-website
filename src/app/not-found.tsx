import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-2 text-neutral-700">Let’s get you back on track.</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="text-secondary-hover hover:underline">
          Home
        </Link>
        <Link href="/services" className="text-secondary-hover hover:underline">
          Services
        </Link>
        <Link
          href="/service-area"
          className="text-secondary-hover hover:underline"
        >
          Service Area
        </Link>
        <Link href="/contact" className="text-primary-hover hover:underline">
          Contact
        </Link>
      </div>
    </section>
  );
}
