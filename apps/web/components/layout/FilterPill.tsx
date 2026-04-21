/**
 * @component FilterPill
 * @description Individual removable filter tag pill
 * @example
 * <FilterPill />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FilterPillProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FilterPill — Individual removable filter tag pill
 * TODO: Implement full component logic and styling.
 */
export default function FilterPill({ className, children }: FilterPillProps) {
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
