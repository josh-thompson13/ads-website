import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const siteUrl = "https://www.australiandronesolutions.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Australian Drone Solutions | Drone Services South East QLD & Northern NSW",
    template: "%s | Australian Drone Solutions",
  },
  description:
    "Drone spraying, mosquito control, seeding, mapping and surveying for farms, golf courses, councils and worksites across South East QLD & Northern NSW.",
  keywords: [
    "drone spraying",
    "mosquito control",
    "vector control",
    "turf management",
    "golf course spraying",
    "council spraying",
    "drone mapping",
    "drone surveying",
    "NDVI mapping",
    "orthomosaic",
    "seeding",
    "granular spreading",
    "fire ant baiting",
    "South East QLD",
    "Northern NSW",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Australian Drone Solutions",
    description:
      "Spraying, mosquito control, seeding, mapping and surveying across South East QLD & Northern NSW.",
    siteName: "Australian Drone Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australian Drone Solutions",
    description:
      "Spraying, mosquito control, seeding, mapping and surveying across South East QLD & Northern NSW.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = { themeColor: "#3C7F4A" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}>
        {plausibleDomain ? (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        ) : null}
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1 content-offset">
            <Suspense fallback={<div className="p-6">Loading…</div>}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
