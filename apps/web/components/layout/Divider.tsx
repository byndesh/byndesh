/**
 * @component Divider
 * @description Horizontal decorative divider. Can be a simple line or
 *   an SVG wave. Used between sections for visual breathing room.
 * @param {'line'|'wave'|'diamond'} [props.variant]
 * @param {'orange'|'paper'|'black'|'white'} [props.color]
 * @example
 * <Divider variant="diamond" color="orange" />
 */

import { cn } from '@/lib/utils';

interface DividerProps {
  variant?: 'line' | 'diamond' | 'dots';
  color?: 'orange' | 'paper' | 'black' | 'white' | 'muted';
  className?: string;
}

const colorMap = {
  orange: 'text-bynd-orange fill-bynd-orange',
  paper:  'text-bynd-paper fill-bynd-paper',
  black:  'text-bynd-black fill-bynd-black',
  white:  'text-white fill-white',
  muted:  'text-bynd-black-100 fill-bynd-black-100',
};

const borderColorMap = {
  orange: 'border-bynd-orange',
  paper:  'border-bynd-paper',
  black:  'border-bynd-black',
  white:  'border-white',
  muted:  'border-bynd-black-100',
};

export default function Divider({ variant = 'line', color = 'muted', className }: DividerProps) {
  if (variant === 'diamond') {
    return (
      <div className={cn('flex items-center gap-4', className)} aria-hidden="true">
        <div className={cn('h-px flex-1', borderColorMap[color], 'border-t')} />
        <div className={cn('h-2.5 w-2.5 rotate-45', colorMap[color].includes('fill') ? '' : '', 'bg-current', colorMap[color].split(' ')[0].replace('text-', 'bg-'))} />
        <div className={cn('h-px flex-1', borderColorMap[color], 'border-t')} />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex items-center justify-center gap-2', className)} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn('rounded-full', i === 1 ? 'h-2 w-2' : 'h-1.5 w-1.5', colorMap[color].split(' ')[0].replace('text-', 'bg-'))}
          />
        ))}
      </div>
    );
  }

  // Default: line
  return (
    <hr
      className={cn('border-t', borderColorMap[color], className)}
      aria-hidden="true"
    />
  );
}
