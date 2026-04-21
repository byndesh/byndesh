/**
 * @component PageTransition
 * @description Fade/slide page transition wrapper
 * @example
 * <PageTransition />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * PageTransition — Fade/slide page transition wrapper
 * TODO: Implement full component logic and styling.
 */
export default function PageTransition({ className, children }: PageTransitionProps) {
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
