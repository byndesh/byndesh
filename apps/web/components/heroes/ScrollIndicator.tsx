/**
 * @component ScrollIndicator
 * @description Animated bouncing chevron that cues users to scroll.
 *   Respects prefers-reduced-motion — stops bouncing if motion is reduced.
 * @example
 * <ScrollIndicator />
 */
'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  color?: 'white' | 'orange';
  className?: string;
}

export default function ScrollIndicator({ color = 'white', className }: ScrollIndicatorProps) {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className={cn('flex flex-col items-center gap-1', className)}
      aria-hidden="true"
    >
      <span className={cn('text-xs font-heading uppercase tracking-[0.2em]', color === 'white' ? 'text-white/70' : 'text-bynd-orange')}>
        Scroll
      </span>
      <ChevronDown
        className={cn('w-5 h-5', color === 'white' ? 'text-white/70' : 'text-bynd-orange')}
        strokeWidth={1.5}
      />
    </motion.div>
  );
}
