/**
 * @component TextInput
 * @description Labelled text input with error state and underline style
 * @example
 * <TextInput />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextInputProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * TextInput — Labelled text input with error state and underline style
 * TODO: Implement full component logic and styling.
 */
export default function TextInput({ className, children }: TextInputProps) {
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
