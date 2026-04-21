/**
 * @component SignatureAccent
 * @description Lavishly Yours cursive flourish — used max 2–3 times per page.
 *   Adds the "handwritten luxury" feel to section dividers and headings.
 * @param {Object} props
 * @param {string} props.children - The accent text (e.g. "Beyndesh", "Beyond the Land")
 * @param {'orange'|'black'|'white'} [props.color]
 * @param {number} [props.rotate] - CSS rotate degrees (-6 to 6)
 * @param {'sm'|'md'|'lg'} [props.size]
 * @example
 * <SignatureAccent color="orange" rotate={-3}>Beyond the Land</SignatureAccent>
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SignatureAccentProps {
  children: string;
  color?: 'orange' | 'black' | 'white';
  rotate?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colorMap = {
  orange: 'text-bynd-orange',
  black:  'text-bynd-black',
  white:  'text-white',
};

const sizeMap = {
  sm: 'text-[1.5rem]',
  md: 'text-signature',
  lg: 'text-[3.5rem]',
};

export default function SignatureAccent({
  children,
  color = 'orange',
  rotate = 0,
  size = 'md',
  className,
}: SignatureAccentProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
      className={cn(
        'font-signature block leading-none select-none',
        colorMap[color],
        sizeMap[size],
        className
      )}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </motion.span>
  );
}
