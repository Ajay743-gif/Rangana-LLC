# Rengana Capital

Marketing website for **Rengana Capital** — business and finance advisory for Oman's MSMEs and enterprises. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Structure

- `app/` — App Router pages and components
  - `page.tsx` — homepage (hero, proof bar, services, track record, about, FAQ, contact)
  - `services/` — Services index + dynamic `[slug]` detail pages (data in `app/data/services.ts`)
  - `about-us/`, `faq/`, `contact/` — content pages
  - `components/` — shared UI (Navbar, Footer, Logo, Hero, WhatsApp button, etc.)
  - `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx` — SEO/metadata routes
- `public/` — static assets
  - `founder-portrait.jpg`, `img/*.jpg` — photography
  - `icon.svg` — favicon (hexagon RC)

## Brand

- **Colours:** navy `#182B4D`, gold `#C6A15B`, plus neutrals (see `app/globals.css`).
- **Type:** Cormorant Garamond (display) + Work Sans (body), via `next/font`.
- All imagery is self-hosted under `public/` (no external image domains).

## Deployment

Deployed on Vercel (`.vercel/project.json`). Push to `main` to trigger a deploy.

## To confirm before launch

- Canonical phone / email / office hours (currently `+968 9988 0403`, `info@renganallc.com`, Sun–Thu 9–6).
- Social profile URLs (add to the `sameAs` field in the homepage JSON-LD).
- Exact office geo-coordinates in the `LocalBusiness` schema.
