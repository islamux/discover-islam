'use client';

import { useState, useCallback, useMemo } from 'react';
import type { QuizQuestion, QuizOption, QuizResult } from '../lib/types'; // Import QuizResult
import { islamicQuizData } from '../data/quizData';

/**
 * Custom hook to manage the state and logic of the quiz.
 *
 * @returns An object containing quiz state and functions to interact with the quiz.
 */
export const useQuiz = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(islamicQuizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({}); // questionId: optionId
  const [score, setScore] = useState<number>(0);
  const [isQuizOver, setIsQuizOver] = useState<boolean>(false);

  /**
   * The current question object based on `currentQuestionIndex`.
   */
  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);

  /**
   * The total number of questions in the quiz.
   */
  const totalQuestions = useMemo(() => questions.length, [questions]);

  /**
   * Handles the selection of an answer for the current question.
   * It updates the selected answers, calculates the score if the answer is correct,
   * and prevents changing an already selected answer for a given question.
   * @param questionId The ID of the question for which an answer is being selected.
   * @param optionId The ID of the selected answer option.
   */
  const selectAnswer = useCallback((questionId: string, optionId: string) => {
    // Prevent changing an answer once selected for a specific question
    if (selectedAnswers[questionId]) {
      return;
    }

    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionId }));

    if (optionId === currentQuestion.correctOptionId) {
      setScore(prevScore => prevScore + 1);
    }
  }, [currentQuestion, selectedAnswers]);

  /**
   * Advances to the next question or ends the quiz if all questions have been answered.
   */
  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setIsQuizOver(true);
    }
  }, [currentQuestionIndex, questions.length]);

  /**
   * Resets the quiz to its initial state, allowing for a new attempt.
   * Optionally, could shuffle questions here in the future.
   */
  const resetQuiz = useCallback(() => {
    // Future enhancement: Shuffle questions by creating a shuffled copy of islamicQuizData
    // setQuestions(shuffledIslamicQuizData); 
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setIsQuizOver(false);
  }, []);

  /**
   * Compiles and returns the results of the quiz.
   * This function should be called when `isQuizOver` is true.
   * @returns An array of `QuizResult` objects, each detailing a question, user's answer, correct answer, and explanation.
   */
  const getResults = useCallback((): QuizResult[] => {
    return questions.map(question => {
      const userAnswerId = selectedAnswers[question.id];
      const isCorrect = userAnswerId === question.correctOptionId;
      return {
        question,
        userAnswerId,
        correctAnswerId: question.correctOptionId,
        isCorrect,
        explanation: question.explanation,
      };
    });
  }, [questions, selectedAnswers]);

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswers,
    score,
    isQuizOver,
    selectAnswer,
    goToNextQuestion,
    resetQuiz,
    totalQuestions,
    getResults,
  };
};
