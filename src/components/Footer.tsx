import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <div className="w-full px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <Image
            src="/logo_text.png"
            alt="Australian Drone Solutions"
            width={120}
            height={16}
            className="w-auto max-w-full"
            priority
          />
          {/* <p className="mt-3 text-sm text-ink/70">
            Growing the future of farming with practical innovation across South
            East QLD & Northern NSW.
          </p> */}
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2"
            >
              Contact Us
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog & News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Solutions</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/services/spraying" className="hover:underline">
                Spraying
              </Link>
            </li>
            <li>
              <Link
                href="/services/seeding-spreading"
                className="hover:underline"
              >
                Seeding & Spreading
              </Link>
            </li>
            <li>
              <Link
                href="/services/surveying-mapping"
                className="hover:underline"
              >
                Mapping
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="mt-2 text-sm text-ink/70">
            Updates and case studies. No spam.
          </p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-black/10 px-3 py-2"
              aria-label="Email"
            />
            <button className="rounded-xl bg-primary text-white px-4 hover:bg-primary-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-black/10 text-sm">
        <div className="w-full px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-ink/70">
          <p>© {year} Australian Drone Solutions</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy & Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
