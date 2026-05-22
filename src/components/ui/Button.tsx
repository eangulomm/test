import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?:    "sm" | "md" | "lg";
  fullWidth?: boolean;
}

/**
 * Button
 * Reusable CTA button with Playland visual identity.
 * Variants: primary (white fill), outline (white border), ghost (transparent).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth = false, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base
          "inline-flex items-center justify-center font-heading tracking-widest uppercase transition-all duration-200 cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 disabled:opacity-50 disabled:pointer-events-none",
          // Size
          size === "sm" && "text-xs px-5 py-2.5 rounded-lg",
          size === "md" && "text-sm px-7 py-3.5 rounded-xl",
          size === "lg" && "text-base px-10 py-4 rounded-xl",
          // Variant
          variant === "primary" && [
            "bg-white text-[#0A0020]",
            "hover:bg-[#FFF8E7] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
            "active:translate-y-0",
          ],
          variant === "outline" && [
            "bg-transparent text-white border-2 border-white",
            "hover:bg-white/10 hover:border-purple-400 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
            "active:bg-white/5",
          ],
          variant === "ghost" && [
            "bg-transparent text-white/70",
            "hover:text-white hover:bg-white/5",
          ],
          // Width
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
