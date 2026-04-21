# Beyndesh — Project Agent Rules

## Project Overview
Beyndesh is a premium adventure travel company website for Bangladesh. This is a Turborepo monorepo with two Next.js 14+ apps (public website + custom CMS) sharing packages for database, API, shared utilities, and email.

## Tech Stack (STRICT — Do not deviate)
- **Framework:** Next.js 14+ with App Router (NOT Pages Router)
- **Language:** TypeScript (strict mode, no `any` types)
- **Styling:** Tailwind CSS 3.4+ (utility-first, use design tokens from tailwind preset)
- **Animation:** Framer Motion for scroll-triggered reveals + CSS transitions for micro-interactions
- **Database:** PostgreSQL via Supabase
- **ORM:** Prisma (type-safe queries, parameterized — never raw SQL)
- **Auth:** NextAuth.js v5
- **State:** Zustand (client), React Server Components (server), React Hook Form + Zod (forms), nuqs (URL state)
- **Package Manager:** pnpm (NOT npm, NOT yarn)
- **Monorepo:** Turborepo
- **Icons:** lucide-react (tree-shakeable imports only: `import { Icon } from 'lucide-react'`)

## Monorepo Structure
beyndesh/
├── apps/web/ # Public website (beyndesh.com) — Port 3000
├── apps/cms/ # Admin CMS panel (cms.beyndesh.com) — Port 3001
├── packages/database/ # Prisma schema, client, migrations, seed
├── packages/shared/ # Zod validators, formatters, constants, types
├── packages/api/ # Business logic, CRUD operations, queries
├── packages/email/ # React Email templates + Resend client
└── packages/config/ # Shared Tailwind preset, ESLint, TypeScript configs

## Code Standards
- All components use TypeScript with explicit prop types (interfaces, not `type` aliases for component props)
- Use React Server Components by default. Add `'use client'` only when hooks or interactivity are needed
- File naming: PascalCase for components (`TripCard.tsx`), camelCase for utilities (`formatPrice.ts`), kebab-case for routes (`trip-detail/`)
- Every component file exports a single default component
- Validate ALL API inputs with Zod schemas (defined in `packages/shared/src/validators.ts`)
- Use `clsx` + `tailwind-merge` (via a `cn()` utility) for conditional classNames
- Images: Always use `next/image` with width, height, alt text, and blurhash placeholder
- Fonts: Load via `next/font/google` or `next/font/local` — never CDN links
- Environment variables: Server-only (no prefix) or client-safe (`NEXT_PUBLIC_` prefix). Never expose secrets to client.
- Error handling: Try/catch on all async operations. Return typed error objects, not thrown strings.

## Design System Rules (CRITICAL)
- **Colors:** Primary orange `#FF5F0F`, Black `#1D1D1B`, Paper `#F4F3E6`, White `#FFFFFF`
- **Typography:** Titillium Web (headings, buttons, nav — ALWAYS UPPERCASE), Goudy Old Style (body text — normal case), Lavishly Yours (signature accents — max 2-3 per page), Hubot Sans (logo only)
- **NEVER** use Titillium for body/paragraph text
- **NEVER** use Goudy for buttons or navigation
- **NEVER** use orange text on white background (contrast fails)
- **Maximum 3 colors** per section
- **Minimum touch target:** 44×44px for all interactive elements
- All animations respect `prefers-reduced-motion`
- Use design tokens from `packages/config/tailwind/preset.js` — never hardcode colors or font sizes

## Git Conventions
- Branch naming: `feature/*`, `fix/*`, `chore/*`, `hotfix/*`
- Commit messages: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`)
- Always commit working code — never commit broken builds
- Commit frequently with descriptive messages

## Security Rules
- NEVER hardcode API keys, passwords, or secrets in source code
- ALL sensitive values go in `.env.local` (which is .gitignored)
- ALL form inputs validated server-side with Zod (client validation is UX, not security)
- ALL database queries via Prisma (parameterized — prevents SQL injection)
- Set security headers in middleware (CSP, X-Frame-Options, HSTS)
- Rate limit all public API endpoints

## Testing Approach
- Unit tests: Vitest for utilities, validators, formatters
- Component tests: Vitest + Testing Library
- E2E tests: Playwright for critical flows (booking, auth, navigation)
- Accessibility: axe-core checks on all pages

## Bilingual Content
- All CMS content has English (required) + Bangla (optional) fields
- Pattern: `title` (English), `titleBn` (Bangla)
- Same for: excerpt/excerptBn, description/descriptionBn, question/questionBn, answer/answerBn

## Rendering Strategy
- Home, Trips, Categories, FAQ, Reviews, Gallery: ISR (revalidate 30min-24hr)
- Blog posts: SSG + on-demand revalidation
- About, Contact, Legal pages: SSG (build time)
- Booking, Dashboard, CMS: SSR (no cache, dynamic)
