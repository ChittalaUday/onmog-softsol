# Onmog Softsol Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, shadcn project structure.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — pages: `/` (scroll-morph hero), `/about`, `/services`, `/careers`
- `components/ui/scroll-morph-hero.tsx` — animated hero (scatter → line → circle → scroll-morph arc) with flip service cards
- `components/navbar.tsx`, `components/footer.tsx` — shared layout
- `lib/services.ts` — single source of truth for the 10 service cards (edit titles/descriptions/icons here)
- `lib/utils.ts` + `components.json` — shadcn CLI setup (`npx shadcn@latest add <component>` works out of the box)

## Notes

- `components/ui` is the shadcn default component path — the CLI installs components there and `components.json` aliases (`@/components/ui`) point to it. Keep it, or shadcn adds will land in the wrong place.
- Contact emails (info@/careers@onmog.com), phone, and job listings are placeholders — update in `components/footer.tsx`, `app/services/page.tsx`, `app/careers/page.tsx`.
