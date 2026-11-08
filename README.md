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

- `app/` route pages (`/`, `/projects`, `/projects/[slug]`, `/about`, `/contact`)
- `components/` reusable UI modules
- `lib/siteData.ts` editable content model (services, projects, contact info)
- `public/images/` placeholder visuals to replace with real photography

## Content Notes

Project entries and capability blocks use placeholder text intentionally. Replace with verified project and company information before publishing.
