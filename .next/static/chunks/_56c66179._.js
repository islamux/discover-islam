(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/quizData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// This file contains the sample data for the Islamic quiz application.
// It includes a variety of questions aimed at providing a basic introduction to Islam,
// suitable for individuals who may not be familiar with the faith.
__turbopack_context__.s({
    "islamicQuizData": (()=>islamicQuizData)
});
const islamicQuizData = [
    {
        id: 'q1',
        questionText: 'What is the central religious text of Islam, believed by Muslims to be a revelation from God (Allah)?',
        options: [
            {
                id: 'a',
                text: 'The Torah'
            },
            {
                id: 'b',
                text: 'The Bible'
            },
            {
                id: 'c',
                text: 'The Quran'
            },
            {
                id: 'd',
                text: 'The Vedas'
            }
        ],
        correctOptionId: 'c',
        explanation: 'The Quran is the holy book of Islam. Muslims believe it is the literal word of God (Allah) revealed to the Prophet Muhammad over a period of 23 years.'
    },
    {
        id: 'q2',
        questionText: 'Who is considered the last prophet in Islam?',
        options: [
            {
                id: 'a',
                text: 'Jesus (Isa)'
            },
            {
                id: 'b',
                text: 'Moses (Musa)'
            },
            {
                id: 'c',
                text: 'Abraham (Ibrahim)'
            },
            {
                id: 'd',
                text: 'Muhammad'
            }
        ],
        correctOptionId: 'd',
        explanation: 'Muslims believe that Muhammad is the final prophet in a line of prophets sent by God, which includes Adam, Noah, Abraham, Moses, Jesus, and others. He is often referred to as the "Seal of the Prophets."'
    },
    {
        id: 'q3',
        questionText: 'What are the five pillars of Islam?',
        options: [
            {
                id: 'a',
                text: 'Prayer, Fasting, Tithing, Pilgrimage, and Charity'
            },
            {
                id: 'b',
                text: 'Faith (Shahada), Prayer (Salat), Charity (Zakat), Fasting (Sawm), and Pilgrimage (Hajj)'
            },
            {
                id: 'c',
                text: 'Meditation, Study, Service, Right Speech, and Right Action'
            },
            {
                id: 'd',
                text: 'Confession, Baptism, Communion, Confirmation, and Holy Orders'
            }
        ],
        correctOptionId: 'b',
        explanation: 'The Five Pillars of Islam are the foundational acts in Islam, considered mandatory by believers. They are: Shahada (declaration of faith), Salat (five daily prayers), Zakat (charity to the poor and needy), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca if one is able).'
    },
    {
        id: 'q4',
        questionText: 'What is the name of God in Arabic, used by Muslims and Arab Christians and Jews?',
        options: [
            {
                id: 'a',
                text: 'Yahweh'
            },
            {
                id: 'b',
                text: 'Elohim'
            },
            {
                id: 'c',
                text: 'Allah'
            },
            {
                id: 'd',
                text: 'Deva'
            }
        ],
        correctOptionId: 'c',
        explanation: 'Allah is the Arabic word for God. It is used by Muslims worldwide, as well as by Arabic-speaking Christians and Jews, to refer to the one God.'
    },
    {
        id: 'q5',
        questionText: 'Which direction do Muslims face when performing their daily prayers (Salat)?',
        options: [
            {
                id: 'a',
                text: 'Towards Jerusalem'
            },
            {
                id: 'b',
                text: 'Towards the Kaaba in Mecca'
            },
            {
                id: 'c',
                text: 'Towards the local mosque\'s main dome'
            },
            {
                id: 'd',
                text: 'East, towards the sunrise'
            }
        ],
        correctOptionId: 'b',
        explanation: 'Muslims perform their five daily prayers facing the Qibla, which is the direction of the Kaaba in Mecca, Saudi Arabia. The Kaaba is considered the most sacred site in Islam.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useQuiz.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useQuiz": (()=>useQuiz)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$quizData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/quizData.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useQuiz = ()=>{
    _s();
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$quizData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["islamicQuizData"]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswers, setSelectedAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // questionId: optionId
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isQuizOver, setIsQuizOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /**
   * The current question object based on `currentQuestionIndex`.
   */ const currentQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQuiz.useMemo[currentQuestion]": ()=>questions[currentQuestionIndex]
    }["useQuiz.useMemo[currentQuestion]"], [
        questions,
        currentQuestionIndex
    ]);
    /**
   * The total number of questions in the quiz.
   */ const totalQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQuiz.useMemo[totalQuestions]": ()=>questions.length
    }["useQuiz.useMemo[totalQuestions]"], [
        questions
    ]);
    /**
   * Handles the selection of an answer for the current question.
   * It updates the selected answers, calculates the score if the answer is correct,
   * and prevents changing an already selected answer for a given question.
   * @param questionId The ID of the question for which an answer is being selected.
   * @param optionId The ID of the selected answer option.
   */ const selectAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuiz.useCallback[selectAnswer]": (questionId, optionId)=>{
            // Prevent changing an answer once selected for a specific question
            if (selectedAnswers[questionId]) {
                return;
            }
            setSelectedAnswers({
                "useQuiz.useCallback[selectAnswer]": (prev)=>({
                        ...prev,
                        [questionId]: optionId
                    })
            }["useQuiz.useCallback[selectAnswer]"]);
            if (optionId === currentQuestion.correctOptionId) {
                setScore({
                    "useQuiz.useCallback[selectAnswer]": (prevScore)=>prevScore + 1
                }["useQuiz.useCallback[selectAnswer]"]);
            }
        }
    }["useQuiz.useCallback[selectAnswer]"], [
        currentQuestion,
        selectedAnswers
    ]);
    /**
   * Advances to the next question or ends the quiz if all questions have been answered.
   */ const goToNextQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuiz.useCallback[goToNextQuestion]": ()=>{
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex({
                    "useQuiz.useCallback[goToNextQuestion]": (prevIndex)=>prevIndex + 1
                }["useQuiz.useCallback[goToNextQuestion]"]);
            } else {
                setIsQuizOver(true);
            }
        }
    }["useQuiz.useCallback[goToNextQuestion]"], [
        currentQuestionIndex,
        questions.length
    ]);
    /**
   * Resets the quiz to its initial state, allowing for a new attempt.
   * Optionally, could shuffle questions here in the future.
   */ const resetQuiz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuiz.useCallback[resetQuiz]": ()=>{
            // Future enhancement: Shuffle questions by creating a shuffled copy of islamicQuizData
            // setQuestions(shuffledIslamicQuizData);
            setCurrentQuestionIndex(0);
            setSelectedAnswers({});
            setScore(0);
            setIsQuizOver(false);
        }
    }["useQuiz.useCallback[resetQuiz]"], []);
    /**
   * Compiles and returns the results of the quiz.
   * This function should be called when `isQuizOver` is true.
   * @returns An array of `QuizResult` objects, each detailing a question, user's answer, correct answer, and explanation.
   */ const getResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuiz.useCallback[getResults]": ()=>{
            return questions.map({
                "useQuiz.useCallback[getResults]": (question)=>{
                    const userAnswerId = selectedAnswers[question.id];
                    const isCorrect = userAnswerId === question.correctOptionId;
                    return {
                        question,
                        userAnswerId,
                        correctAnswerId: question.correctOptionId,
                        isCorrect,
                        explanation: question.explanation
                    };
                }
            }["useQuiz.useCallback[getResults]"]);
        }
    }["useQuiz.useCallback[getResults]"], [
        questions,
        selectedAnswers
    ]);
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
        getResults
    };
};
_s(useQuiz, "qzu1F2X/H1qPtrP54WucqHUu60c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/**
 * A reusable Card component that provides a styled container for content.
 * It typically includes a white background, shadow, rounded corners, and padding.
 */ const Card = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white shadow-xl rounded-lg p-8 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Card.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/locales/en.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Default English strings for the application UI.
 * This object contains all user-facing strings, organized by page or component.
 */ __turbopack_context__.s({
    "defaultStrings": (()=>defaultStrings)
});
const defaultStrings = {
    home: {
        welcomeTitle: "Welcome to the Introduction to Islam Quiz!",
        welcomeMessage: "Test your knowledge and learn about the basics of Islam in a friendly and engaging way. This quiz is designed for everyone, especially those curious to understand more.",
        startButton: "Start Quiz"
    },
    quiz: {
        pageTitle: "Islam Quiz",
        questionLabel: "Question {current} of {total}",
        nextButton: "Next Question",
        finishButton: "Finish Quiz",
        loading: "Loading questions or quiz not found...",
        redirecting: "Quiz finished, redirecting to results...",
        explanationTitle: "Explanation:"
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
        takeQuizButton: "Take Quiz"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/i18n.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "strings": (()=>strings),
    "t": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locales$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/locales/en.ts [app-client] (ecmascript)");
;
const strings = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locales$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultStrings"];
function t(str, values) {
    if (!values) {
        return str;
    }
    return str.replace(/\{(\w+)\}/g, (match, key)=>{
        return values.hasOwnProperty(key) ? String(values[key]) : match;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/QuizQuestionDisplay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.tsx [app-client] (ecmascript)"); // Import the Card component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)"); // Import strings
'use client';
;
;
;
/**
 * A component responsible for rendering a single quiz question, its options,
 * and feedback including explanations.
 */ const QuizQuestionDisplay = ({ question, selectedOptionId, onOptionSelect, showExplanation })=>{
    const { questionText, options, correctOptionId, explanation } = question;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "p-6 shadow-lg w-full max-w-2xl bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mb-6 text-gray-800",
                children: questionText
            }, void 0, false, {
                fileName: "[project]/src/components/QuizQuestionDisplay.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 mb-6",
                children: options.map((option)=>{
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onOptionSelect(option.id),
                        disabled: !!selectedOptionId,
                        className: `w-full text-left p-4 rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${buttonStyle} ${!selectedOptionId ? 'hover:bg-indigo-100' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    option.id.toUpperCase(),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuizQuestionDisplay.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            " ",
                            option.text
                        ]
                    }, option.id, true, {
                        fileName: "[project]/src/components/QuizQuestionDisplay.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/QuizQuestionDisplay.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            showExplanation && selectedOptionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-blue-700 mb-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strings"].quiz.explanationTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuizQuestionDisplay.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-600",
                        children: explanation
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuizQuestionDisplay.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuizQuestionDisplay.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuizQuestionDisplay.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
_c = QuizQuestionDisplay;
const __TURBOPACK__default__export__ = QuizQuestionDisplay;
var _c;
__turbopack_context__.k.register(_c, "QuizQuestionDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const Button = ({ children, className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/quiz/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>QuizPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuiz$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useQuiz.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizQuestionDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuizQuestionDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)"); // Import strings and t
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function QuizPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { currentQuestion, selectAnswer, goToNextQuestion, isQuizOver, selectedAnswers, totalQuestions, currentQuestionIndex, score, getResults } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuiz$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuiz"])();
    /**
   * Effect to navigate to the results page when the quiz is over,
   * after saving results to localStorage.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizPage.useEffect": ()=>{
            if (isQuizOver) {
                const results = getResults();
                localStorage.setItem('quizResults', JSON.stringify(results));
                localStorage.setItem('quizScore', JSON.stringify(score));
                localStorage.setItem('quizTotalQuestions', JSON.stringify(totalQuestions));
                router.push('/results');
            }
        }
    }["QuizPage.useEffect"], [
        isQuizOver,
        router,
        getResults,
        score,
        totalQuestions
    ]);
    if (!currentQuestion && !isQuizOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl text-gray-700",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strings"].quiz.loading
            }, void 0, false, {
                fileName: "[project]/src/app/quiz/page.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/quiz/page.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    }
    // This case handles if quiz ends and useEffect for navigation hasn't fired yet
    // or if there are no questions from the start.
    if (isQuizOver || !currentQuestion) {
        // Redirect initiated by useEffect, show loading or brief message
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl text-gray-700",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strings"].quiz.redirecting
            }, void 0, false, {
                fileName: "[project]/src/app/quiz/page.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/quiz/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    const questionId = currentQuestion.id;
    const isOptionSelected = !!selectedAnswers[questionId];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-indigo-600",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strings"].quiz.pageTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/quiz/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-md text-gray-600 mt-2",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strings"].quiz.questionLabel, {
                                current: currentQuestionIndex + 1,
                                total: totalQuestions
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/quiz/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/quiz/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizQuestionDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: currentQuestion,
                    selectedOptionId: selectedAnswers[questionId],
                    onOptionSelect: (optionId)=>selectAnswer(questionId, optionId),
                    showExplanation: isOptionSelected
                }, void 0, false, {
                    fileName: "[project]/src/app/quiz/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                isOptionSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: goToNextQuestion,
                        className: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
                        children: currentQuestionIndex === totalQuestions - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strings"].quiz.finishButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strings"].quiz.nextButton
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/quiz/page.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/quiz/page.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/quiz/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(QuizPage, "P8QCUDTzpWfFesayTtrQ8PtPFhU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuiz$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuiz"]
    ];
});
_c = QuizPage;
var _c;
__turbopack_context__.k.register(_c, "QuizPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_56c66179._.js.map