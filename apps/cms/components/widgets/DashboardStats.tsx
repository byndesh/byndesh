'use client';

/**
 * @component DashboardStats
 * @description Grid of key CMS stats (trips, bookings, revenue)
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface DashboardStatsProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement DashboardStats
export default function DashboardStats({ className, children }: DashboardStatsProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
