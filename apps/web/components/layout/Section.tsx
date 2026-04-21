import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  bgColor?: "paper" | "white" | "dark";
  className?: string;
  id?: string;
}

export function Section({ children, bgColor = "white", className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-section-sm sm:py-section lg:py-section-lg",
        {
          "bg-white text-bynd-black": bgColor === "white",
          "bg-bynd-paper text-bynd-black": bgColor === "paper",
          "bg-bynd-black text-white": bgColor === "dark",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
