/**
 * @component ButtonOutline
 * @description Transparent bordered button. Fills with color on hover.
 * @param {Object} props
 * @param {string} [props.href] - If provided, renders a Next.js Link
 * @param {string} props.label - Button text
 * @param {'orange'|'white'|'black'} [props.color] - Border/text/hover color
 * @param {'sm'|'md'|'lg'} [props.size] - Size variant
 * @example
 * <ButtonOutline href="/trips" label="EXPLORE TRIPS" color="orange" />
 */

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonOutlineProps {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  color?: 'orange' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
}

const colorMap = {
  orange: 'border-bynd-orange text-bynd-orange hover:bg-bynd-orange hover:text-white',
  white:  'border-white text-white hover:bg-white hover:text-bynd-black',
  black:  'border-bynd-black text-bynd-black hover:bg-bynd-black hover:text-white',
};

const sizeMap = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-xs',
  lg: 'px-9 py-4 text-sm',
};

export default function ButtonOutline({
  label,
  href,
  icon,
  onClick,
  color = 'orange',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
  'aria-label': ariaLabel,
}: ButtonOutlineProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2.5',
    'rounded-full border-2 font-heading font-bold uppercase tracking-[0.1em]',
    'transition-all duration-200 ease-smooth',
    'hover:scale-[1.03] active:scale-[0.98]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    colorMap[color],
    sizeMap[size],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <Link href={href} className={base} aria-label={ariaLabel ?? label}>
        <span>{label}</span>
        {icon && <span className="flex-shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
      className={base}
    >
      <span>{label}</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}
