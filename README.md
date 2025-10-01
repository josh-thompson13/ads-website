ADS Marketing Website (Next.js App Router)

Overview
- Production-ready marketing site for Australian Drone Solutions (ADS)
- Next.js 14+/15 App Router, TypeScript, Tailwind, Contentlayer MDX, Plausible
- Deploy targets: Vercel or GitHub Pages

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
- `src/app/layout.tsx` Root layout with translucent header + footer and Plausible
- `src/components/Header.tsx` Sticky translucent nav (desktop/mobile)
- `src/components/TopBar.tsx` Thin top bar with phone/email/quote CTA
- `src/components/Footer.tsx` New footer with columns + newsletter
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

GitHub Pages Deploy
- A workflow at `.github/workflows/deploy.yml` builds and exports a static site, then deploys it to GitHub Pages.
- In repository Settings → Pages, set Source to "GitHub Actions".
- The workflow sets `GITHUB_PAGES=true` so `next.config.ts` applies a `basePath` (`/ads-website`) and disables image optimization for static hosting. It also creates `out/.nojekyll` so `/_next/*` assets are served correctly.
- Your site will be available at `https://<username>.github.io/ads-website/`.

Design System (where to tweak)
- Colors: edit CSS vars in `src/app/globals.css:1` under `:root` (`--bg`, `--ink`, `--primary`, `--primary-600`, `--accent`, etc.)
- Fonts: loaded in `src/app/layout.tsx` via `next/font` (`Plus_Jakarta_Sans` for display and `Inter` for body). Utilities `.font-display`, `.font-sans`, and `.h1` are defined in `globals.css`.
- Hero media: update source in `src/components/marketing/Hero.tsx` (`/videos/loop_drone.mp4` and `/hero_spraying.jpg`).
- Shadows & radii: utilities `.shadow-card`, `.shadow-hover`, and rounded `[1.25rem]` are in `globals.css` and used throughout.
