# Copilot Instructions - Paulette Fabres Portfolio

## Project Overview

This is a **Next.js 15 portfolio website** para Paulette Fabres (actriz)
**Key Tech Stack:**

- Next.js 15.3.7 (App Router)
- React 18.3.1 with TypeScript
- Tailwind CSS 3.4.17 with custom dark theme
- Biome 1.9.4 for formatting/linting
- Lucide React for icons

## Architecture Patterns

### Page Structure (App Router)

The site uses a **flat, simple route structure** in `/src/app`:

- Root page at `page.tsx` (hero section)
- Route segments: `/about`, `/acting`, `/casting`, `/contact`, `/other`, `/pictures`
- **Server-rendered by default** (no page exports marked `"use client"` except root page)
- Layout at `layout.tsx` handles metadata and global HTML structure

### Client vs Server Components

- **Server Components** (default): All pages except `page.tsx` and components used only in root page
- **Client Components** (`"use client"`):
  - `Navigation.tsx` – needs scroll state and mobile menu interactivity
  - `ClientBody.tsx` – wraps body with client-side CSS class handling
  - Root `page.tsx` – contains interactive hero section

**Pattern**: Keep components server-rendered unless they require state, effects, or event listeners.

### Component Organization

- `components/` – Shared layout components (Navigation, Footer, PageHeader)
- Each page includes its own specific sections (e.g., HeroSection, StatsSection)
- **No external component library used** – all UI built with Tailwind CSS classes

### Styling Approach

- **Tailwind CSS with custom color variables** defined in `globals.css`
- Dark theme active by default (`<html className="dark">`)
- Color scheme: dark background (0 0% 4%), golden accent (43 55% 82%), minimal borders
- **Zero-radius border-radius** (--radius: 0rem) – sharp, geometric aesthetic
- Custom fonts: Space Grotesk (headings) + JetBrains Mono (code)

## Development Workflows

### Scripts

```bash
npm run dev          # Next.js dev server with Turbopack (localhost:3000)
npm run build        # Production build
npm start            # Start production server
npm run lint         # TypeScript + ESLint check
npm run format       # Biome format write
```

### Code Quality

- **Biome** handles formatting and import organization (configured in `src/biome.json`)
- **ESLint** extends next/core-web-vitals + next/typescript
- **TypeScript** strict mode enabled
- **No unit tests configured** – focus is on production-ready code

### Image Handling

- **Unoptimized images** enabled (for deployment flexibility)
- Allowed domains: unsplash.com, same-assets.com (company asset CDN)
- Remote patterns configured for HTTPS access to external assets
- **Pattern**: Use remote images via URL strings in next/image or HTML img tags

## Key Conventions & Patterns

### Imports & Path Aliases

- Use `@/` alias for src imports (e.g., `import { Navigation } from "@/components/Navigation"`)
- ESLint auto-organizes imports via Biome

### Component Naming & Structure

```tsx
export function ComponentName() {
  return <div className="...">Content</div>;
}
```

- Use named exports for all components
- Keep components in dedicated .tsx files in `/components`

### Tailwind Class Utilities

- **Responsive classes**: `flex flex-col md:flex-row`
- **Animation**: Tailwind animate utilities + custom `animate-fade-in-up` (defined in globals.css)
- **Spacing**: Use container class for max-width constraints, px-6 md:px-12 for padding
- **Utility function**: `cn()` from `@/lib/utils.ts` for conditional class merging with clsx + tailwind-merge

### Data & Navigation Structure

- Navigation links defined as arrays in components (e.g., `navLinks`, `workCategories`)
- Page metadata (stats, skills) stored as const arrays in page files
- No database or API integration – static content

### Metadata & SEO

- Root layout defines `Metadata` object with title, description, icons
- Each page should inherit parent metadata unless overriding
- Icons reference external CDN (same-assets.com)

## File Organization Checklist

When adding features:

1. **New page route?** Create `src/app/[route]/page.tsx` (server component by default)
2. **Shared UI component?** Add to `src/components/[Name].tsx` as named export
3. **Client interactivity needed?** Add `"use client"` directive at top of file
4. **Styling?** Use Tailwind classes only – no CSS modules or external libraries
5. **Assets?** Link via remote URLs (same-assets.com or unsplash.com only)
6. **Navigation?** Update Navigation.tsx navLinks array + workCategories if needed

## Common Patterns by File Type

### Page Files (`src/app/*/page.tsx`)

```tsx
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PageName() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />
      {/* Page sections */}
      <Footer />
    </main>
  );
}
```

### Reusable Components (`src/components/[Name].tsx`)

```tsx
// No "use client" unless needed
export function ComponentName({ prop }: { prop: string }) {
  return <div className="..."></div>;
}
```

## Gotchas & Important Notes

- **Network configuration**: Dev server runs on `0.0.0.0` (exposed to network) – intentional for preview
- **Turbopack**: Project uses Turbopack in dev mode for faster builds
- **No shadcn/ui installed** – project uses vanilla Tailwind despite naming (nextjs-shadcn)
- **Mobile menu**: Navigation has mobile dropdown state – ensure `setMobileMenuOpen` is managed correctly
- **Dark theme**: All styles assume dark mode active; no light theme variant implemented
- **Static site**: No dynamic data fetching – all content is hardcoded or passed via props

## Related Files & References

- Styling rules: [globals.css](../src/app/globals.css#L1-L30) – custom colors, fonts, animations
- Layout wrapper: [layout.tsx](../src/app/layout.tsx) – root metadata & ClientBody
- Navigation logic: [Navigation.tsx](../src/components/Navigation.tsx#L1-L50) – scroll behavior, dropdowns
- Utility helpers: [utils.ts](../src/lib/utils.ts) – cn() function for class merging
