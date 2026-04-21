/**
 * @component BrandWordmark
 * @description Animated BEYNDESH logotype in Hubot Sans.
 *   Letters animate in staggered on mount for the hero/splash screen.
 * @param {'black'|'white'} [props.color] - Text color
 * @param {'sm'|'md'|'lg'|'xl'} [props.size] - Rendering scale
 * @example
 * <BrandWordmark color="white" size="xl" />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BrandWordmarkProps {
  color?: 'black' | 'white' | 'orange';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

const sizeMap = {
  sm: 'text-2xl tracking-tight',
  md: 'text-4xl tracking-tight',
  lg: 'text-6xl tracking-tighter',
  xl: 'text-[clamp(3.5rem,10vw,8rem)] tracking-tighter',
};

const colorMap = {
  black:  'text-bynd-black',
  white:  'text-white',
  orange: 'text-bynd-orange',
};

const LETTERS = ['B','E','Y','N','D','E','S','H'];

export default function BrandWordmark({
  color = 'black',
  size = 'md',
  animated = true,
  className,
}: BrandWordmarkProps) {
  if (!animated) {
    return (
      <span
        className={cn('font-logo font-black uppercase block', sizeMap[size], colorMap[color], className)}
        aria-label="Beyndesh"
      >
        BEYNDESH
      </span>
    );
  }

  return (
    <motion.span
      className={cn('font-logo font-black uppercase flex', sizeMap[size], colorMap[color], className)}
      aria-label="Beyndesh"
    >
      {LETTERS.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
