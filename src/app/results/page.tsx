'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';
import Card from '../../components/Card';
import type { QuizResult, QuizOption } from '../../lib/types'; // Ensure QuizOption is imported if needed for option text
import { strings, t } from '../../lib/i18n'; // Import strings and t

/**
 * Displays the results of the quiz, including the score and a review of answers.
 */
export default function ResultsPage() {
  const [results, setResults] = useState<QuizResult[] | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [totalQuestions, setTotalQuestions] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedResults = localStorage.getItem('quizResults');
    const storedScore = localStorage.getItem('quizScore');
    const storedTotal = localStorage.getItem('quizTotalQuestions');

    if (storedResults && storedScore && storedTotal) {
      setResults(JSON.parse(storedResults));
      setScore(JSON.parse(storedScore));
      setTotalQuestions(JSON.parse(storedTotal));
      // Optional: Clear localStorage items after reading
      // localStorage.removeItem('quizResults');
      // localStorage.removeItem('quizScore');
      // localStorage.removeItem('quizTotalQuestions');
    }
    setIsLoading(false);
  }, []);

  const getOptionText = (options: QuizOption[], optionId?: string): string => {
    if (!optionId) return 'Not answered';
    const option = options.find(opt => opt.id === optionId);
    return option ? option.text : 'Invalid option ID';
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
        <p className="text-xl text-gray-700">{strings.results.loading}</p>
      </main>
    );
  }

  if (!results || score === null || totalQuestions === null) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 text-center">
        <Card className="max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">{strings.results.noResultsTitle}</h1>
          <p className="text-gray-600 mb-6">
            {strings.results.noResultsMessage}
          </p>
          <Link href="/quiz" passHref>
            <Button variant="primary" size="lg">{strings.results.takeQuizButton}</Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-3xl space-y-8">
        <Card className="text-center">
          <h1 className="text-3xl font-bold mb-3 text-indigo-600">{strings.results.title}</h1>
          <p className="text-2xl font-semibold text-gray-700">
            {t(strings.results.scoreSummary, { score, totalQuestions })}
          </p>
        </Card>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-6 text-center">{strings.results.reviewTitle}</h2>
        <div className="space-y-6">
          {results.map((result, index) => (
            <Card key={result.question.id} className={`p-6 ${result.isCorrect ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
              <p className="font-semibold text-lg text-gray-800 mb-2">
                {t(strings.results.questionLabel, { index: index + 1 })} {result.question.questionText}
              </p>
              <p className={`text-sm ${result.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {strings.results.yourAnswerLabel} {getOptionText(result.question.options, result.userAnswerId)}
                {result.isCorrect ? ` ${strings.results.correctTag}` : ` ${strings.results.incorrectTag}`}
              </p>
              {!result.isCorrect && (
                <p className="text-sm text-gray-600">
                  {strings.results.correctAnswerLabel} {getOptionText(result.question.options, result.correctAnswerId)}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-2 pt-2 border-t border-gray-200">
                <span className="font-medium">{strings.results.explanationTitle}</span> {result.explanation}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/quiz" passHref>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">{strings.results.tryAgainButton}</Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">{strings.results.goHomeButton}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
