/**
 * QuizMaster Pro - Premium Minimal Design
 * Clean, focused, professional
 * Version: 3.0.0
 */

// ========================================
// QUIZ DATA
// ========================================

const quizData = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language"
            ],
            correctAnswer: 0
        },
        {
            question: "Which HTML tag is used for creating a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<hyperlink>"],
            correctAnswer: 1
        },
        {
            question: "Which HTML attribute specifies an alternate text for an image?",
            options: ["title", "alt", "src", "text"],
            correctAnswer: 1
        },
        {
            question: "What is the correct HTML element for the largest heading?",
            options: ["<heading>", "<h6>", "<h1>", "<head>"],
            correctAnswer: 2
        },
        {
            question: "Which HTML element is used to define important text?",
            options: ["<i>", "<important>", "<b>", "<strong>"],
            correctAnswer: 3
        },
        {
            question: "What is the correct HTML for creating a checkbox?",
            options: [
                '<input type="check">',
                '<input type="checkbox">',
                '<checkbox>',
                '<check>'
            ],
            correctAnswer: 1
        },
        {
            question: "Which HTML element defines the title of a document?",
            options: ["<meta>", "<title>", "<head>", "<header>"],
            correctAnswer: 1
        },
        {
            question: "What is the correct HTML for making a text area?",
            options: ["<textarea>", '<input type="textarea">', "<text>", '<input type="textbox">'],
            correctAnswer: 0
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: ["class", "style", "font", "styles"],
            correctAnswer: 1
        },
        {
            question: "What is the correct HTML for inserting a line break?",
            options: ["<break>", "<lb>", "<br>", "<newline>"],
            correctAnswer: 2
        }
    ],
    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Colorful Style Sheets"
            ],
            correctAnswer: 1
        },
        {
            question: "Which CSS property is used to change the text color?",
            options: ["text-color", "font-color", "color", "text-style"],
            correctAnswer: 2
        },
        {
            question: "What is the purpose of flexbox in CSS?",
            options: [
                "To create flexible images",
                "To create responsive layouts",
                "To add animations",
                "To change font styles"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you select an element with id 'demo' in CSS?",
            options: ["#demo", ".demo", "demo", "*demo"],
            correctAnswer: 0
        },
        {
            question: "Which property is used to change the background color?",
            options: ["bgcolor", "background-color", "color", "bg-color"],
            correctAnswer: 1
        },
        {
            question: "How do you make text bold in CSS?",
            options: [
                "font-weight: bold;",
                "text-style: bold;",
                "font: bold;",
                "text-weight: bold;"
            ],
            correctAnswer: 0
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["text-size", "font-style", "text-style", "font-size"],
            correctAnswer: 3
        },
        {
            question: "How do you center a block element horizontally?",
            options: [
                "text-align: center;",
                "margin: auto;",
                "align: center;",
                "center: true;"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the default value of the position property?",
            options: ["relative", "fixed", "absolute", "static"],
            correctAnswer: 3
        },
        {
            question: "Which property adds space between the border and content?",
            options: ["margin", "padding", "spacing", "border-spacing"],
            correctAnswer: 1
        }
    ],
    javascript: [
        {
            question: "What is the correct syntax to print 'Hello World' in the console?",
            options: [
                "print('Hello World')",
                "console.log('Hello World')",
                "echo('Hello World')",
                "printf('Hello World')"
            ],
            correctAnswer: 1
        },
        {
            question: "Which method is used to select an HTML element by its ID?",
            options: [
                "getElementByClass()",
                "querySelector()",
                "getElementById()",
                "selectElement()"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the correct way to declare a JavaScript variable?",
            options: ["variable myVar", "v myVar", "let myVar", "declare myVar"],
            correctAnswer: 2
        },
        {
            question: "Which symbol is used for single-line comments in JavaScript?",
            options: ["//", "/* */", "#", "--"],
            correctAnswer: 0
        },
        {
            question: "What does the '===' operator do in JavaScript?",
            options: [
                "Assigns a value",
                "Compares value only",
                "Compares value and type",
                "Compares type only"
            ],
            correctAnswer: 2
        },
        {
            question: "Which method converts JSON data to a JavaScript object?",
            options: [
                "JSON.parse()",
                "JSON.stringify()",
                "JSON.toObject()",
                "JSON.convert()"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the output of: typeof []?",
            options: ["array", "object", "null", "undefined"],
            correctAnswer: 1
        },
        {
            question: "Which method adds an element at the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            correctAnswer: 0
        },
        {
            question: "What is a closure in JavaScript?",
            options: [
                "A loop that never ends",
                "A function with access to its outer scope",
                "A way to close the browser",
                "A syntax error"
            ],
            correctAnswer: 1
        },
        {
            question: "Which keyword is used to create a constant in JavaScript?",
            options: ["var", "let", "const", "constant"],
            correctAnswer: 2
        }
    ],
    mixed: []
};

// Generate mixed questions
quizData.mixed = [
    ...quizData.html.slice(0, 3),
    ...quizData.css.slice(0, 3),
    ...quizData.javascript.slice(0, 4)
];

// ========================================
// STATE
// ========================================

const state = {
    // Quiz config
    category: 'mixed',
    questionsCount: 10,
    timePerQuestion: 30,
    
    // Current quiz
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    
    // Scoring
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    
    // Timer
    timeRemaining: 30,
    timerInterval: null,
    quizStartTime: null,
    quizEndTime: null,
    
    // UI
    isQuizActive: false
};

// ========================================
// DOM ELEMENTS
// ========================================

const elements = {
    // Screens
    welcomeScreen: document.getElementById('welcomeScreen'),
    setupScreen: document.getElementById('setupScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    reviewScreen: document.getElementById('reviewScreen'),
    
    // Welcome
    bestScore: document.getElementById('bestScore'),
    totalQuizzes: document.getElementById('totalQuizzes'),
    startBtn: document.getElementById('startBtn'),
    
    // Setup
    backBtn: document.getElementById('backBtn'),
    beginBtn: document.getElementById('beginBtn'),
    
    // Quiz
    currentQ: document.getElementById('currentQ'),
    totalQ: document.getElementById('totalQ'),
    progressBar: document.getElementById('progressBar'),
    timerRing: document.getElementById('timerRing'),
    timerText: document.getElementById('timerText'),
    questionText: document.getElementById('questionText'),
    answersGrid: document.getElementById('answersGrid'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitBtn: document.getElementById('submitBtn'),
    
    // Results
    resultsIcon: document.getElementById('resultsIcon'),
    resultsTitle: document.getElementById('resultsTitle'),
    resultsSubtitle: document.getElementById('resultsSubtitle'),
    scoreCircle: document.getElementById('scoreCircle'),
    scoreNumber: document.getElementById('scoreNumber'),
    scoreTotal: document.getElementById('scoreTotal'),
    scorePercentage: document.getElementById('scorePercentage'),
    correctAnswers: document.getElementById('correctAnswers'),
    wrongAnswers: document.getElementById('wrongAnswers'),
    timeTaken: document.getElementById('timeTaken'),
    reviewBtn: document.getElementById('reviewBtn'),
    retakeBtn: document.getElementById('retakeBtn'),
    
    // Review
    backToResultsBtn: document.getElementById('backToResultsBtn'),
    reviewList: document.getElementById('reviewList'),
    retakeFromReviewBtn: document.getElementById('retakeFromReviewBtn')
};

// ========================================
// INITIALIZATION
// ========================================

function init() {
    loadStats();
    setupEventListeners();
    addSVGGradients();
}

function loadStats() {
    const data = localStorage.getItem('quizMasterStats');
    if (data) {
        const stats = JSON.parse(data);
        elements.bestScore.textContent = stats.bestScore || 0;
        elements.totalQuizzes.textContent = stats.totalQuizzes || 0;
    }
}

function saveStats(score) {
    const data = localStorage.getItem('quizMasterStats');
    let stats = data ? JSON.parse(data) : { bestScore: 0, totalQuizzes: 0 };
    
    if (score > stats.bestScore) {
        stats.bestScore = score;
    }
    stats.totalQuizzes = (stats.totalQuizzes || 0) + 1;
    
    localStorage.setItem('quizMasterStats', JSON.stringify(stats));
    loadStats();
}

function addSVGGradients() {
    // Timer gradient
    const timerSVG = document.querySelector('.timer-ring');
    if (timerSVG && !document.getElementById('timerGradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
        `;
        timerSVG.insertBefore(defs, timerSVG.firstChild);
    }
    
    // Score gradient
    const scoreSVG = document.querySelector('.score-circle svg');
    if (scoreSVG && !document.getElementById('scoreGradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
        `;
        scoreSVG.insertBefore(defs, scoreSVG.firstChild);
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Welcome
    elements.startBtn.addEventListener('click', showSetupScreen);
    
    // Setup
    elements.backBtn.addEventListener('click', showWelcomeScreen);
    elements.beginBtn.addEventListener('click', startQuiz);
    
    // Setup options
    document.querySelectorAll('[data-category]').forEach(btn => {
        btn.addEventListener('click', (e) => selectOption(e.currentTarget, 'category'));
    });
    
    document.querySelectorAll('[data-questions]').forEach(btn => {
        btn.addEventListener('click', (e) => selectOption(e.currentTarget, 'questions'));
    });
    
    document.querySelectorAll('[data-timer]').forEach(btn => {
        btn.addEventListener('click', (e) => selectOption(e.currentTarget, 'timer'));
    });
    
    // Quiz navigation
    elements.prevBtn.addEventListener('click', previousQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.submitBtn.addEventListener('click', submitQuiz);
    
    // Results
    elements.reviewBtn.addEventListener('click', showReviewScreen);
    elements.retakeBtn.addEventListener('click', showSetupScreen);
    
    // Review
    elements.backToResultsBtn.addEventListener('click', showResultsScreen);
    elements.retakeFromReviewBtn.addEventListener('click', showSetupScreen);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
}

function selectOption(button, type) {
    const parent = button.parentElement;
    parent.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const value = button.dataset[type];
    
    if (type === 'category') {
        state.category = value;
    } else if (type === 'questions') {
        state.questionsCount = parseInt(value);
    } else if (type === 'timer') {
        state.timePerQuestion = parseInt(value);
    }
}

// ========================================
// SCREEN NAVIGATION
// ========================================

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showWelcomeScreen() {
    showScreen(elements.welcomeScreen);
}

function showSetupScreen() {
    showScreen(elements.setupScreen);
}

function showQuizScreen() {
    showScreen(elements.quizScreen);
}

function showResultsScreen() {
    showScreen(elements.resultsScreen);
}

function showReviewScreen() {
    displayReview();
    showScreen(elements.reviewScreen);
}

// ========================================
// QUIZ LOGIC
// ========================================

function startQuiz() {
    resetState();
    prepareQuestions();
    
    state.quizStartTime = Date.now();
    state.isQuizActive = true;
    
    showQuizScreen();
    loadQuestion();
    startTimer();
}

function resetState() {
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    state.correctAnswers = 0;
    state.wrongAnswers = 0;
    state.timeRemaining = state.timePerQuestion;
    
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
}

function prepareQuestions() {
    let questions = [...quizData[state.category]];
    
    // Shuffle questions
    questions = shuffleArray(questions);
    
    // Select required number
    state.currentQuestions = questions.slice(0, state.questionsCount);
    
    // Shuffle answers
    state.currentQuestions = state.currentQuestions.map(q => {
        const correctOption = q.options[q.correctAnswer];
        const shuffled = shuffleArray([...q.options]);
        return {
            ...q,
            options: shuffled,
            correctAnswer: shuffled.indexOf(correctOption)
        };
    });
    
    elements.totalQ.textContent = state.currentQuestions.length;
    elements.scoreTotal.textContent = state.currentQuestions.length;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function loadQuestion() {
    const question = state.currentQuestions[state.currentQuestionIndex];
    
    // Update UI
    elements.currentQ.textContent = state.currentQuestionIndex + 1;
    elements.questionText.textContent = question.question;
    
    // Clear previous answers
    elements.answersGrid.innerHTML = '';
    
    // Create answer options
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-option';
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', () => selectAnswer(index));
        elements.answersGrid.appendChild(button);
    });
    
    // Update navigation
    updateNavigation();
    updateProgress();
    resetTimer();
    
    // Restore previous answer
    if (state.userAnswers[state.currentQuestionIndex] !== undefined) {
        const prevAnswer = state.userAnswers[state.currentQuestionIndex];
        selectAnswer(prevAnswer.selectedAnswer, false);
    }
}

function selectAnswer(index, autoAdvance = true) {
    const currentAnswer = state.userAnswers[state.currentQuestionIndex];
    if (currentAnswer?.submitted) return;
    
    // Clear previous selection
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'wrong');
    });
    
    // Mark selected
    const selectedOption = document.querySelector(`[data-index="${index}"]`);
    selectedOption.classList.add('selected');
    
    // Store answer
    state.userAnswers[state.currentQuestionIndex] = {
        selectedAnswer: index,
        submitted: false
    };
    
    // Enable next/submit
    elements.nextBtn.disabled = false;
    elements.submitBtn.disabled = false;
    
    // Check answer
    checkAnswer(index);
    
    // Auto advance
    if (autoAdvance && state.currentQuestionIndex < state.currentQuestions.length - 1) {
        setTimeout(nextQuestion, 1500);
    }
}

function checkAnswer(selectedIndex) {
    const question = state.currentQuestions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctAnswer;
    
    // Disable all options
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.add('disabled');
        opt.style.pointerEvents = 'none';
    });
    
    // Mark as submitted
    if (state.userAnswers[state.currentQuestionIndex]) {
        state.userAnswers[state.currentQuestionIndex].submitted = true;
    }
    
    // Stop timer
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
    
    const selectedOption = document.querySelector(`[data-index="${selectedIndex}"]`);
    const correctOption = document.querySelector(`[data-index="${question.correctAnswer}"]`);
    
    if (isCorrect) {
        selectedOption.classList.add('correct');
        state.correctAnswers++;
        state.score++;
    } else {
        selectedOption.classList.add('wrong');
        correctOption.classList.add('correct');
        state.wrongAnswers++;
    }
}

function updateNavigation() {
    const isFirst = state.currentQuestionIndex === 0;
    const isLast = state.currentQuestionIndex === state.currentQuestions.length - 1;
    
    elements.prevBtn.style.visibility = isFirst ? 'hidden' : 'visible';
    
    if (isLast) {
        elements.nextBtn.style.display = 'none';
        elements.submitBtn.style.display = 'inline-flex';
    } else {
        elements.nextBtn.style.display = 'inline-flex';
        elements.submitBtn.style.display = 'none';
    }
    
    const hasAnswer = state.userAnswers[state.currentQuestionIndex] !== undefined;
    elements.nextBtn.disabled = !hasAnswer;
    elements.submitBtn.disabled = !hasAnswer;
}

function updateProgress() {
    const progress = ((state.currentQuestionIndex + 1) / state.currentQuestions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
        state.currentQuestionIndex++;
        loadQuestion();
        startTimer();
    }
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        loadQuestion();
        startTimer();
    }
}

