/**
 * @component LoadingSpinner
 * @description Orange animated loading spinner
 * @example
 * <LoadingSpinner />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * LoadingSpinner — Orange animated loading spinner
 * TODO: Implement full component logic and styling.
 */
export default function LoadingSpinner({ className, children }: LoadingSpinnerProps) {
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
