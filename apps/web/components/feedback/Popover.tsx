/**
 * @component Popover
 * @description Click-triggered info panel
 * @example
 * <Popover />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PopoverProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Popover — Click-triggered info panel
 * TODO: Implement full component logic and styling.
 */
export default function Popover({ className, children }: PopoverProps) {
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
