<div align="center">

# 🌊 Bynd BD

**Beyond Every Horizon Lies Bangladesh**

A premium travel platform connecting adventurous travelers with authentic
Bangladesh experiences — from the tiger's domain in the Sundarbans
to the cloud-wrapped peaks of Bandarban.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Keystatic](https://img.shields.io/badge/CMS-Keystatic-000)](https://keystatic.com/)
[![Turborepo](https://img.shields.io/badge/Monorepo-Turborepo-EF4444?logo=turborepo)](https://turbo.build/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://vercel.com/)

[Live Site](https://byndbd.com) · [Report Bug](https://github.com/byndesh/bynd-bd/issues) · [Request Feature](https://github.com/byndesh/bynd-bd/issues)

</div>

---

## ✨ Features

- **25 fully designed pages** — Home, Trips, Destinations, Stories, Dashboard, and more
- **Keystatic CMS** — Content-managed trips, stories, reviews, FAQs, and team bios
- **Dynamic routing** — Trip categories, trip details, story pages, destination guides
- **Multi-step booking form** — 4-step inquiry flow with API submission
- **Interactive gallery** — Filterable masonry photo grid
- **User dashboard** — Trip management, documents, account settings
- **SEO optimized** — Dynamic sitemap, robots.txt, Open Graph, metadata on every page
- **Responsive design** — Mobile-first with custom design system
- **Cookie compliance** — GDPR-ready consent banner
- **Monorepo architecture** — Turborepo with shared packages

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + Custom Design Tokens |
| CMS | Keystatic (Git-based) |
| Fonts | Titillium Web · Goudy Bookletter 1911 · Lavishly Yours |
| Monorepo | Turborepo + pnpm workspaces |
| Deployment | Vercel |
| CI/CD | GitHub Actions |

---

## 📁 Project Structure

```
bynd-bd/
├── apps/
│   ├── web/                   # Main Next.js application
│   │   ├── app/               # App Router pages (25 routes)
│   │   ├── components/        # Reusable UI components
│   │   ├── lib/               # Utilities, auth, helpers
│   │   ├── keystatic.config.ts # CMS schema
│   │   └── public/            # Static assets
│   └── cms/                   # Keystatic admin (standalone)
├── packages/                  # Shared packages
├── .github/workflows/         # CI/CD pipelines
├── turbo.json                 # Turborepo config
├── vercel.json                # Vercel deployment config
└── pnpm-workspace.yaml        # Workspace definition
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (see `.nvmrc`)
- pnpm 9+

### Installation

```bash
# Clone the repo
git clone https://github.com/byndesh/bynd-bd.git
cd bynd-bd

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
pnpm dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm lint` | Run ESLint |
| `pnpm type-check` | Run TypeScript checks |

---

## 🎨 Design System

| Token | Hex | Usage |
|-------|-----|-------|
| `bynd-flame` | `#FF5F0F` | Primary orange — CTAs, accents |
| `bynd-cream` | `#FAF9F2` | Page backgrounds |
| `bynd-ink` | `#1A1A1A` | Headings, dark sections |
| `bynd-ash` | `#4A4A4A` | Body text |

| Font | Role |
|------|------|
| Titillium Web (700) | Headings — uppercase |
| Goudy Bookletter 1911 (400) | Body text — elegant serif |
| Lavishly Yours (400) | Signature accents — italic cursive |

---

## 📝 Environment Variables

See [`.env.example`](.env.example) for all required variables.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL |
| `KEYSTATIC_GITHUB_CLIENT_ID` | Production | GitHub OAuth for CMS |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | Production | GitHub OAuth for CMS |
| `KEYSTATIC_SECRET` | Production | Session encryption |
| `RESEND_API_KEY` | Optional | Email service |

---

## 🚢 Deployment

Deployed on **Vercel** with automatic deployments from the `main` branch.

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Root Directory | `apps/web` |
| Build Command | `pnpm run build` |
| Node.js | 20.x |

---

## 🤝 Contributing

This is currently a private project. Contact the team for collaboration.

---

## 📄 License

© 2026 Bynd BD Travel. All rights reserved.

<div align="center">

Made with ❤️ in Bangladesh

*Where rivers write the stories*

</div>
