/**
 * Represents a single answer option for a quiz question.
 */
export interface QuizOption {
  /**
   * A unique identifier for the option (e.g., 'a', 'b', 'c').
   */
  id: string;
  /**
   * The text content of the answer option.
   */
  text: string;
}

/**
 * Represents a single quiz question, including its text, options, correct answer, and explanation.
 */
export interface QuizQuestion {
  /**
   * A unique identifier for the question.
   */
  id: string;
  /**
   * The text content of the question.
   */
  questionText: string;
  /**
   * An array of 2-4 possible answer choices for the question.
   */
  options: QuizOption[];
  /**
   * The `id` of the `QuizOption` that is the correct answer.
   */
  correctOptionId: string;
  /**
   * An explanation for why the correct answer is correct.
   */
  explanation: string;
}

/**
 * Represents the structure of a single result item for the quiz,
 * detailing the question, user's answer, correctness, and explanation.
 */
export interface QuizResult {
  /** The original question object. */
  question: QuizQuestion;
  /** The ID of the option selected by the user. Undefined if not answered. */
  userAnswerId?: string;
  /** The ID of the correct option for the question. */
  correctAnswerId: string;
  /** Whether the user's answer was correct. */
  isCorrect: boolean;
  /** The explanation for the correct answer (often redundant if accessing question.explanation). */
  explanation: string;
}
