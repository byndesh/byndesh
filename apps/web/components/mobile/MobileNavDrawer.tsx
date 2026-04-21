/**
 * @component MobileNavDrawer
 * @description Full-screen nav drawer triggered by hamburger
 * @example
 * <MobileNavDrawer />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileNavDrawerProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * MobileNavDrawer — Full-screen nav drawer triggered by hamburger
 * TODO: Implement full component logic and styling.
 */
export default function MobileNavDrawer({ className, children }: MobileNavDrawerProps) {
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
