export function localBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Australian Drone Solutions",
    url: "https://www.australiandronesolutions.com.au",
    telephone: "+61 4xx xxx xxx",
    areaServed: [
      "Gold Coast",
      "Brisbane",
      "Sunshine Coast",
      "Toowoomba",
      "Tweed Heads",
      "Byron Bay",
    ],
    openingHours: "Mo-Fr 07:00-17:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gold Coast",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
      "https://www.instagram.com/",
    ],
  } as const;
  return JSON.stringify(data);
}

export function serviceJsonLd(serviceType: string) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    areaServed: [
      "Gold Coast",
      "Brisbane",
      "Sunshine Coast",
      "Toowoomba",
      "Tweed Heads",
      "Byron Bay",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Australian Drone Solutions",
      url: "https://www.australiandronesolutions.com.au",
    },
  } as const;
  return JSON.stringify(data);
}

