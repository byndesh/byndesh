/**
 * @component StatCard
 * @description Animated counter card: number + label, triggered on view
 * @example
 * <StatCard />
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * StatCard — Animated counter card: number + label, triggered on view
 * TODO: Implement full component logic and styling.
 */
export default function StatCard({ className, children }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  );
}
