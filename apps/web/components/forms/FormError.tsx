/**
 * @component FormError
 * @description Error banner with field-level error messages
 * @example
 * <FormError />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FormErrorProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FormError — Error banner with field-level error messages
 * TODO: Implement full component logic and styling.
 */
export default function FormError({ className, children }: FormErrorProps) {
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
