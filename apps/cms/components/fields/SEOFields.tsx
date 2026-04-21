'use client';

/**
 * @component SEOFields
 * @description SEO title, description, OG image fields
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SEOFieldsProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement SEOFields
export default function SEOFields({ className, children }: SEOFieldsProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
