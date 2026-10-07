import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

export default function SectionLabel({ children, light = false, className }: SectionLabelProps) {
  return (
    <p className={cn("text-sm font-medium", light ? "text-gold-light" : "text-gold-dark", className)}>
      {children}
    </p>
  );
}
