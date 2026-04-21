/**
 * @component FormStepper
 * @description Multi-step form progress indicator
 * @example
 * <FormStepper />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FormStepperProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FormStepper — Multi-step form progress indicator
 * TODO: Implement full component logic and styling.
 */
export default function FormStepper({ className, children }: FormStepperProps) {
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
