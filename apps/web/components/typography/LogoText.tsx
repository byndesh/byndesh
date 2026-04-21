/**
 * @component LogoText
 * @description BEYNDESH logotype in Hubot Sans — ultra-tight tracking.
 *   Used only for logo rendering, not for general branding text.
 * @example
 * <LogoText />
 */

import { cn } from '@/lib/utils';

interface LogoTextProps {
  color?: 'black' | 'white' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colorMap = {
  black:  'text-bynd-black',
  white:  'text-white',
  orange: 'text-bynd-orange',
};

const sizeMap = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
};

export default function LogoText({ color = 'black', size = 'md', className }: LogoTextProps) {
  return (
    <span
      className={cn(
        'font-logo font-black uppercase tracking-tight',
        colorMap[color],
        sizeMap[size],
        className
      )}
      aria-label="Beyndesh"
    >
      BEYNDESH
    </span>
  );
}
