import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        {
          "max-w-4xl": size === "narrow",
          "max-w-7xl": size === "default", // ~1280px
          "max-w-[1600px]": size === "wide",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
