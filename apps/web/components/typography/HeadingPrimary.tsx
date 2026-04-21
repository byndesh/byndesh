/**
 * @component HeadingPrimary
 * @description Primary page/section heading in Titillium Web — bold, uppercase,
 *   responsive from text-4xl to text-6xl. The main typographic workhorse.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Heading text
 * @param {'h1'|'h2'|'h3'} [props.as] - HTML heading level (default h2)
 * @param {'display-1'|'display-2'|'heading-1'|'heading-2'} [props.size] - Token size
 * @param {'black'|'white'|'orange'} [props.color] - Text color
 * @param {string} [props.className]
 * @example
 * <HeadingPrimary as="h1" size="display-1">ADVENTURE AWAITS</HeadingPrimary>
 */

import { cn } from '@/lib/utils';

interface HeadingPrimaryProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'display-1' | 'display-2' | 'heading-1' | 'heading-2';
  color?: 'black' | 'white' | 'orange';
  className?: string;
}

const colorMap = {
  black:  'text-bynd-black',
  white:  'text-white',
  orange: 'text-bynd-orange',
};

export default function HeadingPrimary({
  children,
  as: Tag = 'h2',
  size = 'heading-1',
  color = 'black',
  className,
}: HeadingPrimaryProps) {
  return (
    <Tag
      className={cn(
        'font-heading font-black uppercase',
        `text-${size}`,
        colorMap[color],
        className
      )}
    >
      {children}
    </Tag>
  );
}
