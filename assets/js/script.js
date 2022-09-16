// Get document elements //

const startButton = document.getElementById('start-quiz')
const questionScreenElement = document.getElementById('question-screen')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const finishScreen = document.getElementById('finish-screen')
const timer = document.getElementById('timer')
const question = document.getElementById('question')
const choice1 = document.getElementById('choice-1')
const choice2 = document.getElementById('choice-2')
const choice3 = document.getElementById('choice-3')
const choice4 = document.getElementById('choice-4')
let questionIndex 
const enterInitials = document.getElementById('enter-initials')
const submitButton = document.getElementById('submit')

// Start quiz //



function startQuiz() {
    console.log('Started')
    questionIndex = 0
    startButton.classList.add('hide')
    questionScreenElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    question.textContent = questions[questionIndex].question
    choice1.textContent = questions[questionIndex].choiceA
    choice2.textContent = questions[questionIndex].choiceB
    choice3.textContent = questions[questionIndex].choiceC
    choice4.textContent = questions[questionIndex].choiceD
}

function selectAnswer(event) {
    console.log(event)
    if (event.target.matches("button")) {
        console.log("I clicked a button")
        if (event.target.textContent === questions[questionIndex].answer) {
            console.log("you clicked the right answer")
        }
        else {
            console.log("you clicked the wrong answer")
        }
        questionIndex++
        if (questionIndex >= questions.length) {
            console.log("game is over")
            questionScreenElement.classList.add('hide')
            finishScreen.classList.remove('hide')
        }
        else {
            setNextQuestion()
        }
    }
}

// Questsions list //

const questions = [ {
    question: "Which data type represents a logical entity with values of true and false?",
        choiceA: "String",
        choiceB: "Boolean",
        choiceC: "Number",
        choiceD: "Null",
        answer: "Boolean"
},
{
    question: "Which operator is used to represent AND statments?",
    choiceA: "+",
    choiceB: "&&",
    choiceC: "===",
    choiceD: "||",
    answer: "&&"
},
{
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "<scripting>",
    choiceB: "<script>",
    choiceC: "<javascript>",
    choiceD: "<link>",
    answer: "<script>"
}

]

function viewHighscores(event) {
    if (event.target.matches("button")) {
        console.log("I clicked submit")
}
}

startButton.addEventListener('click', startQuiz)
questionScreenElement.addEventListener('click', selectAnswer)
submitButton.addEventListener('click', viewHighscores)