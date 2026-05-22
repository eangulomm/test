import { cn } from "@/lib/utils";

type BadgeVariant = "limited" | "autographed" | "price" | "tag";

interface BadgeProps {
  variant:   BadgeVariant;
  children:  React.ReactNode;
  className?: string;
  rotate?:   boolean;
}

/**
 * Badge
 * Pill-shaped label for product tags (Limited Edition, Autographed, Price).
 * Styled to match the retro-sticker look from the mockup result screen.
 */
export function Badge({ variant, children, className, rotate = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "badge",
        variant === "limited"     && "badge-limited",
        variant === "autographed" && "badge-autographed",
        variant === "price"       && "badge-price text-base font-mono",
        variant === "tag"         && "bg-white/10 text-white border border-white/20",
        rotate && "-rotate-3",
        className,
      )}
    >
      {children}
    </span>
  );
}
