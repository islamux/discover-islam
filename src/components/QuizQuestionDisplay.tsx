'use client';

import React from 'react';
import type { QuizQuestion, QuizOption } from '@/lib/types';
import Card from '@/components/Card'; // Import the Card component
import { strings } from '@/lib/i18n'; // Import strings

interface QuizQuestionDisplayProps {
  /**
   * The quiz question object to display.
   */
  question: QuizQuestion;
  /**
   * The ID of the option selected by the user for this question, if any.
   */
  selectedOptionId?: string;
  /**
   * Callback function to be invoked when an answer option is selected.
   * @param optionId The ID of the selected option.
   */
  onOptionSelect: (optionId: string) => void;
  /**
   * Determines whether to show the explanation for the question.
   * Typically true after an answer has been selected.
   */
  showExplanation?: boolean;
}

/**
 * A component responsible for rendering a single quiz question, its options,
 * and feedback including explanations.
 */
const QuizQuestionDisplay: React.FC<QuizQuestionDisplayProps> = ({
  question,
  selectedOptionId,
  onOptionSelect,
  showExplanation,
}) => {
  const { questionText, options, correctOptionId, explanation } = question;

  return (
    <Card className="p-6 shadow-lg w-full max-w-2xl bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">{questionText}</h2>
      <div className="space-y-3 mb-6">
        {options.map((option: QuizOption) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.id === correctOptionId;
          let buttonStyle = 'bg-gray-100 hover:bg-gray-200 text-gray-700'; // Default

          if (selectedOptionId) {
            // An option has been selected
            if (isSelected) {
              buttonStyle = isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
            } else if (isCorrect) {
              // Show correct answer if user picked wrong
              buttonStyle = 'bg-green-500 text-white';
            } else {
              // Other unselected options
              buttonStyle = 'bg-gray-100 text-gray-700 cursor-not-allowed';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => onOptionSelect(option.id)}
              disabled={!!selectedOptionId} // Disable all options after one is selected
              className={`w-full text-left p-4 rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${buttonStyle} ${!selectedOptionId ? 'hover:bg-indigo-100' : ''}`}
            >
              <span className="font-medium">{option.id.toUpperCase()}.</span> {option.text}
            </button>
          );
        })}
      </div>
      {showExplanation && selectedOptionId && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">{strings.quiz.explanationTitle}</h3>
          <p className="text-blue-600">{explanation}</p>
        </div>
      )}
    </Card>
  );
};

export default QuizQuestionDisplay;
