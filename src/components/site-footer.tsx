import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto px-4 py-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <Image
            src="/logo_text.png"
            alt="Australian Drone Solutions"
            width={100}
            height={50}
            className="w-auto max-w-full"
            priority
          />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>
              Phone:{" "}
              <a href="tel:+6104xxxxxxxx" className="hover:underline">
                +61 (0)4xx xxx xxx
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:hello@australiandronesolutions.com.au"
                className="hover:underline"
              >
                hello@australiandronesolutions.com.au
              </a>
            </li>
            <li>Hours: Mon–Fri 7:00–17:00 AEST</li>
            <li>Region: South East QLD & Northern NSW</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/service-area" className="hover:underline">
                Service Area
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Trust</h3>
          <ul className="text-sm space-y-1">
            <li>Licensed operator</li>
            <li>CASA-compliant operations</li>
            <li>ABN: 00 000 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-neutral-600">
          <p>© {year} Australian Drone Solutions</p>
          <p>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <span className="mx-2">•</span>
            <Link href="/contact" className="hover:underline">
              Book a site assessment
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
