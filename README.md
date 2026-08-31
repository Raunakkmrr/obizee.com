# obizee.com

The oBizee marketing site — homepage, pricing, blog, and the `/compare` survey
and head-to-head pages. Static-exported Next.js, deployed from `main`.

## Stack

- Next.js 14 (App Router, `output: "export"` — fully static)
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Run locally

```sh
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Build

```sh
npm run build
```

Static output goes to `out/`.

## Deploy

Push to `main`. No manual deploy step — the connected host builds and
publishes automatically.

## Content

- `/compare/*` — survey ("best X alternatives") and head-to-head pages, data
  in `src/data/alternatives.ts`, rendered by
  `src/components/AlternativesListicle.tsx`.
- `/blog/*` — long-form posts, one `BlogPostN.tsx` per post under
  `src/pages/blog/`, rendered by `src/components/BlogPostLayout.tsx`.
- `public/sitemap-*.xml` — sitemap index files. `scripts/fix-sitemaps.mjs` is
  their sole owner; run it (`--write` to apply) after any content change so
  `lastmod` stays real instead of drifting.
