/**
 * Beyndesh Full Monorepo Structure Scaffold
 * Generates ALL missing files and directories per the architecture blueprint.
 * Run: node scripts/scaffold-all.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

let created = 0;
let skipped = 0;

function ensure(filePath, content = '') {
  if (existsSync(filePath)) { skipped++; return; }
  const dir = dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, 'utf8');
  console.log(`  ✅ ${filePath.replace(ROOT, '.')}`);
  created++;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function page(title, route, strategy = 'isr', revalidate = 3600, dynamic = false) {
  const strategyComment = dynamic
    ? `export const dynamic = 'force-dynamic';`
    : strategy === 'ssg'
    ? `// Static — built at build time (no revalidate export)`
    : `export const revalidate = ${revalidate};`;

  return `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

${strategyComment}

export default function ${title.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main id="main-content">
      {/* TODO: Build ${title} page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">${title}</p>
      </div>
    </main>
  );
}
`;
}

function apiRoute(methods = ['GET', 'POST']) {
  return methods.map(m => `export async function ${m}(request: Request) {
  // TODO: implement ${m} handler
  return Response.json({ ok: true });
}`).join('\n\n') + '\n';
}

function hook(name, description, body) {
  return `'use client';
import { ${body.imports} } from '${body.from}';

/**
 * ${name} — ${description}
 */
export function ${name}(${body.args ?? ''}) {
${body.impl}
}
`;
}

function zustandStore(name, stateShape) {
  return `'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ${name}State {
${stateShape.types}
}

export const ${name} = create<${name}State>()(
  persist(
    (set, get) => ({
${stateShape.defaults}
${stateShape.actions}
    }),
    { name: '${name.toLowerCase()}' }
  )
);
`;
}

function cmsPage(title) {
  return `import type { Metadata } from 'next';

export const metadata: Metadata = { title: '${title} | Beyndesh CMS' };

export const dynamic = 'force-dynamic';

export default function Cms${title.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <div className="p-8">
      <h1 className="font-heading text-2xl font-bold uppercase text-gray-900 mb-6">${title}</h1>
      {/* TODO: implement ${title} CMS page */}
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-400">
        Coming soon
      </div>
    </div>
  );
}
`;
}

function cmsComponent(name, description, isClient = true) {
  return `${isClient ? "'use client';\n\n" : ''}/**
 * @component ${name}
 * @description ${description}
 */
${isClient ? "import { useState } from 'react';\n" : ''}import { cn } from '@/lib/utils';

