'use client';
import { useEffect, useState } from 'react';

/**
 * useDebounce — delays updating a value until after a pause in changes.
 * Used in search inputs to prevent firing on every keystroke.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
