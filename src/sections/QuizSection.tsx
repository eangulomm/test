"use client";

import { useState } from "react";
import { ProgressBar }    from "@/components/ui/ProgressBar";
import { QuizAnswerCard } from "@/components/quiz/QuizAnswerCard";
import { GlowBlob }       from "@/components/animations/GlowBlob";
import { type QuizQuestion } from "@/data/constants";

interface QuizSectionProps {
  question:    QuizQuestion;
  currentStep: number;
  totalSteps:  number;
  progress:    number;
  onAnswer:    (index: number) => void;
}

/**
 * QuizSection
 * Rendered when quiz state === "active".
 * Shows the progress bar, question text, and 2×2 answer grid.
 * Matches the dark-purple gradient card from the mockup.
 */
export function QuizSection({
  question,
  currentStep,
  totalSteps,
  progress,
  onAnswer,
}: QuizSectionProps) {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelect(i: number) {
    if (selected !== null) return;
    setSelected(i);
    // Short delay so user sees selection flash before advancing
    setTimeout(() => {
      onAnswer(i);
      setSelected(null);
    }, 300);
  }

  return (
    <section
      id="quiz"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4"
      style={{ background: "linear-gradient(135deg, #2D0060 0%, #6B21A8 50%, #C026D3 100%)" }}
    >
      {/* Ambient glows */}
      <GlowBlob color="magenta" size={500} top="20%" left="80%" opacity={0.4} />
      <GlowBlob color="purple"  size={400} top="70%" left="10%" opacity={0.3} />

      <div className="relative z-10 w-full max-w-2xl mx-auto">

        {/* Progress bar */}
        <div className="mb-8">
          <ProgressBar value={progress} />
          <p className="text-white/40 text-xs text-right mt-1.5 font-mono">
            {currentStep + 1} / {totalSteps}
          </p>
        </div>

        {/* Question card */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background:    "rgba(59,31,110,0.55)",
            border:        "1.5px solid rgba(109,40,217,0.5)",
            backdropFilter:"blur(12px)",
            boxShadow:     "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Question text */}
          <h2
            className="text-quiz-q text-white mb-8"
            key={question.id} /* remount animation on question change */
            style={{ animation: "fadeUp 0.4s ease forwards" }}
          >
            {question.question}
          </h2>

          {/* Answer grid — 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.answers.map((answer, i) => (
              <QuizAnswerCard
                key={i}
                label={answer}
                selected={selected === i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
