'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { quizQuestions } from '@/data/quizData'; // To access full question details
import type { QuizQuestion } from '@/data/types'; // For type consistency, though not strictly used if quizQuestions is typed

interface UserAnswer {
  questionId: number;
  selectedAnswerIndex: number;
  isCorrect: boolean;
}

interface QuizResults {
  score: number;
  userAnswers: UserAnswer[];
  totalQuestions: number;
}

export default function ResultsPage() {
  const [results, setResults] = useState<QuizResults | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedResults = localStorage.getItem('quizResults');
    if (storedResults) {
      try {
        const parsedResults = JSON.parse(storedResults) as QuizResults;
        // Basic validation of the parsed results
        if (parsedResults && typeof parsedResults.score === 'number' && Array.isArray(parsedResults.userAnswers) && typeof parsedResults.totalQuestions === 'number') {
          setResults(parsedResults);
        } else {
          console.error("Parsed results from localStorage are malformed.");
          setResults(null); // Treat as no results found
        }
      } catch (error) {
        console.error("Failed to parse results from localStorage", error);
        setResults(null); // Treat as no results found on error
      }
    }
    setIsLoading(false);
  }, []);

  const handleTryAgain = () => {
    localStorage.removeItem('quizResults'); // Clear results for a fresh start
    router.push('/quiz');
  };

  if (isLoading) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-xl">Loading results...</p>
        </div>
    );
  }

  if (!results) {
    return (
      <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-2xl min-h-screen bg-gray-50 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Quiz Results</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl text-red-500 mb-6">No results found or results are invalid.</p>
            <p className="text-gray-700 mb-6">Please complete the quiz to see your results.</p>
            <Link href="/quiz" className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 text-lg transition-colors">
            Start Quiz
            </Link>
        </div>
      </div>
    );
  }

  // Enhance userAnswers with full question details for easier rendering
  const detailedUserAnswers = results.userAnswers.map(ua => {
    const question = quizQuestions.find(q => q.id === ua.questionId);
    return {
      ...ua,
      questionText: question?.question || "Question not found",
      options: question?.options || [],
      correctAnswerIndex: question?.correctAnswerIndex,
      explanation: question?.explanation || "Explanation not available"
    };
  });

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-3xl min-h-screen bg-gray-50">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-blue-600">Quiz Results</h1>
      </header>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl mb-8 text-center">
        <p className="text-2xl sm:text-3xl font-semibold text-gray-700">
          You scored <span className="text-green-500 font-bold">{results.score}</span> out of <span className="text-blue-500 font-bold">{results.totalQuestions}</span>!
        </p>
        {/* Optional: Add a performance message based on score */}
        {results.score / results.totalQuestions >= 0.8 && <p className="mt-2 text-green-600">Excellent work!</p>}
        {results.score / results.totalQuestions < 0.5 && <p className="mt-2 text-orange-500">Keep practicing to improve!</p>}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-left">Review Your Answers:</h2>
      <div className="space-y-6 mb-10">
        {detailedUserAnswers.map((answerDetail, index) => {
          const questionNumber = quizQuestions.findIndex(q => q.id === answerDetail.questionId) + 1; // Get original question number
          const selectedOptionText = answerDetail.options[answerDetail.selectedAnswerIndex] || "Not answered";
          const correctOptionText = typeof answerDetail.correctAnswerIndex === 'number' ? answerDetail.options[answerDetail.correctAnswerIndex] : "N/A";

          return (
            <div key={answerDetail.questionId} className={`p-5 border rounded-lg shadow-md ${answerDetail.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Question {questionNumber}: {answerDetail.questionText}
              </h3>
              <p className={`text-sm ${answerDetail.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                Your answer: <span className="font-medium">{selectedOptionText}</span> {answerDetail.isCorrect ? "(Correct)" : "(Incorrect)"}
              </p>
              {!answerDetail.isCorrect && (
                <p className="text-sm text-green-700">
                  Correct answer: <span className="font-medium">{correctOptionText}</span>
                </p>
              )}
              <p className="mt-3 text-xs sm:text-sm text-gray-600 bg-gray-100 p-2 rounded-md whitespace-pre-line">
                <span className="font-semibold">Explanation:</span> {answerDetail.explanation}
              </p>
            </div>
          );
        })}
      </div>

      <footer className="text-center py-6 border-t border-gray-200">
        <button
          onClick={handleTryAgain}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 text-lg transition-colors duration-150 ease-in-out mr-4"
        >
          Try Again
        </button>
        <Link href="/" className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 text-lg transition-colors duration-150 ease-in-out">
          Home
        </Link>
      </footer>
    </div>
  );
}
