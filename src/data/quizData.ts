import type { QuizQuestion } from './types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the first pillar of Islam (Shahada)?",
    options: [
      "Prayer (Salat)",
      "Fasting (Sawm)",
      "Declaration of faith",
      "Charity (Zakat)"
    ],
    correctAnswerIndex: 2,
    explanation: "The Shahada is the declaration that there is no god but Allah, and Muhammad is his messenger. It's the foundational pillar of Islam."
  },
  {
    id: 2,
    question: "How many times a day are Muslims required to perform Salat (prayer)?",
    options: ["Three times", "Five times", "Once a day", "Optionally"],
    correctAnswerIndex: 1,
    explanation: "Muslims are required to perform Salat five times a day at specific times: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night)."
  },
  {
    id: 3,
    question: "What is Zakat in Islam?",
    options: [
      "A type of prayer",
      "Pilgrimage to Mecca",
      "Fasting during Ramadan",
      "Obligatory charity"
    ],
    correctAnswerIndex: 3,
    explanation: "Zakat is an obligatory form of charity, typically 2.5% of a Muslim's saved wealth, given to the poor and needy. It is the third pillar of Islam."
  },
  {
    id: 4,
    question: "Which month do Muslims fast from dawn until sunset?",
    options: ["Shawwal", "Dhul-Hijjah", "Ramadan", "Rajab"],
    correctAnswerIndex: 2,
    explanation: "Muslims observe Sawm (fasting) during the month of Ramadan, the ninth month of the Islamic lunar calendar. This is the fourth pillar of Islam."
  },
  {
    id: 5,
    question: "What is the Hajj?",
    options: [
      "The weekly congregational prayer",
      "The holy book of Islam",
      "The pilgrimage to Mecca",
      "The festival celebrating the end of Ramadan"
    ],
    correctAnswerIndex: 2,
    explanation: "The Hajj is the annual Islamic pilgrimage to Mecca, Saudi Arabia, the holiest city for Muslims. It is the fifth pillar of Islam and a religious duty for Muslims who are physically and financially capable of undertaking it."
  }
];
