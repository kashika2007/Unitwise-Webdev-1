// Quiz Questions Array
const quizQuestions = [
    {
        question:  "JavaScript is mainly used for Frontend or Backend?",
        answer: "frontend"
    },
    {
        question: "Which function is used to print messages to the browser console?",
        answer: "console.log"
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        answer: "const"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "What symbol is used for comments in CSS ?",
        answer: "/* */"
    }
];

function runQuiz() {
    let score = 0; // Score Initialization

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        // If user pressed cancel
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        // Normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check the answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! ✅");
        } else {
            alert(Wrong ❌\nCorrect answer: ${quizQuestions[i].answer});
        }
    }

    // Display Final Score
    alert(Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length});
}

// Run quiz
runQuiz();