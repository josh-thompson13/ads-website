ADS Marketing Website (Next.js App Router)

Overview
- Production-ready marketing site for Australian Drone Solutions (ADS)
- Next.js 14+/15 App Router, TypeScript, Tailwind, Contentlayer MDX, Plausible
- Deploy target: Vercel

Quick Start
- Copy `.env.example` to `.env.local` and fill values
- Ensure required deps are installed (see Dependencies)
- Start dev server: `pnpm dev` (or `npm run dev`)

Environment Variables
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=` Public key from Web3Forms for the quote form
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=` Optional Plausible domain (e.g. australiandronesolutions.com.au)

Project Structure
- `src/app/(marketing)/` pages (Home, Services, Pricing, Service Area, Gallery, About, FAQ, Blog, Contact)
- `src/components/` layout, UI, forms, map
- `src/content/posts/` MDX blog posts
- `src/lib/seo.ts` JSON-LD helpers
- `public/` assets (gallery, rate-card.pdf)

Key Files
- `src/app/layout.tsx` Root layout with header/footer and Plausible provider
- `src/components/site-header.tsx` Sticky, responsive nav + CTA
- `src/components/site-footer.tsx` Contact/links/ABN/©
- `src/components/forms/QuoteForm.tsx` Hook Form + Zod + Web3Forms
- `src/components/map/ServiceAreaMap.tsx` React-Leaflet map (client-only)
- `contentlayer.config.ts` MDX config; posts under `src/content/posts`
- `src/app/robots.ts` and `src/app/sitemap.ts` SEO basics
- `next-sitemap.config.js` Build-time sitemap/robots config

Blog/Content (Contentlayer)
- Add/edit MDX in `src/content/posts/*.mdx`
- Frontmatter: `title`, `date`, `description`, `cover`
- Routes: `/blog` and `/blog/[slug]`

Quote Form (Web3Forms)
- Client POST to `https://api.web3forms.com/submit`
- Body includes `access_key` from `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- Honeypot field `botField` + required consent checkbox
- Success/error messages inline

Service Area
- Markers: Gold Coast (centre), Brisbane, Ipswich, Toowoomba, Sunshine Coast, Tweed, Byron
- Radius: ~600km translucent circle
- Edit in `src/components/map/ServiceAreaMap.tsx`

Sitemap & Robots
- Runtime: `src/app/sitemap.ts` and `src/app/robots.ts`
- Build-time (optional): `next-sitemap` uses `next-sitemap.config.js`
- Add `"postbuild": "next-sitemap"` to scripts if desired

Plausible
- Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to enable tracking in `layout.tsx`

Dependencies (expected installed)
- tailwindcss, shadcn/ui (initialized), contentlayer, next-contentlayer, @contentlayer/source-files,
  leaflet, react-leaflet, react-hook-form, @hookform/resolvers, zod, next-sitemap, next-plausible

Vercel Deploy
- Set env vars in Vercel Project Settings
- Optionally run `next-sitemap` after build to emit static sitemap/robots

