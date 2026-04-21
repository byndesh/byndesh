/**
 * Beyndesh Component Scaffold Generator
 * Generates all 135 remaining component files with correct TypeScript boilerplate.
 * Run with: node apps/web/scripts/generate-components.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const COMPONENTS = resolve(ROOT, 'components');

/** Component definitions: [filename, category, isClient, shortDescription] */
const components = [
  // navigation
  ['NavDropdown',         'navigation',   true,  'Mega-menu dropdown for Trips navigation link'],
  ['Breadcrumb',          'navigation',   false, 'Hierarchical breadcrumb trail for inner pages'],
  ['BackToTop',           'navigation',   true,  'Diamond-shaped button that appears after 400px scroll'],
  ['CookieConsentBanner', 'navigation',   true,  'Bottom-fixed cookie consent bar with Accept/Reject/Manage'],
  ['SkipToContent',       'navigation',   false, 'Accessibility skip link, sr-only until focused'],
  ['LanguageSwitcher',    'navigation',   true,  'EN / BN language toggle dropdown in navbar'],

  // heroes
  ['HeroFullscreen',      'heroes',       false, 'Full-screen hero with background image/video and CTA'],
  ['HeroCompact',         'heroes',       false, 'Shorter hero for interior pages, no background image'],
  ['HeroDestination',     'heroes',       false, 'Destination hero with stat bar overlay'],
  ['HeroCategory',        'heroes',       false, 'Category hero with image and signature accent'],
  ['BrandWordmark',       'heroes',       true,  'BEYNDESH logotype in Hubot Sans with animated letter spacing'],
  ['ScrollIndicator',     'heroes',       true,  'Animated bouncing chevron scroll cue'],

  // cards
  ['TripCard',            'cards',        false, 'Core trip listing card with image, price, badges, hover effects'],
  ['TripCardFeatured',    'cards',        false, 'Larger horizontal-layout featured trip card'],
  ['TripCategoryCard',    'cards',        false, 'Category card with image, title, description, CTA'],
  ['StoryCard',           'cards',        false, 'Blog story card with category badge, read time, excerpt'],
  ['StoryCardFeatured',   'cards',        false, 'Full-width featured story with large image'],
  ['TestimonialCard',     'cards',        false, 'Quote, author, trip name, star rating on cream background'],
  ['TestimonialCardLarge','cards',        false, 'Full-width featured review with author photo'],
  ['TeamMemberCard',      'cards',        false, 'Staff profile: photo, name, role, region, languages'],
  ['DestinationCard',     'cards',        false, 'Destination with image, name, trip count, hover overlay'],
  ['JobCard',             'cards',        false, 'Career listing: title, location, type, description, CTA'],
  ['GiftCardOption',      'cards',        true,  'Selectable gift card amount option'],
  ['BookingCard',         'cards',        false, 'Booking summary: trip, date, status badge, actions'],
  ['PartnerCard',         'cards',        false, 'Partner logo and optional description'],
  ['PressCard',           'cards',        false, 'Press mention: publication, title, date, link'],
  ['PhotoCard',           'cards',        true,  'Gallery photo with location tag, caption, lightbox trigger'],
  ['VideoCard',           'cards',        true,  'Video thumbnail with play overlay and duration badge'],
  ['ItineraryDayCard',    'cards',        false, 'Day-by-day itinerary entry with icon and expandable detail'],
  ['PricingCard',         'cards',        false, 'Duration, starting price, description pricing block'],
  ['CustomizationCard',   'cards',        false, 'Custom trip request type with icon and description'],
  ['StatCard',            'cards',        true,  'Animated counter card: number + label, triggered on view'],

  // buttons
  ['ButtonPrimary',       'buttons',      false, 'Orange pill CTA button — primary action'],
  ['ButtonDark',          'buttons',      false, 'Black pill CTA button — dark variant'],
  ['ButtonOutline',       'buttons',      false, 'Transparent bordered button, fills on hover'],
  ['ButtonGhost',         'buttons',      false, 'Text-only ghost button with underline on hover'],
  ['ButtonIcon',          'buttons',      false, 'Circle/diamond icon-only button'],
  ['DiamondButton',       'buttons',      false, '45-degree rotated square button for carousel navigation'],
  ['CTABanner',           'buttons',      false, 'Full-width call-to-action banner with heading and button'],
  ['FloatingCTA',         'buttons',      true,  'Fixed bottom bar with Book Now CTA, mobile only'],
  ['WhatsAppButton',      'buttons',      true,  'Fixed floating WhatsApp contact button'],

  // forms
  ['TextInput',           'forms',        true,  'Labelled text input with error state and underline style'],
  ['EmailInput',          'forms',        true,  'Email input extending TextInput with email validation'],
  ['PhoneInput',          'forms',        true,  'Country code dropdown + phone number input'],
  ['TextArea',            'forms',        true,  'Labelled textarea with character counter'],
  ['SelectDropdown',      'forms',        true,  'Custom styled select dropdown'],
  ['MultiSelectCheckbox', 'forms',        true,  'Multi-select group of styled checkboxes'],
  ['RadioGroup',          'forms',        true,  'Single-select custom styled radio buttons'],
  ['DateRangePicker',     'forms',        true,  'Calendar popup for start/end date selection'],
  ['NumberStepper',       'forms',        true,  'Plus/minus stepper with min/max constraints'],
  ['FileUpload',          'forms',        true,  'Drag-and-drop or click file upload area'],
  ['NewsletterForm',      'forms',        true,  'Inline email + submit newsletter subscription form'],
  ['SearchInput',         'forms',        true,  'Search field with icon and auto-suggest capability'],
  ['FormStepper',         'forms',        true,  'Multi-step form progress indicator'],
  ['FormSuccess',         'forms',        true,  'Animated checkmark + confirmation message'],
  ['FormError',           'forms',        true,  'Error banner with field-level error messages'],
  ['CookieConsentToggle', 'forms',        true,  'Per-category cookie consent on/off toggle'],
  ['StarRating',          'forms',        true,  'Interactive star rating input + read-only display variant'],
  ['GiftCardForm',        'forms',        true,  'Gift card: amount, recipient, message, delivery date'],
  ['LoginForm',           'forms',        true,  'Email + password + forgot password link form'],

  // carousels
  ['HorizontalCarousel',  'carousels',    true,  'Scroll-snap horizontal carousel with diamond navigation'],
  ['TestimonialSlider',   'carousels',    true,  '3-visible testimonial auto-rotating carousel'],
  ['PartnerLogoStrip',    'carousels',    true,  'Auto-scrolling partner logos, grayscale to color on hover'],
  ['GalleryLightbox',     'carousels',    true,  'Full-screen lightbox with prev/next and keyboard navigation'],
  ['ImageSlider',         'carousels',    true,  'Multi-image slider with dots and arrow navigation'],
  ['BeforeAfterSlider',   'carousels',    true,  'Drag-handle seasonal comparison image slider'],

  // badges
  ['CategoryBadge',       'badges',       false, 'Colored uppercase category label pill'],
  ['DifficultyBadge',     'badges',       false, 'Easy/Moderate/Challenging with semantic color coding'],
  ['StatusBadge',         'badges',       false, 'Booking status: Confirmed/Deposit Paid/Cancelled'],
  ['PriceBadge',          'badges',       false, 'Starting price display in BDT or USD'],
  ['DateBadge',           'badges',       false, 'Formatted date range display'],
  ['NewBadge',            'badges',       false, '"NEW" pill badge for recently added content'],
  ['ReadTimeBadge',       'badges',       false, 'Estimated read time with clock icon'],
  ['LanguageBadge',       'badges',       false, 'EN / BN language indicator badge'],
  ['UNESCOBadge',         'badges',       false, 'UNESCO World Heritage Site marker badge'],

  // data-display
  ['QuickFactsBar',       'data-display', false, 'Horizontal bar: Price, Duration, Group, Difficulty, Season'],
  ['IncludesExcludes',    'data-display', false, 'Two-column included/excluded items list'],
  ['ItineraryTimeline',   'data-display', true,  'Vertical expandable day-by-day itinerary timeline'],
  ['PriceTable',          'data-display', false, 'Duration vs price table with descriptions'],
  ['CancellationTable',   'data-display', false, 'Cancellation timeframe vs refund percentage table'],
  ['CookieTable',         'data-display', false, 'Cookie type, name, purpose, duration table'],
  ['StatsRow',            'data-display', false, 'Horizontal row of animated StatCards'],
  ['ComparisonTable',     'data-display', false, 'Side-by-side trip comparison table'],
  ['MapEmbed',            'data-display', true,  'Mapbox GL JS interactive map embed'],
  ['WeatherWidget',       'data-display', false, 'Temperature, season, best-time-to-visit display'],

  // layout (Container + Section already exist, skip)
  ['SectionWrapper',      'layout',       false, 'Section wrapper with consistent vertical spacing and bg props'],
  ['TwoColumnGrid',       'layout',       false, 'Responsive 2-column grid with configurable ratio'],
  ['ThreeColumnGrid',     'layout',       false, 'Responsive 3-column grid, collapses on mobile'],
  ['MasonryGrid',         'layout',       true,  'Variable-height masonry photo layout'],
  ['FilterBar',           'layout',       true,  'Horizontal sticky filter bar with dropdowns and pills'],
  ['FilterPill',          'layout',       true,  'Individual removable filter tag pill'],
  ['EmptyState',          'layout',       false, 'Empty state illustration + message + CTA'],
  ['PageTransition',      'layout',       true,  'Fade/slide page transition wrapper'],
  ['Divider',             'layout',       false, 'Horizontal decorative divider line or SVG wave'],

  // typography (SectionLabel + SectionHeading already exist, skip)
  ['HeadingPrimary',      'typography',   false, 'Primary page heading in Titillium Web, bold uppercase'],
  ['HeadingSecondary',    'typography',   false, 'Secondary heading, slightly smaller than primary'],
  ['BodyText',            'typography',   false, 'Body copy in Goudy Bookletter, readable leading'],
  ['SignatureAccent',     'typography',   true,  'Lavishly Yours cursive accent with optional rotation'],
  ['LogoText',            'typography',   false, 'BEYNDESH logotype text in Hubot Sans'],
  ['BlockQuote',          'typography',   false, 'Styled blockquote with left border and italic Goudy'],
  ['Highlight',           'typography',   false, 'Inline text with orange background highlight'],
  ['Caption',             'typography',   false, 'Small muted caption text for images and media'],
  ['LegalText',           'typography',   false, 'Small dense legal/disclaimer text'],

  // feedback
  ['Toast',               'feedback',     true,  'Auto-dismissing success/error/info notification'],
  ['Modal',               'feedback',     true,  'Center overlay modal with close button and scroll lock'],
  ['ConfirmationModal',   'feedback',     true,  'Confirm/Cancel action modal'],
  ['LoadingSpinner',      'feedback',     true,  'Orange animated loading spinner'],
  ['SkeletonLoader',      'feedback',     false, 'Gray placeholder skeleton for loading states'],
  ['ProgressBar',         'feedback',     true,  'Horizontal fill progress bar'],
  ['Tooltip',             'feedback',     true,  'Hover-triggered info bubble'],
  ['Popover',             'feedback',     true,  'Click-triggered info panel'],
  ['AlertBanner',         'feedback',     true,  'Dismissable top-of-page alert banner'],

  // interactive
  ['AccordionItem',       'interactive',  true,  'Single expandable Q&A item with animated open/close'],
  ['AccordionGroup',      'interactive',  true,  'Group of AccordionItems with single/multi-open mode'],
  ['TabGroup',            'interactive',  true,  'Horizontal tab interface with content panels'],
  ['TabItem',             'interactive',  true,  'Individual tab button with active state'],
  ['ShareButtons',        'interactive',  true,  'FB, X, WhatsApp, Copy Link share actions'],
  ['WishlistToggle',      'interactive',  true,  'Heart icon toggle for saving trips to wishlist'],
  ['PrintButton',         'interactive',  true,  'Triggers print-friendly layout'],
  ['DownloadPDFButton',   'interactive',  true,  'Generates and downloads trip itinerary PDF'],
  ['CountdownTimer',      'interactive',  true,  'Days/hours countdown to next trip departure'],
  ['CurrencyToggle',      'interactive',  true,  'BDT / USD / EUR currency switcher'],
  ['StickyBookingBar',    'interactive',  true,  'Fixed-on-scroll bar with price and Book Now CTA'],
  ['RelatedTrips',        'interactive',  false, 'Horizontal row of 3 related TripCards'],
  ['Pagination',          'interactive',  true,  'Numbered pages or Load More pagination'],

  // mobile
  ['MobileNavDrawer',     'mobile',       true,  'Full-screen nav drawer triggered by hamburger'],
  ['MobileFilterDrawer',  'mobile',       true,  'Bottom-sheet filter drawer with Apply button'],
  ['MobileBottomBar',     'mobile',       true,  'Fixed bottom bar: Book Now + WhatsApp + Share'],
  ['SwipeCarousel',       'mobile',       true,  'Touch-swipe carousel with dots indicator'],
  ['CollapsibleSection',  'mobile',       true,  'Tap-to-expand/collapse content section'],

  // seo
  ['SEOHead',             'seo',          false, 'Title, description, OG image, canonical, structured data meta'],
  ['StructuredData',      'seo',          false, 'JSON-LD for TravelAgency, TouristTrip, FAQPage, Review schemas'],
  ['SitemapPage',         'seo',          false, 'HTML sitemap with grouped links'],
  ['NotFoundPage',        'seo',          false, '"Lost in Bangladesh?" 404 page with search and home link'],
];

