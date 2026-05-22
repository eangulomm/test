"use client";

import { cn } from "@/lib/utils";

interface QuizAnswerCardProps {
  label:      string;
  selected?:  boolean;
  onClick:    () => void;
  disabled?:  boolean;
}

/**
 * QuizAnswerCard
 * Individual answer option button with hover glow and selection state.
 * Matches the pill-button style from the mockup quiz screen.
 */
export function QuizAnswerCard({ label, selected = false, onClick, disabled = false }: QuizAnswerCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "quiz-answer-card w-full text-left text-white font-body text-sm md:text-base font-medium",
        "transition-all duration-200",
        selected && "quiz-answer-card selected",
        disabled && "opacity-60 cursor-not-allowed",
      )}
      aria-pressed={selected}
    >
      <span className="block text-center leading-snug">{label}</span>
    </button>
  );
}
