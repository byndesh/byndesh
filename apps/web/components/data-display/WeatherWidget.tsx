/**
 * @component WeatherWidget
 * @description Temperature, season, best-time-to-visit display
 * @example
 * <WeatherWidget />
 */

import { cn } from '@/lib/utils';

interface WeatherWidgetProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * WeatherWidget — Temperature, season, best-time-to-visit display
 * TODO: Implement full component logic and styling.
 */
export default function WeatherWidget({ className, children }: WeatherWidgetProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
