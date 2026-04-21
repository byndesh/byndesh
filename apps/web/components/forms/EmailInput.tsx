/**
 * @component EmailInput
 * @description Email input extending TextInput with email validation
 * @example
 * <EmailInput />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EmailInputProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * EmailInput — Email input extending TextInput with email validation
 * TODO: Implement full component logic and styling.
 */
export default function EmailInput({ className, children }: EmailInputProps) {
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
