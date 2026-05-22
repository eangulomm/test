import { QuizOrchestrator } from "@/components/quiz/QuizOrchestrator";

/**
 * Home Page
 * The main landing experience: Hero → Quiz → Result.
 * All state is managed inside QuizOrchestrator (client component).
 */
export default function HomePage() {
  return <QuizOrchestrator />;
}
