"use client";

import { useState, useCallback } from "react";
import { QUIZ_QUESTIONS, QUIZ_RESULTS, type QuizResult } from "@/data/constants";
import { calculateResult } from "@/lib/utils";

export type QuizState = "idle" | "active" | "complete";

interface UseQuizReturn {
  state:          QuizState;
  currentStep:    number;
  totalSteps:     number;
  progress:       number;
  currentQuestion: (typeof QUIZ_QUESTIONS)[number] | null;
  answers:        number[];
  result:         QuizResult | null;
  startQuiz:      () => void;
  selectAnswer:   (answerIndex: number) => void;
  resetQuiz:      () => void;
}

export function useQuiz(): UseQuizReturn {
  const [state, setState]       = useState<QuizState>("idle");
  const [currentStep, setStep]  = useState(0);
  const [answers, setAnswers]   = useState<number[]>([]);

  const totalSteps = QUIZ_QUESTIONS.length;
  const progress   = state === "active" ? ((currentStep) / totalSteps) * 100 : 0;

  const currentQuestion =
    state === "active" ? QUIZ_QUESTIONS[currentStep] ?? null : null;

  const result: QuizResult | null =
    state === "complete"
      ? QUIZ_RESULTS[calculateResult(answers)] ?? QUIZ_RESULTS[0]
      : null;

  const startQuiz = useCallback(() => {
    setState("active");
    setStep(0);
    setAnswers([]);
  }, []);

  const selectAnswer = useCallback(
    (answerIndex: number) => {
      const newAnswers = [...answers, answerIndex];
      setAnswers(newAnswers);

      if (currentStep + 1 >= totalSteps) {
        setState("complete");
      } else {
        setStep((s) => s + 1);
      }
    },
    [answers, currentStep, totalSteps]
  );

  const resetQuiz = useCallback(() => {
    setState("idle");
    setStep(0);
    setAnswers([]);
  }, []);

  return {
    state,
    currentStep,
    totalSteps,
    progress,
    currentQuestion,
    answers,
    result,
    startQuiz,
    selectAnswer,
    resetQuiz,
  };
}
