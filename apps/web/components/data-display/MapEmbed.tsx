/**
 * @component MapEmbed
 * @description Mapbox GL JS interactive map embed
 * @example
 * <MapEmbed />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MapEmbedProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * MapEmbed — Mapbox GL JS interactive map embed
 * TODO: Implement full component logic and styling.
 */
export default function MapEmbed({ className, children }: MapEmbedProps) {
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
