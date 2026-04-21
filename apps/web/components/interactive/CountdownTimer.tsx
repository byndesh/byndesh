/**
 * @component CountdownTimer
 * @description Days/hours countdown to next trip departure
 * @example
 * <CountdownTimer />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * CountdownTimer — Days/hours countdown to next trip departure
 * TODO: Implement full component logic and styling.
 */
export default function CountdownTimer({ className, children }: CountdownTimerProps) {
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