function submitQuiz() {
    state.quizEndTime = Date.now();
    state.isQuizActive = false;
    
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
    
    displayResults();
    saveStats(state.score);
    showResultsScreen();
}

// ========================================
// TIMER
// ========================================

function startTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
    
    state.timeRemaining = state.timePerQuestion;
    updateTimerDisplay();
    
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        
        if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function resetTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
    state.timeRemaining = state.timePerQuestion;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    elements.timerText.textContent = state.timeRemaining;
    
    const circumference = 100.53;
    const progress = (state.timeRemaining / state.timePerQuestion) * circumference;
    elements.timerRing.style.strokeDashoffset = circumference - progress;
    
    // Color changes
    elements.timerRing.classList.remove('warning', 'danger');
    if (state.timeRemaining <= 10 && state.timeRemaining > 5) {
        elements.timerRing.classList.add('warning');
    } else if (state.timeRemaining <= 5) {
        elements.timerRing.classList.add('danger');
    }
}

function handleTimeUp() {
    if (state.userAnswers[state.currentQuestionIndex] === undefined) {
        state.wrongAnswers++;
        
        const question = state.currentQuestions[state.currentQuestionIndex];
        const correctOption = document.querySelector(`[data-index="${question.correctAnswer}"]`);
        if (correctOption) {
            correctOption.classList.add('correct');
        }
        
        document.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.add('disabled');
            opt.style.pointerEvents = 'none';
        });
    }
    
    setTimeout(() => {
        if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
            nextQuestion();
        } else {
            submitQuiz();
        }
    }, 2000);
}

