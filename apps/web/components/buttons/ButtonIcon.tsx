/**
 * @component ButtonIcon
 * @description Circle/diamond icon-only button
 * @example
 * <ButtonIcon />
 */

import { cn } from '@/lib/utils';

interface ButtonIconProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * ButtonIcon — Circle/diamond icon-only button
 * TODO: Implement full component logic and styling.
 */
export default function ButtonIcon({ className, children }: ButtonIconProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
