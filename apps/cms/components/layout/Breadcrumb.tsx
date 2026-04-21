'use client';

/**
 * @component CMSBreadcrumb
 * @description Breadcrumb for CMS inner pages
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CMSBreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement CMSBreadcrumb
export default function CMSBreadcrumb({ className, children }: CMSBreadcrumbProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
