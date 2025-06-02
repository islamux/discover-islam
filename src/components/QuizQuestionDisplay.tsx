'use client';

import React from 'react';
import type { QuizQuestion } from '@/data/types';
import { Button } from './Button'; // Assumes Button.tsx is in the same directory (src/components)

interface QuizQuestionDisplayProps {
  question: QuizQuestion;
  selectedAnswer: number | null;
  showExplanation: boolean;
  onOptionClick: (optionIndex: number) => void;
  isLastQuestion: boolean;
  onNextQuestion: () => void;
}

export const QuizQuestionDisplay: React.FC<QuizQuestionDisplayProps> = ({
  question,
  selectedAnswer,
  showExplanation,
  onOptionClick,
  isLastQuestion,
  onNextQuestion,
}) => {
  // The parent component (QuizPage) should handle the case where question might be undefined.
  // If question is guaranteed to be provided by parent, this check can be removed.
  if (!question) {
    return <p className="text-center text-gray-600">Question loading or not available...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <div className="mb-4">
        {/* Optional: Add question number here if QuizPage doesn't show it */}
        {/* <p className="text-sm text-gray-500">Question X of Y</p> */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-1">{question.question}</h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = index === question.correctAnswerIndex;
          
          let buttonClass = "block w-full p-3 text-left border rounded-md transition-colors duration-150 ease-in-out text-gray-700 ";
          if (showExplanation) {
            buttonClass += "cursor-not-allowed ";
            if (isCorrectAnswer) {
              // Explicitly highlight correct answer
              buttonClass += "bg-green-100 border-green-400 text-green-700 ring-2 ring-green-300 ";
            } else if (isSelected && !isCorrectAnswer) {
              // Highlight user's incorrect selection
              buttonClass += "bg-red-100 border-red-400 text-red-700 ring-2 ring-red-300 ";
            } else {
              // Other options when explanation is shown (not selected, not correct)
              buttonClass += "bg-gray-100 border-gray-300 text-gray-500 ";
            }
          } else {
            // Styling for when options are active
            buttonClass += "bg-white border-gray-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 ";
            if (isSelected) { 
              // Optional: if you want immediate feedback before "showExplanation"
              // This might be too much if explanation reveals the answer anyway
              // buttonClass += "bg-blue-100 ring-1 ring-blue-400"; 
            }
          }
          return (
            <button
              key={index}
              onClick={() => onOptionClick(index)}
              disabled={showExplanation}
              className={buttonClass}
              aria-pressed={isSelected} // For accessibility
            >
              {option}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-sky-50 border border-sky-200 rounded-md shadow-sm">
          <h3 className={`text-lg font-semibold mb-2 ${selectedAnswer === question.correctAnswerIndex ? 'text-green-700' : 'text-red-700'}`}>
            {selectedAnswer === question.correctAnswerIndex ? "Correct!" : "Incorrect."}
          </h3>
          <p className="text-gray-700 whitespace-pre-line">{question.explanation}</p>
          <Button
            onClick={onNextQuestion}
            className="mt-4 w-full sm:w-auto" // Ensure Button is full width on small screens if desired
          >
            {isLastQuestion ? 'View Results' : 'Next Question'}
          </Button>
        </div>
      )}
    </div>
  );
};

// For potential dynamic imports or if a default export is preferred:
// export default QuizQuestionDisplay;
