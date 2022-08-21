// Get document elements //

const startButton = document.getElementById('start-quiz')
const questionScreenElement = document.getElementById('question-screen')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// Start quiz //

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    questionScreenElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    
}

function selectAnswer() {

}

// Questsions list //

const questions = [ {
    question: "True or False: Functions can be passed as arguments to other functionsl",
    answers: [
        {text: "true", correct: true },
        {text: "false", correct: false}
    ]
},
{
    question: "Which operator is used to represent AND statments?",
    answers: [
        {text: "&&", correct: true},
        {text: "||", correct: false},
        {text: "+", correct: false},
        {text: "&", correct: false}
    ]
},
{
    question: "Which of the following is an example of an array?",
    answers: [
        {text: "var array = {}", correct: false },
        {text: "var array = ()", correct: false },
        {text: "var array = []", correct: true },
        {text: "var array = <>", correct: false }
    ]
}

]