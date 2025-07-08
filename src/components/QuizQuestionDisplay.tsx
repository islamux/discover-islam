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
    <Card className="p-6 shadow-lg w-full max-w-2xl bg-white border-l-4 border-indigo-500 transform transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 leading-relaxed">{questionText}</h2>
      <div className="space-y-3 mb-6">
        {options.map((option: QuizOption) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.id === correctOptionId;
          let buttonStyle = 'bg-gray-50 hover:bg-indigo-50 text-gray-700 border-2 border-gray-200 hover:border-indigo-300'; // Default

          if (selectedOptionId) {
            // An option has been selected
            if (isSelected) {
              buttonStyle = isCorrect 
                ? 'bg-green-500 text-white border-2 border-green-500 shadow-lg' 
                : 'bg-red-500 text-white border-2 border-red-500 shadow-lg';
            } else if (isCorrect) {
              // Show correct answer if user picked wrong
              buttonStyle = 'bg-green-500 text-white border-2 border-green-500 shadow-lg';
            } else {
              // Other unselected options
              buttonStyle = 'bg-gray-100 text-gray-500 border-2 border-gray-200 cursor-not-allowed opacity-60';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => onOptionSelect(option.id)}
              disabled={!!selectedOptionId} // Disable all options after one is selected
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-[1.02] ${buttonStyle}`}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm mr-3">
                {option.id.toUpperCase()}
              </span>
              <span className="font-medium">{option.text}</span>
            </button>
          );
        })}
      </div>
      {showExplanation && selectedOptionId && (
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 rounded-lg animate-fade-in">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold text-blue-700">{strings.quiz.explanationTitle}</h3>
          </div>
          <p className="text-blue-600 leading-relaxed">{explanation}</p>
        </div>
      )}
    </Card>
  );
};

export default QuizQuestionDisplay;
