# Trio Renseriet repository guide

## Orientation

This repository contains the public Danish website for Trio Renseriet, a dry-cleaning, laundry, textile-care, and tailoring business in Højbjerg near Aarhus.

- `app/page.tsx` is the homepage.
- `app/services/` contains the service hub and service detail routes.
- `app/tojrens/` contains the focused textile-care hub.
- `app/priser/`, `app/skraedder/priser/`, and `app/lib/` implement the build-time price pages.
- `app/seo.ts` owns site identity, local-business data, route metadata, and canonical URLs.
- `public/` owns static control files, YAML price sources, original media, and committed responsive image variants.

## Boundaries and sources of truth

- The site must remain static-only. Preserve `output: "export"` in `next.config.mjs`; do not add SSR, API routes, server actions, or runtime data dependencies.
- YAML price files are read at build time. Keep displayed prices and their source data synchronized.
- `out/` is generated output. Never edit it directly or commit it.
- Original images in `public/images/` are the source assets. Their `-480.webp`, `-768.webp`, and `-1200.webp` companions are committed build inputs for responsive delivery and can be regenerated with `npm run images:generate`.
- Keep business name, address, phone, opening hours, and service areas consistent between visible content and `app/seo.ts`.

## Canonical commands

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run verify
npm run build:zip
npm run images:generate
```

Use `npm run verify` before opening a PR. It runs linting, the static build, and checks for expected static files, sitemap coverage, broken local links, malformed contact links, and missing responsive image assets.

## Engineering rules

- Keep route content, metadata, JSON-LD, and visible headings aligned.
- Prefer absolute internal URLs with the repository's trailing-slash export convention.
- Use the shared responsive image component for content images and preserve meaningful alt text.
- Keep client components limited to behavior that cannot be rendered during the static build.
- Do not place secrets or machine-local state in the repository. Local audit output, logs, caches, and build output are ignored.

## Maintenance

Update commands here and in `package.json` together when the workflow changes. Keep human setup guidance in `README.md`; keep implementation detail in code; record a durable architectural decision only when a choice has meaningful alternatives and is likely to be revisited.
