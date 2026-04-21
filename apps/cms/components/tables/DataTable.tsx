'use client';

/**
 * @component DataTable
 * @description Generic sortable, filterable data table
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface DataTableProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement DataTable
export default function DataTable({ className, children }: DataTableProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
