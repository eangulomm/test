import { cn } from "@/lib/utils";

interface GlowBlobProps {
  color?:     "purple" | "magenta" | "pink";
  size?:      number; // px
  top?:       string;
  left?:      string;
  right?:     string;
  bottom?:    string;
  opacity?:   number;
  className?: string;
}

const colorMap = {
  purple:  "rgba(168,85,247,0.35)",
  magenta: "rgba(192,38,211,0.28)",
  pink:    "rgba(219,39,119,0.25)",
};

/**
 * GlowBlob
 * Ambient radial glow blob for atmospheric depth in sections.
 * Position with top/left/right/bottom strings (e.g. "20%", "100px").
 */
export function GlowBlob({
  color   = "purple",
  size    = 400,
  top,
  left,
  right,
  bottom,
  opacity = 1,
  className,
}: GlowBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute pointer-events-none rounded-full glow-blob", className)}
      style={{
        width:      size,
        height:     size,
        top,
        left,
        right,
        bottom,
        opacity,
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
        filter:     "blur(60px)",
        transform:  "translate(-50%, -50%)",
      }}
    />
  );
}
