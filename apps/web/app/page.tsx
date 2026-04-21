/**
 * Root page — redirects to (marketing)/page.tsx which is the actual homepage.
 * The (marketing) route group provides the Navbar + Footer layout.
 *
 * Strategy: ISR — revalidate every 1 hour (inherits from marketing Home).
 */
export { default } from './(marketing)/page';
export { revalidate } from './(marketing)/page';
