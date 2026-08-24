# Minta Tailor and Drapers — Premium Next.js Website

A complete responsive website package for **Minta Tailor and Drapers**, Civil Hospital Road, Kharar.

## Included

- Premium charcoal, ivory and antique-gold design system
- Custom MT monogram logo, favicon and social share artwork
- Responsive home, services, gallery, about and contact pages
- Dynamic service routes: `/services/[slug]`
- Dynamic gallery category routes: `/gallery/[category]`
- WhatsApp enquiry buttons and pre-filled contact form
- SEO metadata, Open Graph cover, sitemap and robots file
- Local SVG artwork—no stock-image dependency
- Central content file for easy updates

## Start locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Main content editing

Update:

```text
src/data/site.ts
```

This file contains:

- Business name, phone, address and shop hours
- Service cards and full service-page content
- Gallery categories and items
- Process and brand statements

## Branding assets

```text
public/logo.svg
public/favicon.svg
public/og-cover.svg
public/images/
```

## Domain and deployment

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to the live domain.
3. Deploy on Vercel or any Node.js server with nginx and PM2.

PM2 example:

```bash
npm install
npm run build
pm2 start npm --name minta-tailor -- start
pm2 save
```

## Replace sample artwork with real client photographs

Place optimized JPG/WebP files inside `public/images/`, then update each `image` value in `src/data/site.ts`. Keep portrait gallery photos close to a 4:5 ratio.

## Business details currently configured

- **Name:** Minta Tailor and Drapers
- **Address:** Civil Hospital Road, Kharar, Near Government School
- **Phone:** 9815188184

## Add or update page metadata

Use the shared helper in `src/lib/seo.ts` for every public page. Static pages export a `metadata` object:

```tsx
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Page title",
  description: "A unique description of this page.",
  path: "/page-url",
  keywords: ["primary local keyword", "secondary keyword"],
});
```

Dynamic pages use `generateMetadata` and pass the current page path to the same helper. Update `NEXT_PUBLIC_SITE_URL` in `.env.local` before deployment so canonical, Open Graph, robots and sitemap URLs use the live domain.
