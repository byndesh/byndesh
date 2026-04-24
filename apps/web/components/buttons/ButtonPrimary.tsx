import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonPrimaryProps {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  pill?: boolean;
  'aria-label'?: string;
}

const sizeMap = {
  sm: 'px-8 py-3 text-[10px]',
  md: 'px-12 py-4 text-[10px]',
  lg: 'px-16 py-5 text-[11px]',
};

export default function ButtonPrimary({
  label,
  href,
  icon,
  onClick,
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
  pill = true, // Default to pill shape for "Bynd BD" premium brand
  'aria-label': ariaLabel,
}: ButtonPrimaryProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-3',
    pill ? 'rounded-full' : 'rounded-sm', 
    'font-heading font-black uppercase tracking-[0.25em]',
    'bg-ember text-white shadow-premium',
    'transition-all duration-300 ease-out',
    'hover:bg-ember-hover hover:shadow-orange-500/30 hover:scale-[1.02]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bynd-flame focus-visible:ring-offset-2',
    'active:scale-95',
    'disabled:opacity-50 disabled:pointer-events-none',
    sizeMap[size],
    fullWidth && 'w-full',
    className
  );

  const displayText = label.endsWith('→') ? label : `${label} →`;

  if (href) {
    return (
      <Link href={href} className={base} aria-label={ariaLabel ?? label}>
        <span>{displayText}</span>
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
