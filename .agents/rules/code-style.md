# Code Style Rules for Beyndesh

## TypeScript
- Strict mode enabled (`"strict": true` in tsconfig)
- No `any` types — use `unknown` and type guards instead
- Explicit return types on all exported functions
- Use `interface` for component props, `type` for unions/utility types
- Prefer `const` assertions where applicable

## React / Next.js
- React Server Components by default
- Only add 'use client' when absolutely needed (hooks, event handlers, browser APIs)
- Use `Suspense` boundaries with loading fallbacks
- Dynamic imports for heavy client components: `const Map = dynamic(() => import('./Map'), { ssr: false })`
- Always provide `key` prop when mapping lists
- Use `next/image` for all images, `next/link` for all internal links
- Metadata: Use `generateMetadata()` for dynamic SEO, `metadata` export for static

## Tailwind CSS
- Use the `cn()` utility (clsx + tailwind-merge) for conditional classes
- Never use `@apply` in CSS — keep Tailwind in JSX
- Use design token classes (e.g., `text-bynd-orange`, `bg-bynd-paper`) not raw hex
- Responsive: mobile-first (`md:`, `lg:` prefixes for larger screens)
- Use `clamp()` font sizes from the preset, not fixed px values

## File Organization
- One component per file
- Co-locate tests next to source files: `TripCard.tsx` + `TripCard.test.tsx`
- Shared types in `packages/shared/src/types.ts`
- API route handlers: thin layer — validate input, call package/api function, return response