// ========================================
// RESULTS
// ========================================

function displayResults() {
    const totalTime = Math.round((state.quizEndTime - state.quizStartTime) / 1000);
    const percentage = Math.round((state.score / state.currentQuestions.length) * 100);
    
    // Update text
    elements.resultsTitle.textContent = getResultTitle(percentage);
    elements.resultsSubtitle.textContent = getResultMessage(percentage);
    
    // Update score
    elements.scorePercentage.textContent = `${percentage}%`;
    elements.correctAnswers.textContent = state.correctAnswers;
    elements.wrongAnswers.textContent = state.wrongAnswers;
    elements.timeTaken.textContent = formatTime(totalTime);
    
    // Animate score circle
    const circumference = 339.3;
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => {
        elements.scoreCircle.style.strokeDashoffset = offset;
    }, 100);
    
    // Animate number count
    animateNumber(elements.scoreNumber, 0, state.score, 1500);
}

function getResultTitle(percentage) {
    if (percentage >= 90) return 'Outstanding! 🎉';
    if (percentage >= 80) return 'Excellent Work! 🌟';
    if (percentage >= 70) return 'Great Job! 👏';
    if (percentage >= 60) return 'Good Effort! 👍';
    return 'Keep Practicing! 💪';
}

function getResultMessage(percentage) {
    if (percentage >= 90) return 'You\'ve mastered this topic!';
    if (percentage >= 80) return 'Impressive performance!';
    if (percentage >= 70) return 'You\'re on the right track!';
    if (percentage >= 60) return 'Good work, keep improving!';
    return 'Practice makes perfect!';
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current);
    }, 16);
}

