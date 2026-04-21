---
description: Define or modify Prisma database schema for Beyndesh following naming conventions and best practices
---

# Skill: Prisma Schema Management

## When to Use
When asked to create or modify database tables/models.

## Instructions
1. All CMS content models prefixed with `Cms` (e.g., `CmsTrip`, `CmsStory`)
2. All models have `id` (cuid), `createdAt`, `updatedAt` auto-fields
3. Content models have: `status` (enum: DRAFT, IN_REVIEW, SCHEDULED, PUBLISHED, ARCHIVED), `publishedAt`, `createdBy`, `updatedBy`
4. Bilingual fields: `title` (required) + `titleBn` (optional), same for excerpt, description, etc.
5. Use `@map("snake_case")` for database column names (Prisma uses camelCase, DB uses snake_case)
6. Define proper relations with `@relation` and foreign keys
7. Use `Decimal` for prices (priceBDT required, priceUSD optional, priceEUR optional)
8. Add `@@index` for commonly queried fields (status, slug, publishedAt)
9. Slug fields are unique and have format validation
10. Soft delete pattern: use `archivedAt DateTime?` instead of actual deletion
