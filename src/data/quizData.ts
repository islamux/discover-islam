// This file contains the sample data for the Islamic quiz application.
// It includes a variety of questions aimed at providing a basic introduction to Islam,
// suitable for individuals who may not be familiar with the faith.

import type { QuizQuestion } from '../lib/types';

export const islamicQuizData: QuizQuestion[] = [
  {
    id: 'q1',
    questionText: 'What is the central religious text of Islam, believed by Muslims to be a revelation from God (Allah)?',
    options: [
      { id: 'a', text: 'The Torah' },
      { id: 'b', text: 'The Bible' },
      { id: 'c', text: 'The Quran' },
      { id: 'd', text: 'The Vedas' },
    ],
    correctOptionId: 'c',
    explanation: 'The Quran is the holy book of Islam. Muslims believe it is the literal word of God (Allah) revealed to the Prophet Muhammad over a period of 23 years.'
  },
  {
    id: 'q2',
    questionText: 'Who is considered the last prophet in Islam?',
    options: [
      { id: 'a', text: 'Jesus (Isa)' },
      { id: 'b', text: 'Moses (Musa)' },
      { id: 'c', text: 'Abraham (Ibrahim)' },
      { id: 'd', text: 'Muhammad' },
    ],
    correctOptionId: 'd',
    explanation: 'Muslims believe that Muhammad is the final prophet in a line of prophets sent by God, which includes Adam, Noah, Abraham, Moses, Jesus, and others. He is often referred to as the "Seal of the Prophets."'
  },
  {
    id: 'q3',
    questionText: 'What are the five pillars of Islam?',
    options: [
      { id: 'a', text: 'Prayer, Fasting, Tithing, Pilgrimage, and Charity' },
      { id: 'b', text: 'Faith (Shahada), Prayer (Salat), Charity (Zakat), Fasting (Sawm), and Pilgrimage (Hajj)' },
      { id: 'c', text: 'Meditation, Study, Service, Right Speech, and Right Action' },
      { id: 'd', text: 'Confession, Baptism, Communion, Confirmation, and Holy Orders' },
    ],
    correctOptionId: 'b',
    explanation: 'The Five Pillars of Islam are the foundational acts in Islam, considered mandatory by believers. They are: Shahada (declaration of faith), Salat (five daily prayers), Zakat (charity to the poor and needy), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca if one is able).'
  },
  {
    id: 'q4',
    questionText: 'What is the name of God in Arabic, used by Muslims and Arab Christians and Jews?',
    options: [
      { id: 'a', text: 'Yahweh' },
      { id: 'b', text: 'Elohim' },
      { id: 'c', text: 'Allah' },
      { id: 'd', text: 'Deva' },
    ],
    correctOptionId: 'c',
    explanation: 'Allah is the Arabic word for God. It is used by Muslims worldwide, as well as by Arabic-speaking Christians and Jews, to refer to the one God.'
  },
  {
    id: 'q5',
    questionText: 'Which direction do Muslims face when performing their daily prayers (Salat)?',
    options: [
      { id: 'a', text: 'Towards Jerusalem' },
      { id: 'b', text: 'Towards the Kaaba in Mecca' },
      { id: 'c', text: 'Towards the local mosque\'s main dome' },
      { id: 'd', text: 'East, towards the sunrise' },
    ],
    correctOptionId: 'b',
    explanation: 'Muslims perform their five daily prayers facing the Qibla, which is the direction of the Kaaba in Mecca, Saudi Arabia. The Kaaba is considered the most sacred site in Islam.'
  }
];
