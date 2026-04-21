# Beyndesh Project Context

## What This Project Is
A premium adventure travel website for Bangladesh with:
1. A public-facing marketing + booking website (apps/web)
2. A custom-built CMS admin panel (apps/cms)
3. Shared packages for database, API logic, utilities, and email

## Current Phase: Phase 1 — Foundation
We are building:
- Monorepo scaffolding (Turborepo + pnpm workspaces)
- Database schema (Prisma + Supabase PostgreSQL)
- Authentication (NextAuth.js v5)
- CMS admin shell (layout, sidebar, auth)
- Basic public pages (Home, About, Contact)
- Shared packages (database, shared, config)

## Key URLs
- Public site: beyndesh.com (apps/web, port 3000)
- CMS admin: cms.beyndesh.com (apps/cms, port 3001)
- Database: Supabase PostgreSQL (connection string in .env)
- Storage: Cloudflare R2 (Phase 2)

## Database
- Single PostgreSQL database on Supabase
- CMS tables prefixed with `cms_` (cms_trips, cms_stories, etc.)
- Transactional tables: users, bookings, payments, reviews, etc.
- Content versioning: every save creates a snapshot
- Bilingual: English required, Bangla optional (titleBn pattern)
- Content status workflow: DRAFT → IN_REVIEW → SCHEDULED → PUBLISHED → ARCHIVED
