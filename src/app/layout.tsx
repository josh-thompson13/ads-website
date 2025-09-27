import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.australiandronesolutions.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Australian Drone Solutions | Drone Services South East QLD & Northern NSW",
    template: "%s | Australian Drone Solutions",
  },
  description:
    "Drone spraying, seeding and mapping for farms, councils and worksites across South East QLD & Northern NSW.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Australian Drone Solutions",
    description:
      "Spraying, seeding and mapping across South East QLD & Northern NSW.",
    siteName: "Australian Drone Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australian Drone Solutions",
    description:
      "Spraying, seeding and mapping across South East QLD & Northern NSW.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#2f6b2f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {plausibleDomain ? (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        ) : null}
        <div className="min-h-dvh flex flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Suspense fallback={<div className="p-6">Loading…</div>}>{children}</Suspense>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
