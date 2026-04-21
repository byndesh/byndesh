/**
 * @component MobileBottomBar
 * @description Fixed bottom bar: Book Now + WhatsApp + Share
 * @example
 * <MobileBottomBar />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileBottomBarProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * MobileBottomBar — Fixed bottom bar: Book Now + WhatsApp + Share
 * TODO: Implement full component logic and styling.
 */
export default function MobileBottomBar({ className, children }: MobileBottomBarProps) {
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
