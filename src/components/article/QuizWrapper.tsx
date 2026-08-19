import { QUIZZES } from "@/data/quizzes";
import { Quiz } from "./Quiz";

interface QuizWrapperProps {
  slug: string;
  locale: "id" | "en";
}

export function QuizWrapper({ slug, locale }: QuizWrapperProps) {
  const quizData = QUIZZES[slug];

  if (!quizData) return null;

  return <Quiz quizData={quizData} locale={locale} />;
}
