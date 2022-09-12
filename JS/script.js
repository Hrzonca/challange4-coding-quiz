var startBtn = document.querySelector('.start');
var timerEl = document.querySelector('.time');
var finalScore = document.querySelector('#topscore');
var questionButton = document.querySelectorAll('.button')
var questions = document.querySelector('#questions')
var score = document.querySelector('#topscore');
var start = document.querySelector(".start");
var questionIndex = 0;
var time = questions.length * 60;
var timerId;
var score = 0;
var viewHighScore = 0;

//recognizing you clicked the start quiz button. todo: connect the questions to this button
start.addEventListener('click', startQuizButton);
function startQuizButton() {
    console.log("you clicked me");
}


