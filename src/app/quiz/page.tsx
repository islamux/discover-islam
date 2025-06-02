'use client';

import { useState, useEffect } from 'react';
import { quizQuestions } from '@/data/quizData';
import type { QuizQuestion } from '@/data/types';
// import { useRouter } from 'next/navigation'; // Uncomment when results page is ready
import { QuizQuestionDisplay } from '@/components/QuizQuestionDisplay'; // Import the new component

interface UserAnswer {
  questionId: number;
  selectedAnswerIndex: number;
  isCorrect: boolean;
}

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  // const router = useRouter(); // Uncomment when results page is ready

  // isLoading state can be simplified if quizQuestions is static and always available
  const [isLoading, setIsLoading] = useState(false); // Assuming quizQuestions is loaded synchronously

  // useEffect(() => {
  //   if (quizQuestions && quizQuestions.length > 0) {
  //     setIsLoading(false);
  //   }
  // }, []);

  if (isLoading) { // Kept for potential async loading in future
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading quiz...</p>
      </div>
    );
  }

  if (!quizQuestions || quizQuestions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">No quiz questions found. Please check the data source.</p>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (showExplanation) return;

    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctAnswerIndex;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setUserAnswers(prevAnswers => [
      ...prevAnswers,
      {
        questionId: currentQuestion.id,
        selectedAnswerIndex: optionIndex,
        isCorrect: isCorrect,
      },
    ]);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      // End of quiz
      localStorage.setItem('quizResults', JSON.stringify({ score, userAnswers, totalQuestions: quizQuestions.length }));
      console.log("End of quiz. Results stored in localStorage.");
      // router.push('/quiz/results'); // Uncomment when results page is ready and path is confirmed
      alert(`Quiz Finished! Your score: ${score}/${quizQuestions.length}. Results logged and stored.`); // Placeholder for navigation
      // Potentially reset state or redirect, for now, an alert and localStorage.
      // To allow re-taking the quiz, you might want to reset state:
      // setCurrentQuestionIndex(0);
      // setSelectedAnswer(null);
      // setScore(0);
      // setShowExplanation(false);
      // setUserAnswers([]);
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  if (!currentQuestion) {
    // This case should ideally not be reached if quizQuestions.length > 0 and currentQuestionIndex is managed properly
    // However, as a fallback:
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">Error: Could not load current question. Please try refreshing.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-2xl min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="mb-6 w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600">Islamic Quiz</h1>
        <p className="text-center text-gray-600">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
      </header>
      
      <QuizQuestionDisplay
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        showExplanation={showExplanation}
        onOptionClick={handleOptionClick}
        isLastQuestion={currentQuestionIndex === quizQuestions.length - 1}
        onNextQuestion={handleNextQuestion}
      />
      
      <footer className="text-center mt-8 text-sm text-gray-500 w-full">
        <p>Score: {score} / {quizQuestions.length}</p>
      </footer>
    </div>
  );
}
