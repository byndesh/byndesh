/**
 * @component MasonryGrid
 * @description Variable-height masonry photo layout
 * @example
 * <MasonryGrid />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MasonryGridProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * MasonryGrid — Variable-height masonry photo layout
 * TODO: Implement full component logic and styling.
 */
export default function MasonryGrid({ className, children }: MasonryGridProps) {
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
