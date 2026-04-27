<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SEO & Performance Rules (Prodigy HRM / Onmog Softsol)

1.  **Server First**: Always use Server Components for content-heavy sections. Minimize `'use client'` to the smallest interactive boundaries (e.g., animations, forms).
2.  **Metadata Management**: Never hardcode metadata in components. Use `@/data/site-config` for global values and `generateMetadata` for dynamic pages.
3.  **Structured Data**: Every page must have a corresponding JSON-LD schema (Organization, LocalBusiness, or Service). Use `schema-dts` for type-safe schema generation.
4.  **Semantic HTML**: Ensure proper heading hierarchy (one H1 per page) and use semantic tags like `<header>`, `<main>`, `<footer>`, and `<section>`.
5.  **Image Optimization**: Always use `next/image` with proper `priority` for LCP (Largest Contentful Paint) elements.
6.  **Canonical URLs**: Ensure `layout.tsx` generates correct canonical links for every page to prevent duplicate content issues.
7.  **Sitemaps & Robots**: Maintain and update `app/sitemap.ts` and `app/robots.ts` as new routes are added.
