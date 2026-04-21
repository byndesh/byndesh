/**
 * @component StickyBookingBar
 * @description Fixed-on-scroll bar with price and Book Now CTA
 * @example
 * <StickyBookingBar />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StickyBookingBarProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * StickyBookingBar — Fixed-on-scroll bar with price and Book Now CTA
 * TODO: Implement full component logic and styling.
 */
export default function StickyBookingBar({ className, children }: StickyBookingBarProps) {
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
