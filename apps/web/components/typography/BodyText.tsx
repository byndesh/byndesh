/**
 * @component BodyText
 * @description Body copy in Goudy Bookletter — the elegant serif for long-form reading.
 *   Never use this for buttons, headings, or nav. Max-width prose for readability.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'lg'|'base'|'sm'} [props.size] - Token size mapping
 * @param {string} [props.className]
 * @example
 * <BodyText size="lg">Bangladesh's rivers run deep...</BodyText>
 */

import { cn } from '@/lib/utils';

interface BodyTextProps {
  children: React.ReactNode;
  size?: 'lg' | 'base' | 'sm';
  color?: 'default' | 'muted' | 'white';
  as?: 'p' | 'div' | 'span';
  maxWidth?: boolean;
  className?: string;
}

const sizeMap = {
  lg:   'font-body text-lg',
  base: 'text-body',
  sm:   'font-body text-sm',
};

const colorMap = {
  default: 'text-bynd-black',
  muted:   'text-bynd-black-300',
  white:   'text-white/90',
};

export default function BodyText({
  children,
  size = 'base',
  color = 'default',
  as: Tag = 'p',
  maxWidth = false,
  className,
}: BodyTextProps) {
  return (
    <Tag
      className={cn(
        'font-body leading-relaxed',
        sizeMap[size],
        colorMap[color],
        maxWidth && 'max-w-prose',
        className
      )}
    >
      {children}
    </Tag>
  );
}
