var questionsEl = document.querySelector('#questions')
var timerEl = document.querySelector('.time');
var choicesEl = document.querySelector('#choices')
var submitBtn = document.querySelector('#submitscore');
var startBtn = document.querySelector('#start');
var initalsEl = document.querySelector('#initals');
var rightwrongEl = document.querySelector('#rightwrong')

document.getElementById('finish').setAttribute('style', 'display:none;');
document.getElementById('questions').setAttribute('style', 'display: none;');

var quiz = [
    {
        question: "How many bones are in the human body?",
        options: ['404', '3', '206', '372'],
        correctAnswer: '206'
    },
    {
        question: 'Which cells in the blood do not have a nucleus?',
        options: ['Monocyte', 'Basophil', 'Erthrocyte', 'Lymphocyte'],
        correctAnswer: 'Erthrocyte'
    },
    {
        question: 'Which of the following cranial nerves is related to the sense of smell?',
        options: ['Olfactory', 'Trigeminal', 'Optic', 'Facial'],
        correctAnswer: 'Olfactory'
    },
    {
        question: 'Which of the following substances is found in greater quantity in exhaled air?',
        options: ['Carbon monoxide', 'Carbon dioxide', 'Xenon', 'Nitrogen'],
        correctAnswer: 'Carbon dioxide'

    },
    {
        question: 'Which of the following is a structural, fibrous protein found in the dermis?',
        options: ['Sebum', 'Melanin', 'Elastin', 'Collagen'],
        correctAnswer: 'Collagen'
    },
]


var time = questionsEl.length * 15;
var timerId;

start.addEventListener('click', startQuizButton);
function startQuizButton() {
    console.log("you clicked me");
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + "seconds left."
        if (secondsLeft === 0) {
            clearInterval(timeInterval)
            sendMessage();
        }
    }, 1000);
    function sendMessage() {
        timerEl.textContent = "";
    
    }

    document.getElementById('finish').setAttribute('style', 'display:none;');
    document.getElementById('questions').setAttribute('style', 'display: none;');

    document.getElementById("begining").setAttribute('style', 'display: none;');
    document.getElementById('questions').setAttribute('style', 'display: none;');

    var currentQuestion = 0;
    showQuestion(currentQuestion);
}

//currentQuestion is only pulling the first question. i need it to cycle through the questions one by one after answering the previous one
function showQuestion(currentQuestion) {

    document.getElementById('questions').setAttribute('style', 'display: block, center;');
    var questionTitle1 = document.querySelector('#title')
    var buttonOption1 = document.querySelector("#option1");
    var buttonOption2 = document.querySelector("#option2");
    var buttonOption3 = document.querySelector("#option3");
    var buttonOption4 = document.querySelector("#option4");
    questionTitle1.textContent = quiz[currentQuestion].question;
    buttonOption1.textContent = quiz[currentQuestion].options[0];
    buttonOption2.textContent = quiz[currentQuestion].options[1];
    buttonOption3.textContent = quiz[currentQuestion].options[2];
    buttonOption4.textContent = quiz[currentQuestion].options[3];

    var currentQuestion = quiz[currentQuestion].question;
    console.log("my current que is " + currentQuestion);

    var userChoice = "";
    if (userChoice === buttonOption2) {
        console.log('correct')
        userChoice = ("Correct!")
    } else {
        console.log("wrong")
        userChoice = ("Wrong!")
    }

}

