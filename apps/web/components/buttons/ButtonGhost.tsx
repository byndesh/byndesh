/**
 * @component ButtonGhost
 * @description Text-only ghost button. Underline animates in on hover.
 * @example
 * <ButtonGhost href="/about" label="LEARN MORE" />
 */

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonGhostProps {
  label: string;
  href?: string;
  onClick?: () => void;
  color?: 'orange' | 'white' | 'black';
  size?: 'sm' | 'md';
  className?: string;
  'aria-label'?: string;
}

const colorMap = {
  orange: 'text-bynd-orange after:bg-bynd-orange',
  white:  'text-white after:bg-white',
  black:  'text-bynd-black after:bg-bynd-black',
};

export default function ButtonGhost({
  label,
  href,
  onClick,
  color = 'black',
  size = 'md',
  className,
  'aria-label': ariaLabel,
}: ButtonGhostProps) {
  const base = cn(
    'relative inline-flex items-center gap-1.5',
    'font-heading font-bold uppercase tracking-[0.1em]',
    size === 'sm' ? 'text-xs' : 'text-xs',
    'after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0',
    'after:transition-all after:duration-300',
    'hover:after:w-full',
    'focus-visible:outline-none focus-visible:underline',
    'transition-colors duration-200',
    colorMap[color],
    className
  );

  if (href) {
    return (
      <Link href={href} className={base} aria-label={ariaLabel ?? label}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel ?? label} className={base}>
      {label}
    </button>
  );
}
