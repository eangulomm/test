"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  src:          string;
  alt:          string;
  size:         number;
  top?:         string;
  left?:        string;
  right?:       string;
  bottom?:      string;
  animDuration?: string;
  animDelay?:   string;
  rotate?:      number;
  spin?:        boolean;
  className?:   string;
}

/**
 * FloatingElement
 * Decorative asset that floats with a gentle CSS animation.
 * Used in Hero for vinyls, CDs, stickers, magazines.
 *
 * REPLACE: Pass real asset src paths from /assets/images/decorative/
 */
export function FloatingElement({
  src,
  alt,
  size,
  top,
  left,
  right,
  bottom,
  animDuration = "7s",
  animDelay    = "0s",
  rotate       = 0,
  spin         = false,
  className,
}: FloatingElementProps) {
  return (
    <div
      className={cn("absolute pointer-events-none select-none", className)}
      style={{
        top,
        left,
        right,
        bottom,
        width:  size,
        height: size,
        animation: spin
          ? `vinylSpin ${animDuration} linear infinite`
          : `float ${animDuration} ease-in-out infinite`,
        animationDelay: animDelay,
        transform: `rotate(${rotate}deg)`,
        willChange: "transform",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain drop-shadow-2xl"
        sizes={`${size}px`}
      />
    </div>
  );
}
