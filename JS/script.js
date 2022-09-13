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

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

start.addEventListener('click', startQuizButton);
function startQuizButton() {
    console.log("you clicked me");

    document.getElementById('finish').setAttribute('style', 'display:none;');
    document.getElementById('questions').setAttribute('style', 'display: none;');

    document.getElementById("begining").setAttribute('style', 'display: none;');
    document.getElementById('questions').setAttribute('style', 'display: none;');

    currentQuestion = 0;
    showQuestion();
}
function showQuestion() {
    document.getElementById('questions').setAttribute('style', 'display: block, center;');

    var currentQuestion = quiz[currentQuestionIndex].question;
    console.log("my current que is " + currentQuestion);
   
    // created lis
    var myoptionEl = quiz[currentQuestionIndex].options[0];
    console.log(myoptionEl);

}
