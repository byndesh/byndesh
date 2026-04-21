/**
 * @component FormSuccess
 * @description Animated checkmark + confirmation message
 * @example
 * <FormSuccess />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FormSuccessProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FormSuccess — Animated checkmark + confirmation message
 * TODO: Implement full component logic and styling.
 */
export default function FormSuccess({ className, children }: FormSuccessProps) {
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
