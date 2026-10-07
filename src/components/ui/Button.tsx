import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "gold" | "outline" | "outline-light" | "link";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-warmwhite hover:bg-brand-deep px-6 py-3",
  gold: "bg-gold text-brand-dark hover:bg-gold-light px-6 py-3",
  outline: "border border-line-strong bg-sand text-brand hover:border-brand hover:bg-ivory px-6 py-3",
  "outline-light":
    "border border-slate text-warmwhite hover:border-warmwhite hover:bg-sand hover:text-brand px-6 py-3",
  link: "text-brand underline-offset-4 hover:underline decoration-gold",
};

export default function Button({
  href,
  variant = "primary",
  external = false,
  showArrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors duration-200",
    variantClasses[variant],
    className
  );

  const Arrow = external ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <Arrow
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
