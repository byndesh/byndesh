/**
 * @component NewsletterForm
 * @description Inline email + submit newsletter subscription form
 * @example
 * <NewsletterForm />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NewsletterFormProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NewsletterForm — Inline email + submit newsletter subscription form
 * TODO: Implement full component logic and styling.
 */
export default function NewsletterForm({ className, children }: NewsletterFormProps) {
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
