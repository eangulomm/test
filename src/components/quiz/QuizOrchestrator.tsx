"use client";

import { useQuiz } from "@/hooks/useQuiz";
import { HeroSection }   from "@/sections/HeroSection";
import { QuizSection }   from "@/sections/QuizSection";
import { ResultSection } from "@/sections/ResultSection";

/**
 * QuizOrchestrator
 * Top-level client component that owns quiz state and renders the
 * correct section (Hero → Quiz → Result) based on quiz phase.
 */
export function QuizOrchestrator() {
  const {
    state,
    currentStep,
    totalSteps,
    progress,
    currentQuestion,
    result,
    startQuiz,
    selectAnswer,
    resetQuiz,
  } = useQuiz();

  if (state === "idle") {
    return <HeroSection onStartQuiz={startQuiz} />;
  }

  if (state === "active" && currentQuestion) {
    return (
      <QuizSection
        question={currentQuestion}
        currentStep={currentStep}
        totalSteps={totalSteps}
        progress={progress}
        onAnswer={selectAnswer}
      />
    );
  }

  if (state === "complete" && result) {
    return <ResultSection result={result} onRetake={resetQuiz} />;
  }

  // Fallback — should never reach here
  return <HeroSection onStartQuiz={startQuiz} />;
}
