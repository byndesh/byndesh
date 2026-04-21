/**
 * @component Modal
 * @description Center overlay modal with close button and scroll lock
 * @example
 * <Modal />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Modal — Center overlay modal with close button and scroll lock
 * TODO: Implement full component logic and styling.
 */
export default function Modal({ className, children }: ModalProps) {
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
