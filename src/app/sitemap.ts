import type { MetadataRoute } from 'next'

// Ensure static export compatibility
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.australiandronesolutions.com.au'
  const routes = [
    '',
    '/services',
    // Legacy spraying pages
    '/services/weed-spraying',
    '/services/crop-spraying',
    '/services/fire-ant-eradication',
    // New spraying category
    '/services/spraying',
    '/services/spraying/weed-control',
    '/services/spraying/disease-management',
    '/services/spraying/pest-control',
    '/services/spraying/special-applications',
    // Seeding & Spreading category
    '/services/seeding-spreading',
    '/services/seeding-spreading/pasture-reseeding',
    '/services/seeding-spreading/revegetation-projects',
    '/services/seeding-spreading/cover-crops',
    '/services/seeding-spreading/granular-application',
    // Surveying & Mapping removed
    '/service-area',
    '/gallery',
    '/about',
    '/faq',
    '/blog',
    '/contact',
  ]
  return routes.map((r) => ({ url: `${baseUrl}${r}`, changeFrequency: 'weekly', priority: r === '' ? 1 : 0.7 }))
}
