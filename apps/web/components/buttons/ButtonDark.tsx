/**
 * @component ButtonDark
 * @description Black pill CTA button — used on paper/orange backgrounds.
 * @param {Object} props
 * @param {string} [props.href] - If provided, renders a Next.js Link
 * @param {string} props.label - Button text
 * @param {React.ReactNode} [props.icon] - Optional icon (right side)
 * @param {Function} [props.onClick] - Click handler
 * @param {'sm'|'md'|'lg'} [props.size] - Size variant
 * @param {boolean} [props.fullWidth] - Stretch to full container width
 * @example
 * <ButtonDark href="/about" label="OUR STORY" />
 */

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonDarkProps {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
}

const sizeMap = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-xs',
  lg: 'px-9 py-4 text-sm',
};

export default function ButtonDark({
  label,
  href,
  icon,
  onClick,
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
  'aria-label': ariaLabel,
}: ButtonDarkProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2.5',
    'rounded-full font-heading font-bold uppercase tracking-[0.1em]',
    'bg-bynd-black text-white',
    'transition-all duration-200 ease-smooth',
    'hover:bg-bynd-orange hover:scale-[1.03]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bynd-black focus-visible:ring-offset-2',
    'active:scale-[0.98]',
    'disabled:opacity-50 disabled:pointer-events-none',
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
