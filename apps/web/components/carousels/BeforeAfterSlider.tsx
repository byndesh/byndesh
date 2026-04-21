/**
 * @component BeforeAfterSlider
 * @description Drag-handle seasonal comparison image slider
 * @example
 * <BeforeAfterSlider />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * BeforeAfterSlider — Drag-handle seasonal comparison image slider
 * TODO: Implement full component logic and styling.
 */
export default function BeforeAfterSlider({ className, children }: BeforeAfterSliderProps) {
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
