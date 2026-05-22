"use client";

import { useState } from "react";
import { ANNOUNCEMENT_TEXT } from "@/data/constants";

interface AnnouncementBarProps {
  text?: string;
}

/**
 * AnnouncementBar
 * Sticky top strip with scrolling promotional copy.
 * Replace `text` prop content in /src/data/constants.ts
 */
export function AnnouncementBar({ text = ANNOUNCEMENT_TEXT }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar relative">
      {/* Marquee container — duplicate text for seamless loop */}
      <div className="flex overflow-hidden">
        <div
          className="flex shrink-0 gap-0 whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite" }}
          aria-live="polite"
        >
          {/* Duplicate 4× for smooth infinite scroll */}
          {[...Array(4)].map((_, i) => (
            <span key={i} className="px-8 text-[13px] font-medium tracking-wide">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A0040]/60 hover:text-[#1A0040] transition-colors text-lg leading-none"
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  );
}
