/**
 * @component PhotoCard
 * @description Gallery photo with location tag, caption, lightbox trigger
 * @example
 * <PhotoCard />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * PhotoCard — Gallery photo with location tag, caption, lightbox trigger
 * TODO: Implement full component logic and styling.
 */
export default function PhotoCard({ className, children }: PhotoCardProps) {
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
