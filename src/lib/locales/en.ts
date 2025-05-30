/**
 * Default English strings for the application UI.
 * This object contains all user-facing strings, organized by page or component.
 */
export const defaultStrings = {
  home: {
    welcomeTitle: "Welcome to the Introduction to Islam Quiz!",
    welcomeMessage: "Test your knowledge and learn about the basics of Islam in a friendly and engaging way. This quiz is designed for everyone, especially those curious to understand more.",
    startButton: "Start Quiz",
  },
  quiz: {
    pageTitle: "Islam Quiz",
    questionLabel: "Question {current} of {total}",
    nextButton: "Next Question",
    finishButton: "Finish Quiz",
    loading: "Loading questions or quiz not found...",
    redirecting: "Quiz finished, redirecting to results...",
    explanationTitle: "Explanation:",
  },
  results: {
    title: "Quiz Results",
    scoreSummary: "You scored {score} out of {totalQuestions}!",
    reviewTitle: "Review Your Answers",
    questionLabel: "Question {index}:",
    yourAnswerLabel: "Your answer:",
    correctAnswerLabel: "Correct answer:",
    correctTag: "(Correct)",
    incorrectTag: "(Incorrect)",
    explanationTitle: "Explanation:",
    tryAgainButton: "Try Again",
    goHomeButton: "Go Home",
    loading: "Loading results...",
    noResultsTitle: "No Results Found",
    noResultsMessage: "We couldn't find your quiz results. Please try taking the quiz again.",
    takeQuizButton: "Take Quiz",
  },
  // General or shared component strings can be added here if needed
  // e.g., general: { submitButton: "Submit" }
};
