import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("font-heading uppercase text-label tracking-[0.2em] flex items-center", className)}>
      <span className="text-bynd-orange mr-4">—</span>
      {children}
    </div>
  );
}
