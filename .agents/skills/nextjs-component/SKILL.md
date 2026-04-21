---
description: Create Next.js React components following Beyndesh design system and coding standards
---

# Skill: Next.js Component Creation

## When to Use
When asked to create a new React component for the Beyndesh website.

## Instructions
1. Determine if the component needs interactivity. If yes, add `'use client'` at the top. If it only displays data, keep it as a Server Component.
2. Define an interface for props with descriptive names and JSDoc comments.
3. Use Tailwind CSS with design tokens from the Beyndesh preset (`text-bynd-orange`, `bg-bynd-paper`, `font-heading`, `font-body`, etc.)
4. Use the `cn()` utility from `@/lib/utils` for conditional classNames.
5. For images, always use `next/image` with alt text, width, height, and placeholder="blur" where applicable.
6. For links, always use `next/link`.
7. Add `aria-label` on interactive elements. Ensure 44x44px minimum touch targets.
8. Typography rules: headings in `font-heading uppercase`, body in `font-body`, signature accents in `font-signature`.
9. Export the component as default.
10. Place the component in the appropriate directory under `apps/web/components/` or `apps/cms/components/`.

## Output Format
```tsx
// Component file with proper TypeScript types
// Tailwind classes using design tokens
// Accessibility attributes
// Proper Next.js patterns (Image, Link, etc.)
```
