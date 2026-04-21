/**
 * @component HeadingSecondary
 * @description Secondary section heading — slightly smaller scale than HeadingPrimary.
 * @example
 * <HeadingSecondary>Popular Destinations</HeadingSecondary>
 */

import { cn } from '@/lib/utils';

interface HeadingSecondaryProps {
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4';
  size?: 'heading-2' | 'heading-3';
  color?: 'black' | 'white' | 'orange';
  className?: string;
}

const colorMap = {
  black:  'text-bynd-black',
  white:  'text-white',
  orange: 'text-bynd-orange',
};

export default function HeadingSecondary({
  children,
  as: Tag = 'h3',
  size = 'heading-2',
  color = 'black',
  className,
}: HeadingSecondaryProps) {
  return (
    <Tag className={cn('font-heading font-bold uppercase', `text-${size}`, colorMap[color], className)}>
      {children}
    </Tag>
  );
}
