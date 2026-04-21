/**
 * @component SkipToContent
 * @description Accessibility skip link — visually hidden until focused.
 *   Must be the FIRST child of <body>. Jumps to #main-content.
 * @example
 * <SkipToContent />  — place before <Navbar /> in root layout
 */

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-full focus:bg-bynd-orange focus:px-6 focus:py-3 focus:font-heading focus:font-bold focus:uppercase focus:tracking-[0.1em] focus:text-xs focus:text-white focus:shadow-btn focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
