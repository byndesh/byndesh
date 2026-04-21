/**
 * @component PhoneInput
 * @description Country code dropdown + phone number input
 * @example
 * <PhoneInput />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * PhoneInput — Country code dropdown + phone number input
 * TODO: Implement full component logic and styling.
 */
export default function PhoneInput({ className, children }: PhoneInputProps) {
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
