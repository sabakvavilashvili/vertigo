# VERTIGO Website

Production-ready Next.js website for VERTIGO (rope access and industrial services), built with TypeScript and regular CSS (no Tailwind).

## Stack

- Next.js (App Router)
- TypeScript
- Plain CSS (`styles/globals.css`)

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

```
app/                    layout.tsx (metadata, shell) and page.tsx (the single page)
components/
  layout/               Header, Footer, BrandMark (logo)
  providers/            LanguageProvider (ka/en switch)
  sections/             HeroSlideshow, ServicesList, ApproachSteps, ProjectCard
  ui/                   SectionHeading, ContactIcon, SocialLinks, DetailModal
content/                All site text and data (edit here)
  site.ts               Brand, page title, email, phone, socials, navigation labels
  hero.ts               Hero text and slideshow photos
  about.ts              About text, process steps, safety
  services.ts           Service cards and their lists
  projects.ts           Project cards and details
  contact.ts            Contact section text
  types.ts              Shared types and the t() helper
styles/                 CSS files, imported in order by styles/globals.css
public/images/
  brand/                Logo (vertigo-mark.png)
  hero/                 Hero slideshow photos
  services/             Service card graphics (SVG)
  projects/<slug>/      Project photos: 1.jpg is the card cover, the rest fill the gallery
```

## Deploying from GitHub

```bash
git pull
npm ci
npm run build
npm run start -- -p 3000
```

Requires Node 18.17 or newer.

## Content Notes

- Every text has `ka` and `en` versions in `content/*.ts`; update both.
- To replace a photo, overwrite the file in `public/images/...` with the same name, or change its path in the matching `content/*.ts` entry.
- To add a project, add an item in `content/projects.ts` and a folder in `public/images/projects/<slug>/`.

Project texts, phone, email, social links and photos are placeholders. Replace them with verified information before publishing, and update the site URL in `app/layout.tsx`.