/** Components that already exist and should NOT be overwritten */
const SKIP = new Set([
  'navigation/Navbar',
  'navigation/MobileMenu',
  'navigation/Footer',
  'layout/Container',
  'layout/Section',
  'typography/SectionLabel',
  'typography/SectionHeading',
]);

function clientTemplate(name, description) {
  return `/**
 * @component ${name}
 * @description ${description}
 * @example
 * <${name} />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ${name}Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * ${name} — ${description}
 * TODO: Implement full component logic and styling.
 */
export default function ${name}({ className, children }: ${name}Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  );
}
`;
}

function serverTemplate(name, description) {
  return `/**
 * @component ${name}
 * @description ${description}
 * @example
 * <${name} />
 */

import { cn } from '@/lib/utils';

interface ${name}Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * ${name} — ${description}
 * TODO: Implement full component logic and styling.
 */
export default function ${name}({ className, children }: ${name}Props) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
`;
}

let created = 0;
let skipped = 0;

for (const [name, category, isClient, description] of components) {
  const key = `${category}/${name}`;
  const dir = resolve(COMPONENTS, category);
  const file = resolve(dir, `${name}.tsx`);

  if (SKIP.has(key)) {
    console.log(`  ⏭  Skip  ${key}.tsx  (already implemented)`);
    skipped++;
    continue;
  }

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  if (existsSync(file)) {
    console.log(`  ⏭  Skip  ${key}.tsx  (file exists)`);
    skipped++;
    continue;
  }

  const content = isClient
    ? clientTemplate(name, description)
    : serverTemplate(name, description);

  writeFileSync(file, content, 'utf8');
  console.log(`  ✅ Created ${key}.tsx`);
  created++;
}

console.log(`\n✅ Done — ${created} files created, ${skipped} skipped.`);

// ─── Generate barrel index files per category ─────────────────────────────────
const categories = {};
for (const [name, category] of components) {
  if (!categories[category]) categories[category] = [];
  categories[category].push(name);
}

for (const [category, names] of Object.entries(categories)) {
  const dir = resolve(COMPONENTS, category);
  const indexFile = resolve(dir, 'index.ts');
  if (existsSync(indexFile)) {
    console.log(`  ⏭  Skip  ${category}/index.ts  (already exists)`);
    continue;
  }
  const lines = names.map(n => `export { default as ${n} } from './${n}';`).join('\n');
  writeFileSync(indexFile, lines + '\n', 'utf8');
  console.log(`  📦 Barrel ${category}/index.ts`);
}
