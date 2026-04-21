'use client';

/**
 * @component ItineraryBuilder
 * @description Drag-reorderable day-by-day itinerary builder
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ItineraryBuilderProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement ItineraryBuilder
export default function ItineraryBuilder({ className, children }: ItineraryBuilderProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
