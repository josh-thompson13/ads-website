import { withBasePath } from "@/lib/with-base-path";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      {/* Top: brand, contact, links, trust */}
      <div className="w-full px-6 py-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand + CTA */}
        <div>
          <div className="max-w-[140px]">
            <Image
              src={withBasePath("/logo_text.png")}
              alt="Australian Drone Solutions"
              width={120}
              height={16}
              className="h-auto w-full"
              priority
            />
          </div>
          <p className="mt-3 text-sm text-ink/70">
            Practical drone services across South East QLD & Northern NSW.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 hover:bg-muted/40"
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

        {/* Contact */}
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/80 break-words">
            <li>
              Phone:{" "}
              <a href="tel:+61 406 371 630" className="hover:underline">
                +61 406 371 630
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:josh@australiandronesolutions.com.au"
                className="hover:underline break-words"
              >
                josh@australiandronesolutions.com.au
              </a>
            </li>
            <li>Hours: Mon–Fri 7:00–17:00 AEST</li>
            <li>Region: South East QLD & Northern NSW</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold">Services</h4>
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
              <Link href="/service-area" className="hover:underline">
                Service Area
              </Link>
            </li>
          </ul>
        </div>

        {/* Company / Trust */}
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-4 text-sm text-ink/70">
            <p>Licensed operator · CASA-compliant</p>
            <p>ABN: 71 690 832 912</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10 text-sm">
        <div className="w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-ink/70">
          <p>© {year} Australian Drone Solutions</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">
              Book a site assessment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