interface ${name}Props {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement ${name}
export default function ${name}({ className, children }: ${name}Props) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
`;
}

function apiModule(name, prismaModel) {
  return `import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

// ─── Queries ────────────────────────────────────────────────────────────────

export async function getAll${name}s() {
  return db.${prismaModel}.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function get${name}ById(id: string) {
  return db.${prismaModel}.findUnique({ where: { id } });
}

// ─── Mutations ──────────────────────────────────────────────────────────────

export async function create${name}(data: Prisma.${prismaModel}CreateInput) {
  return db.${prismaModel}.create({ data });
}

export async function update${name}(id: string, data: Prisma.${prismaModel}UpdateInput) {
  return db.${prismaModel}.update({ where: { id }, data });
}

export async function delete${name}(id: string) {
  return db.${prismaModel}.delete({ where: { id } });
}
`;
}

// ─── WEB: Marketing Pages ────────────────────────────────────────────────────

const webApp = resolve(ROOT, 'apps/web/app');

ensure(resolve(webApp, '(marketing)/page.tsx'), page('Home', '/', 'isr', 3600));
ensure(resolve(webApp, '(marketing)/about/page.tsx'), page('About Us', '/about', 'ssg'));
ensure(resolve(webApp, '(marketing)/contact/page.tsx'), page('Contact', '/contact', 'ssg'));
ensure(resolve(webApp, '(marketing)/faq/page.tsx'), page('FAQ', '/faq', 'isr', 86400));
ensure(resolve(webApp, '(marketing)/gallery/page.tsx'), page('Gallery', '/gallery', 'isr', 3600));
ensure(resolve(webApp, '(marketing)/reviews/page.tsx'), page('Reviews', '/reviews', 'isr', 3600));
ensure(resolve(webApp, '(marketing)/gift-cards/page.tsx'), page('Gift Cards', '/gift-cards', 'isr', 86400));
ensure(resolve(webApp, '(marketing)/careers/page.tsx'), page('Careers', '/careers', 'isr', 86400));
ensure(resolve(webApp, '(marketing)/partners/page.tsx'), page('Partners', '/partners', 'ssg'));

// ─── WEB: Trips Pages ────────────────────────────────────────────────────────

ensure(resolve(webApp, '(trips)/trips/page.tsx'), page('All Trips', '/trips', 'isr', 1800));
ensure(resolve(webApp, '(trips)/destinations/page.tsx'), page('Destinations', '/destinations', 'isr', 86400));
ensure(resolve(webApp, '(trips)/trips/[slug]/page.tsx'), `import type { Metadata } from 'next';

export const revalidate = 3600;

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: \`\${params.slug} | Beyndesh\`,
    description: 'Premium adventure trip in Bangladesh.',
  };
}

export default function TripDetailPage({ params }: Props) {
  return (
    <main id="main-content">
      {/* TODO: Build trip detail page for slug: {params.slug} */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Trip: {params.slug}</p>
      </div>
    </main>
  );
}
`);

ensure(resolve(webApp, '(trips)/destinations/[slug]/page.tsx'), `import type { Metadata } from 'next';

export const revalidate = 86400;

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: \`\${params.slug} | Destinations | Beyndesh\` };
}

export default function DestinationPage({ params }: Props) {
  return (
    <main id="main-content">
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Destination: {params.slug}</p>
      </div>
    </main>
  );
}
`);

ensure(resolve(webApp, '(trips)/category/[slug]/page.tsx'), `import type { Metadata } from 'next';

export const revalidate = 3600;

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: \`\${params.slug} Trips | Beyndesh\` };
}

export default function CategoryPage({ params }: Props) {
  return (
    <main id="main-content">
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Category: {params.slug}</p>
      </div>
    </main>
  );
}
`);

// Add layout files for non-marketing route groups
ensure(resolve(webApp, '(trips)/layout.tsx'), `import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

export default function TripsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
`);

// ─── WEB: Content Pages ──────────────────────────────────────────────────────

ensure(resolve(webApp, '(content)/blog/page.tsx'), page('Journal', '/blog', 'isr', 3600));
ensure(resolve(webApp, '(content)/blog/[slug]/page.tsx'), `import type { Metadata } from 'next';

// SSG + on-demand revalidation (triggered from CMS on publish)
export const dynamic = 'force-static';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: \`\${params.slug} | Journal | Beyndesh\` };
}

export default function BlogPostPage({ params }: Props) {
  return (
    <main id="main-content">
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Post: {params.slug}</p>
      </div>
    </main>
  );
}
`);

ensure(resolve(webApp, '(content)/layout.tsx'), `import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
`);

// ─── WEB: Booking & Auth ─────────────────────────────────────────────────────

ensure(resolve(webApp, '(booking)/book/page.tsx'), page('Book a Trip', '/book', 'ssr', 0, true));
ensure(resolve(webApp, '(booking)/layout.tsx'), `// Minimal layout for booking flow — no full nav
export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`);

ensure(resolve(webApp, '(auth)/login/page.tsx'), page('Sign In', '/login', 'ssg'));
ensure(resolve(webApp, '(auth)/register/page.tsx'), page('Create Account', '/register', 'ssg'));
ensure(resolve(webApp, '(auth)/forgot-password/page.tsx'), page('Forgot Password', '/forgot-password', 'ssg'));
ensure(resolve(webApp, '(auth)/layout.tsx'), `// Minimal auth layout
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bynd-paper flex items-center justify-center">
      {children}
    </div>
  );
}
`);

// ─── WEB: Dashboard ──────────────────────────────────────────────────────────

ensure(resolve(webApp, '(dashboard)/dashboard/page.tsx'), page('My Dashboard', '/dashboard', 'ssr', 0, true));
ensure(resolve(webApp, '(dashboard)/dashboard/bookings/page.tsx'), page('My Bookings', '/dashboard/bookings', 'ssr', 0, true));
ensure(resolve(webApp, '(dashboard)/dashboard/wishlist/page.tsx'), page('My Wishlist', '/dashboard/wishlist', 'ssr', 0, true));
ensure(resolve(webApp, '(dashboard)/layout.tsx'), `import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect('/login');
  return <>{children}</>;
}
`);

// ─── WEB: Legal ──────────────────────────────────────────────────────────────

ensure(resolve(webApp, '(legal)/privacy-policy/page.tsx'), page('Privacy Policy', '/privacy-policy', 'ssg'));
ensure(resolve(webApp, '(legal)/terms/page.tsx'), page('Terms of Service', '/terms', 'ssg'));
ensure(resolve(webApp, '(legal)/cookies/page.tsx'), page('Cookie Policy', '/cookies', 'ssg'));
ensure(resolve(webApp, '(legal)/layout.tsx'), `import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
`);

// ─── WEB: sitemap + robots ───────────────────────────────────────────────────

ensure(resolve(webApp, 'sitemap.ts'), `import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://beyndesh.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: \`\${base}/trips\`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.9 },
    { url: \`\${base}/destinations\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: \`\${base}/blog\`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: \`\${base}/about\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: \`\${base}/contact\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: \`\${base}/faq\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
`);

ensure(resolve(webApp, 'robots.ts'), `import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://beyndesh.com/sitemap.xml',
    host: 'https://beyndesh.com',
  };
}
`);

// ─── WEB: API Routes ─────────────────────────────────────────────────────────

ensure(resolve(webApp, 'api/contact/route.ts'), `import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: validate with Zod, save to DB, send email via @beyndesh/email
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
`);

ensure(resolve(webApp, 'api/newsletter/route.ts'), `import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    // TODO: validate email, save subscriber, send welcome email
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
`);

ensure(resolve(webApp, 'api/revalidate/route.ts'), `import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

// Called by CMS on content publish to trigger ISR on-demand revalidation
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { path, tag } = await request.json();

  if (tag) revalidateTag(tag);
  if (path) revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
`);

ensure(resolve(webApp, 'api/payment/route.ts'), `import { NextRequest, NextResponse } from 'next/server';

// SSLCommerz (BD) + Stripe (International) payment initiation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: determine gateway (BD vs international), initiate payment session
    return NextResponse.json({ redirectUrl: '#' });
  } catch (error) {
    return NextResponse.json({ error: 'Payment initiation failed' }, { status: 500 });
  }
}
`);

ensure(resolve(webApp, 'api/booking/route.ts'), `import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: validate, create booking in DB, trigger payment
    return NextResponse.json({ bookingId: 'BYND-XXXXX' });
  } catch (error) {
    return NextResponse.json({ error: 'Booking failed' }, { status: 500 });
  }
}
`);

// ─── WEB: Hooks ──────────────────────────────────────────────────────────────

const hooksDir = resolve(ROOT, 'apps/web/lib/hooks');

ensure(resolve(hooksDir, 'useIntersectionObserver.ts'), `'use client';
import { useEffect, useRef, useState } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * useIntersectionObserver — triggers when element enters/exits the viewport.
 * Used for scroll-triggered Framer Motion animations.
 */
export function useIntersectionObserver(options: Options = {}) {
  const { threshold = 0.1, root = null, rootMargin = '0%', freezeOnceVisible = true } = options;
  const ref = useRef<Element | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const node = ref.current;
    if (!node || frozen) return;
    const observer = new IntersectionObserver(([e]) => setEntry(e), { threshold, root, rootMargin });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen]);

  return { ref, entry, isVisible: !!entry?.isIntersecting };
}
`);

ensure(resolve(hooksDir, 'useMediaQuery.ts'), `'use client';
import { useEffect, useState } from 'react';

/**
 * useMediaQuery — returns true when the given CSS media query matches.
 * Example: useMediaQuery('(min-width: 768px)')
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
`);

ensure(resolve(hooksDir, 'useDebounce.ts'), `'use client';
import { useEffect, useState } from 'react';

/**
 * useDebounce — delays updating a value until after a pause in changes.
 * Used in search inputs to prevent firing on every keystroke.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
`);

ensure(resolve(hooksDir, 'useCurrency.ts'), `'use client';
import { useCurrencyStore } from '@/lib/store/useCurrencyStore';

const RATES: Record<string, number> = {
  BDT: 1,
  USD: 0.0091,
  EUR: 0.0083,
};

const SYMBOLS: Record<string, string> = {
  BDT: '৳',
  USD: '$',
  EUR: '€',
};

/**
 * useCurrency — converts a BDT amount to the user's chosen currency.
 */
export function useCurrency() {
  const { currency } = useCurrencyStore();

  function format(amountBDT: number): string {
    const rate = RATES[currency] ?? 1;
    const converted = Math.round(amountBDT * rate);
    return \`\${SYMBOLS[currency]}\${converted.toLocaleString()}\`;
  }

  return { currency, format, symbol: SYMBOLS[currency] };
}
`);

ensure(resolve(hooksDir, 'useLocalStorage.ts'), `'use client';
import { useEffect, useState } from 'react';

/**
 * useLocalStorage — persists state to localStorage with SSR safety.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch { /* ignore */ }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
`);

// ─── WEB: Zustand Stores ─────────────────────────────────────────────────────

const storeDir = resolve(ROOT, 'apps/web/lib/store');

ensure(resolve(storeDir, 'useBookingStore.ts'), `'use client';
import { create } from 'zustand';

interface BookingState {
  tripSlug: string | null;
  startDate: string | null;
  endDate: string | null;
  travelers: number;
  currency: string;
  step: number;
  setTrip: (slug: string) => void;
  setDates: (start: string, end: string) => void;
  setTravelers: (n: number) => void;
  setStep: (step: number) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  tripSlug: null,
  startDate: null,
  endDate: null,
  travelers: 1,
  currency: 'BDT',
  step: 1,
  setTrip: (slug) => set({ tripSlug: slug }),
  setDates: (start, end) => set({ startDate: start, endDate: end }),
  setTravelers: (n) => set({ travelers: n }),
  setStep: (step) => set({ step }),
  reset: () => set({ tripSlug: null, startDate: null, endDate: null, travelers: 1, step: 1 }),
}));
`);

ensure(resolve(storeDir, 'useCurrencyStore.ts'), `'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Currency = 'BDT' | 'USD' | 'EUR';

interface CurrencyState {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: 'BDT',
      setCurrency: (currency) => set({ currency }),
    }),
    { name: 'bynd-currency' }
  )
);
`);

ensure(resolve(storeDir, 'useFilterStore.ts'), `'use client';
import { create } from 'zustand';

interface FilterState {
  search: string;
  category: string | null;
  difficulty: string | null;
  priceMin: number;
  priceMax: number;
  duration: string | null;
  setSearch: (q: string) => void;
  setCategory: (c: string | null) => void;
  setDifficulty: (d: string | null) => void;
  setPriceRange: (min: number, max: number) => void;
  setDuration: (d: string | null) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  search: '',
  category: null,
  difficulty: null,
  priceMin: 0,
  priceMax: 999999,
  duration: null,
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  setDifficulty: (difficulty) => set({ difficulty }),
  setPriceRange: (priceMin, priceMax) => set({ priceMin, priceMax }),
  setDuration: (duration) => set({ duration }),
  reset: () => set({ search: '', category: null, difficulty: null, priceMin: 0, priceMax: 999999, duration: null }),
}));
`);

ensure(resolve(storeDir, 'useWishlistStore.ts'), `'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  slugs: string[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      slugs: [],
      add: (slug) => set((s) => ({ slugs: [...s.slugs, slug] })),
      remove: (slug) => set((s) => ({ slugs: s.slugs.filter((x) => x !== slug) })),
      toggle: (slug) => get().has(slug) ? get().remove(slug) : get().add(slug),
      has: (slug) => get().slugs.includes(slug),
    }),
    { name: 'bynd-wishlist' }
  )
);
`);

// ─── WEB: motion.ts ──────────────────────────────────────────────────────────

ensure(resolve(ROOT, 'apps/web/lib/motion.ts'), `/**
 * Framer Motion animation variants and presets for Beyndesh.
 * Import these into components for consistent, DRY animation behaviour.
 */

import type { Variants } from 'framer-motion';

/** Standard fade-up entrance — used across most whileInView components */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

/** Fade-in without movement — used for overlays and images */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

/** Staggered children — wrap in a motion parent with staggerChildren */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/** Slide in from left */
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

/** Slide in from right */
export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

/** Scale up — used for cards and images */
export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

/** Standard hover lift for cards */
export const cardHover = {
  rest:  { y: 0, boxShadow: '0 10px 40px -15px rgba(29,29,27,0.1)' },
  hover: { y: -4, boxShadow: '0 20px 60px -20px rgba(29,29,27,0.18)', transition: { duration: 0.2 } },
};

/** Viewport config shared across whileInView components */
export const viewport = { once: true, margin: '-80px' };
`);

// ─── WEB: Public placeholders ─────────────────────────────────────────────────

for (const dir of ['fonts', 'images', 'favicons', 'downloads']) {
  const p = resolve(ROOT, 'apps/web/public', dir, '.gitkeep');
  ensure(p, '');
}

ensure(resolve(ROOT, 'apps/web/public/llms.txt'), `# Beyndesh AI Discoverability File
# https://llmstxt.org

# Beyndesh — Premium Adventure Travel (Bangladesh)
# https://beyndesh.com

## About
Beyndesh (বেয়ন্দেশ) is a premium adventure travel company based in Bangladesh,
offering curated expedition packages to the Sundarbans, Chittagong Hill Tracts,
Cox's Bazar, and beyond. All trips include expert guides, sustainable practices,
and bilingual (English/Bangla) support.

## Key Pages
- Trips: https://beyndesh.com/trips
- Destinations: https://beyndesh.com/destinations
- About: https://beyndesh.com/about
- Contact: https://beyndesh.com/contact
- Book: https://beyndesh.com/book
`);

// ─── CMS: Dashboard Pages ─────────────────────────────────────────────────────

const cmsApp = resolve(ROOT, 'apps/cms/app/(dashboard)');

const cmsDashPages = [
  ['stories/page.tsx',          'Stories'],
  ['stories/new/page.tsx',      'New Story'],
  ['stories/[id]/page.tsx',     'Edit Story'],
  ['destinations/page.tsx',     'Destinations'],
  ['destinations/new/page.tsx', 'New Destination'],
  ['destinations/[id]/page.tsx','Edit Destination'],
  ['faq/page.tsx',              'FAQ'],
  ['team/page.tsx',             'Team Members'],
  ['pages/page.tsx',            'Static Pages'],
  ['jobs/page.tsx',             'Job Listings'],
  ['media/page.tsx',            'Media Library'],
  ['gallery/page.tsx',          'Gallery'],
  ['taxonomy/page.tsx',         'Categories & Tags'],
  ['menus/page.tsx',            'Navigation Menus'],
  ['bookings/page.tsx',         'Bookings'],
  ['reviews/page.tsx',          'Reviews'],
  ['contacts/page.tsx',         'Contact Submissions'],
  ['newsletter/page.tsx',       'Newsletter'],
  ['users/page.tsx',            'Users'],
  ['settings/page.tsx',         'Settings'],
  ['analytics/page.tsx',        'Analytics'],
  ['trips/new/page.tsx',        'New Trip'],
  ['trips/[id]/page.tsx',       'Edit Trip'],
];

for (const [filePath, title] of cmsDashPages) {
  ensure(resolve(cmsApp, filePath), cmsPage(title));
}

// ─── CMS: API Routes ─────────────────────────────────────────────────────────

const cmsApiBase = resolve(ROOT, 'apps/cms/app/api/cms');

for (const [resource, methods] of [
  ['trips',        ['GET','POST']],
  ['trips/[id]',   ['GET','PUT','DELETE']],
  ['stories',      ['GET','POST']],
  ['stories/[id]', ['GET','PUT','DELETE']],
  ['destinations', ['GET','POST']],
  ['faq',          ['GET','POST']],
  ['media',        ['GET','POST']],
  ['revalidate',   ['POST']],
]) {
  ensure(
    resolve(cmsApiBase, resource, 'route.ts'),
    methods.map(m => `export async function ${m}(request: Request) {\n  // TODO: implement CMS ${resource} ${m}\n  return Response.json({ ok: true });\n}`).join('\n\n') + '\n'
  );
}

// ─── CMS: Components ─────────────────────────────────────────────────────────

const cmsComp = resolve(ROOT, 'apps/cms/components');

const cmsComponents = [
  ['layout/AdminShell.tsx',           'AdminShell',        'Root CMS layout with sidebar + topbar'],
  ['layout/Sidebar.tsx',              'Sidebar',           'Admin navigation sidebar with all CMS routes'],
  ['layout/Topbar.tsx',               'Topbar',            'Admin topbar with user avatar and breadcrumb'],
  ['layout/Breadcrumb.tsx',           'CMSBreadcrumb',     'Breadcrumb for CMS inner pages'],
  ['editors/RichTextEditor.tsx',      'RichTextEditor',    'TipTap-based WYSIWYG rich text editor'],
  ['editors/BilingualField.tsx',      'BilingualField',    'Side-by-side EN/BN input fields'],
  ['editors/JsonEditor.tsx',          'JsonEditor',        'Raw JSON editor for advanced content fields'],
  ['media/MediaLibrary.tsx',          'MediaLibrary',      'Full media library grid with search and filter'],
  ['media/MediaPicker.tsx',           'MediaPicker',       'Compact media picker modal for form fields'],
  ['media/MediaUploader.tsx',         'MediaUploader',     'Drag-and-drop uploader to Cloudflare R2'],
  ['media/ImageCropper.tsx',          'ImageCropper',      'In-browser image crop/resize tool'],
  ['forms/TripForm.tsx',              'TripForm',          'Full trip creation/edit form'],
  ['forms/StoryForm.tsx',             'StoryForm',         'Blog story creation/edit form'],
  ['forms/DestinationForm.tsx',       'DestinationForm',   'Destination creation/edit form'],
  ['fields/SlugField.tsx',            'SlugField',         'Auto-generating slug input with manual override'],
  ['fields/SEOFields.tsx',            'SEOFields',         'SEO title, description, OG image fields'],
  ['fields/ItineraryBuilder.tsx',     'ItineraryBuilder',  'Drag-reorderable day-by-day itinerary builder'],
  ['fields/MapPicker.tsx',            'MapPicker',         'Mapbox-based map click-to-pick location input'],
  ['tables/DataTable.tsx',            'DataTable',         'Generic sortable, filterable data table'],
  ['tables/BookingTable.tsx',         'BookingTable',      'Booking-specific data table with status filters'],
  ['tables/ReviewTable.tsx',          'ReviewTable',       'Review moderation table with approve/reject'],
  ['widgets/DashboardStats.tsx',      'DashboardStats',    'Grid of key CMS stats (trips, bookings, revenue)'],
  ['widgets/ActivityFeed.tsx',        'ActivityFeed',      'Recent admin activity log feed'],
  ['widgets/QuickActions.tsx',        'QuickActions',      'Quick action buttons for common CMS tasks'],
  ['publishing/PublishControls.tsx',  'PublishControls',   'Publish/Draft/Schedule controls for content'],
  ['publishing/StatusBadge.tsx',      'CMSStatusBadge',    'Draft/Published/Scheduled status indicator'],
  ['publishing/VersionHistory.tsx',   'VersionHistory',    'Content version history list with restore'],
  ['shared/ConfirmDialog.tsx',        'ConfirmDialog',     'Destructive action confirmation dialog'],
  ['shared/Toast.tsx',                'CMSToast',          'CMS toast notification system'],
  ['shared/EmptyState.tsx',           'CMSEmptyState',     'Empty state for CMS data tables'],
];

for (const [filePath, name, description] of cmsComponents) {
  ensure(resolve(cmsComp, filePath), cmsComponent(name, description));
}

// ─── CMS: lib/upload.ts ───────────────────────────────────────────────────────

ensure(resolve(ROOT, 'apps/cms/lib/upload.ts'), `/**
 * Cloudflare R2 upload utility for the CMS.
 * Generates a pre-signed URL for direct browser upload.
 */

export interface UploadResult {
  key: string;
  url: string;
}

export async function uploadToR2(file: File, folder = 'media'): Promise<UploadResult> {
  const key = \`\${folder}/\${Date.now()}-\${file.name.replace(/[^a-zA-Z0-9.-]/g, '-')}\`;

  // TODO: implement actual R2 upload using @aws-sdk/client-s3 with pre-signed URLs
  // or use Cloudflare Images API directly

  const url = \`\${process.env.R2_PUBLIC_URL}/\${key}\`;
  return { key, url };
}

export function getPublicUrl(key: string): string {
  return \`\${process.env.R2_PUBLIC_URL}/\${key}\`;
}
`);

// ─── packages/api — Missing modules ──────────────────────────────────────────

const apiSrc = resolve(ROOT, 'packages/api/src');

const apiModules = [
  ['stories',      'CmsStory',         'Story',       'story'],
  ['destinations', 'CmsDestination',   'Destination', 'cmsDestination'],
  ['faq',          'CmsFaq',           'Faq',         'cmsFaq'],
  ['team',         'CmsTeamMember',    'TeamMember',  'cmsTeamMember'],
  ['media',        'CmsMedia',         'Media',       'cmsMedia'],
  ['pages',        'CmsPage',          'Page',        'cmsPage'],
  ['taxonomy',     'CmsTaxonomy',      'Taxonomy',    'cmsTaxonomy'],
  ['bookings',     'Booking',          'Booking',     'booking'],
  ['reviews',      'Review',           'Review',      'review'],
  ['newsletter',   'NewsletterSubscriber', 'Subscriber', 'newsletterSubscriber'],
];

for (const [filename, prismaModel, typeName, prismaField] of apiModules) {
  ensure(resolve(apiSrc, `${filename}.ts`), `import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAll${typeName}s() {
  return db.${prismaField}.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function get${typeName}ById(id: string) {
  return db.${prismaField}.findUnique({ where: { id } });
}

export async function create${typeName}(data: Prisma.${prismaModel}CreateInput) {
  return db.${prismaField}.create({ data });
}

export async function update${typeName}(id: string, data: Prisma.${prismaModel}UpdateInput) {
  return db.${prismaField}.update({ where: { id }, data });
}

export async function delete${typeName}(id: string) {
  return db.${prismaField}.delete({ where: { id } });
}
`);
}

// Search + indexing
ensure(resolve(apiSrc, 'search.ts'), `/**
 * Meilisearch integration for full-text trip/story search.
 */
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST ?? 'http://localhost:7700',
  apiKey: process.env.MEILISEARCH_API_KEY,
});

export const tripsIndex = client.index('trips');
export const storiesIndex = client.index('stories');

export async function searchTrips(query: string, options = {}) {
  return tripsIndex.search(query, { limit: 20, ...options });
}

export async function searchStories(query: string, options = {}) {
  return storiesIndex.search(query, { limit: 20, ...options });
}

export { client as searchClient };
`);

ensure(resolve(apiSrc, 'indexing.ts'), `/**
 * Sync database content to Meilisearch indexes.
 * Called after content publish/update in the CMS.
 */
import { db } from '@beyndesh/database';
import { tripsIndex, storiesIndex } from './search';

export async function reindexTrips() {
  const trips = await db.cmsTrip.findMany({ where: { status: 'PUBLISHED' } });
  await tripsIndex.addDocuments(trips.map(t => ({ id: t.id, ...t })));
}

export async function reindexStories() {
  const stories = await db.cmsStory.findMany({ where: { status: 'PUBLISHED' } });
  await storiesIndex.addDocuments(stories.map(s => ({ id: s.id, ...s })));
}

export async function reindexAll() {
  await Promise.all([reindexTrips(), reindexStories()]);
}
`);

// ─── packages/email — Full setup ─────────────────────────────────────────────

const emailSrc = resolve(ROOT, 'packages/email/src');

ensure(resolve(emailSrc, 'client.ts'), `import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM = 'Beyndesh <hello@beyndesh.com>';
export const EMAIL_REPLY_TO = 'support@beyndesh.com';
`);

const emailTemplates = [
  ['BookingConfirmation',  'Sent to customer after booking is confirmed'],
  ['BookingNotification',  'Sent to admin when a new booking is placed'],
  ['ContactResponse',      'Auto-reply to contact form submissions'],
  ['NewsletterWelcome',    'Welcome email for new newsletter subscribers'],
  ['GiftCardDelivery',     'Gift card delivery email to recipient'],
  ['PasswordReset',        'Password reset link email'],
  ['TripReminder',         'Reminder email sent 7 days before trip departure'],
];

for (const [name, description] of emailTemplates) {
  ensure(resolve(emailSrc, 'templates', `${name}.tsx`), `/**
 * @email ${name}
 * @description ${description}
 */

interface ${name}Props {
  recipientName: string;
  // TODO: add relevant props
}

export default function ${name}({ recipientName }: ${name}Props) {
  return (
    <div style={{ fontFamily: 'Georgia, serif', maxWidth: 600, margin: '0 auto', padding: 32 }}>
      <h1 style={{ fontFamily: 'Helvetica, sans-serif', color: '#1A1A1A' }}>
        Beyndesh
      </h1>
      <p>Dear {recipientName},</p>
      {/* TODO: complete ${name} email template */}
      <p style={{ color: '#E8652D', fontWeight: 'bold' }}>Beyond the Land.</p>
    </div>
  );
}
`);
}

ensure(resolve(emailSrc, 'index.ts'), emailTemplates.map(([name]) =>
  `export { default as ${name} } from './templates/${name}';`
).join('\n') + '\nexport { resend, EMAIL_FROM, EMAIL_REPLY_TO } from \'./client\';\n');

// ─── CI/CD ────────────────────────────────────────────────────────────────────

const ghDir = resolve(ROOT, '.github/workflows');

ensure(resolve(ghDir, 'ci.yml'), `name: CI

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

jobs:
  ci:
    name: Lint, Typecheck & Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm typecheck
      - run: pnpm lint
`);

ensure(resolve(ghDir, 'deploy-web.yml'), `name: Deploy Web

on:
  push:
    branches: [main]
    paths: ['apps/web/**', 'packages/**']

jobs:
  deploy:
    name: Deploy apps/web to Vercel
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter @beyndesh/web build
        env:
          DATABASE_URL: \${{ secrets.DATABASE_URL }}
          NEXTAUTH_SECRET: \${{ secrets.AUTH_SECRET }}
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_WEB_ID }}
          working-directory: apps/web
`);

ensure(resolve(ghDir, 'deploy-cms.yml'), `name: Deploy CMS

on:
  push:
    branches: [main]
    paths: ['apps/cms/**', 'packages/**']

jobs:
  deploy:
    name: Deploy apps/cms to Vercel
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter @beyndesh/cms build
        env:
          DATABASE_URL: \${{ secrets.DATABASE_URL }}
          AUTH_SECRET: \${{ secrets.AUTH_SECRET }}
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_CMS_ID }}
          working-directory: apps/cms
`);

// ─── Final report ─────────────────────────────────────────────────────────────

console.log('\n✅ Scaffold complete!\n   Created : ' + created + ' files\n   Skipped : ' + skipped + ' (already existed)\n');
