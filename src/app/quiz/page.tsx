'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '../../hooks/useQuiz';
import QuizQuestionDisplay from '../../components/QuizQuestionDisplay';
import Button from '../../components/Button';
import { strings, t } from '../../lib/i18n'; // Import strings and t

/**
 * The main page for taking the quiz.
 * It orchestrates the quiz flow using the `useQuiz` hook and `QuizQuestionDisplay` component.
 */
export default function QuizPage() {
  const router = useRouter();
  const {
    currentQuestion,
    selectAnswer,
    goToNextQuestion,
    isQuizOver,
    selectedAnswers,
    totalQuestions,
    currentQuestionIndex,
    score,
    getResults, // Ensure getResults is destructured from useQuiz
  } = useQuiz();

  /**
   * Effect to navigate to the results page when the quiz is over,
   * after saving results to localStorage.
   */
  useEffect(() => {
    if (isQuizOver) {
      const results = getResults();
      localStorage.setItem('quizResults', JSON.stringify(results));
      localStorage.setItem('quizScore', JSON.stringify(score));
      localStorage.setItem('quizTotalQuestions', JSON.stringify(totalQuestions));
      router.push('/results');
    }
  }, [isQuizOver, router, getResults, score, totalQuestions]);

  if (!currentQuestion && !isQuizOver) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
        <div className="text-xl text-gray-700">{strings.quiz.loading}</div>
      </main>
    );
  }

  // This case handles if quiz ends and useEffect for navigation hasn't fired yet
  // or if there are no questions from the start.
  if (isQuizOver || !currentQuestion) {
     // Redirect initiated by useEffect, show loading or brief message
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
        <div className="text-xl text-gray-700">{strings.quiz.redirecting}</div>
      </main>
    );
  }

  const questionId = currentQuestion.id;
  const isOptionSelected = !!selectedAnswers[questionId];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-2xl space-y-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">{strings.quiz.pageTitle}</h1>
          <p className="text-md text-gray-600 mt-2">
            {t(strings.quiz.questionLabel, { current: currentQuestionIndex + 1, total: totalQuestions })}
          </p>
        </header>

        <QuizQuestionDisplay
          question={currentQuestion}
          selectedOptionId={selectedAnswers[questionId]}
          onOptionSelect={(optionId) => selectAnswer(questionId, optionId)}
          showExplanation={isOptionSelected} // Show explanation once an option is selected
        />

        {isOptionSelected && (
          <div className="text-center mt-8">
            <Button
              onClick={goToNextQuestion}
              className="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
            >
              {currentQuestionIndex === totalQuestions - 1 ? strings.quiz.finishButton : strings.quiz.nextButton}
            </Button>
          </div>
        )}
         {/* Optional: Display running score - not in requirements but good for UX
         <div className="text-center mt-4 text-lg font-medium text-gray-700">
            Score: {score} / {totalQuestions}
          </div>
        */}
      </div>
    </main>
  );
}