// ========================================
// REVIEW
// ========================================

function displayReview() {
    elements.reviewList.innerHTML = '';
    
    state.currentQuestions.forEach((question, index) => {
        const reviewItem = createReviewItem(question, index);
        elements.reviewList.appendChild(reviewItem);
    });
}

function createReviewItem(question, index) {
    const userAnswer = state.userAnswers[index];
    const isCorrect = userAnswer && userAnswer.selectedAnswer === question.correctAnswer;
    
    const item = document.createElement('div');
    item.className = 'review-item';
    
    let userAnswerHTML = '';
    if (userAnswer) {
        userAnswerHTML = `
            <div class="review-answer ${isCorrect ? 'correct-answer' : 'user-answer'}">
                <span class="review-answer-label">Your Answer</span>
                <div>${question.options[userAnswer.selectedAnswer]}</div>
            </div>
        `;
    } else {
        userAnswerHTML = `
            <div class="review-answer user-answer">
                <span class="review-answer-label">Your Answer</span>
                <div>Not answered (time expired)</div>
            </div>
        `;
    }
    
    const correctAnswerHTML = !isCorrect ? `
        <div class="review-answer correct-answer">
            <span class="review-answer-label">Correct Answer</span>
            <div>${question.options[question.correctAnswer]}</div>
        </div>
    ` : '';
    
    item.innerHTML = `
        <div class="review-item-header">
            <span class="review-question-number">Question ${index + 1}</span>
            <span class="review-status ${isCorrect ? 'correct' : 'wrong'}">
                ${isCorrect ? '✓ Correct' : '✗ Wrong'}
            </span>
        </div>
        <div class="review-question">${question.question}</div>
        <div class="review-answers">
            ${userAnswerHTML}
            ${correctAnswerHTML}
        </div>
    `;
    
    return item;
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

function handleKeyboard(e) {
    if (!state.isQuizActive) return;
    
    // Number keys (1-4) for answers
    if (e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key) - 1;
        const option = document.querySelector(`[data-index="${index}"]`);
        if (option && !option.classList.contains('disabled')) {
            selectAnswer(index);
        }
    }
    
    // Arrow keys
    if (e.key === 'ArrowRight' && !elements.nextBtn.disabled) {
        nextQuestion();
    }
    
    if (e.key === 'ArrowLeft' && state.currentQuestionIndex > 0) {
        previousQuestion();
    }
    
    // Enter to submit
    if (e.key === 'Enter' && state.currentQuestionIndex === state.currentQuestions.length - 1 && !elements.submitBtn.disabled) {
        submitQuiz();
    }
}

// ========================================
// PREVENT ACCIDENTAL REFRESH
// ========================================

window.addEventListener('beforeunload', (e) => {
    if (state.isQuizActive) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    }
});

// ========================================
// INITIALIZE
// ========================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// CONSOLE
// ========================================

console.log(
    '%c✨ QuizMaster Pro v3.0',
    'color: #667eea; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cPremium Minimal Design',
    'color: #764ba2; font-size: 12px;'
);