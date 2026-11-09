# VERTIGO Website

Production-ready Next.js website for VERTIGO (rope access and industrial services), built with TypeScript and regular CSS (no Tailwind).

## Stack

- Next.js (App Router)
- TypeScript
- Plain CSS (`app/globals.css`)

## Run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build production bundle:

```bash
npm run build
```

## Structure

- `app/` homepage with in-page navigation and redirects from legacy routes
- `components/` reusable UI modules
- `lib/siteData.ts` editable content model (services, projects, contact info)
- `public/images/hero/` rope-access slideshow photography
- `public/images/` other project and page visuals

## Content Notes

Project entries and capability blocks use placeholder text intentionally. Replace these and the example contact details with verified information before publishing. The homepage slideshow uses photos from Wikimedia Commons; source and license information is recorded in `components/HeroSlideshow.tsx`. The CC BY photo attribution appears in the footer.
