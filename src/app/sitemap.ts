import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.australiandronesolutions.com.au'
  const routes = [
    '',
    '/services',
    '/services/weed-spraying',
    '/services/crop-spraying',
    '/services/fire-ant-eradication',
    '/pricing',
    '/service-area',
    '/gallery',
    '/about',
    '/faq',
    '/blog',
    '/contact',
  ]
  return routes.map((r) => ({ url: `${baseUrl}${r}`, changeFrequency: 'weekly', priority: r === '' ? 1 : 0.7 }))
}

