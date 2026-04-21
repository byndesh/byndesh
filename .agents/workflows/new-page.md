---
description: Create a new page in the Beyndesh web app with proper metadata, layout, and SEO
---

When the user types `/new-page <route-path> <page-title>`, do the following:

1. Create the page file at `apps/web/app/<route-path>/page.tsx`
2. Add proper Next.js metadata export (title pattern: "{Page Title} — Beyndesh", description, openGraph)
3. Create the page component with:
   - Proper heading hierarchy (H1 using `font-heading uppercase text-display-2`)
   - Semantic HTML structure
   - Responsive layout with Tailwind
   - Paper background (`bg-bynd-paper`)
4. If the page needs a unique layout, create `layout.tsx` in the same directory
5. Add JSON-LD structured data if applicable
6. Report what was created
