/**
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
