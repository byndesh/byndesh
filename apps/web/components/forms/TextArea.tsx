/**
 * @component TextArea
 * @description Labelled textarea with character counter
 * @example
 * <TextArea />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextAreaProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * TextArea — Labelled textarea with character counter
 * TODO: Implement full component logic and styling.
 */
export default function TextArea({ className, children }: TextAreaProps) {
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
