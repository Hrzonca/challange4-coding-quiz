var score = 0;
var highScore = 50;
var score = document.querySelector('#topscore');
var start = document.querySelector(".start");

var question = [
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
document.getElementsByClassName('.start').onclick = function () {
    document.getElementById('#question').style.display = "none"
}
//i dont want them to be prompts
//for (var i = 0; i < question.length; i++) {
//  var response = window.prompt(question[i].question);
//if (response == question[i].correctAnswer) {
//  score++
//alert('correct!')
//   } else {
//      alert('Wrong!')
//}
//}


//alert('you got' + score + "/" + question.length);

//var timeEl = document.querySelector(".time");
//var secondsLeft = 60;
//function setTime() {
//  var timerInterval = setInterval(function () {
//    secondsLeft--;
//  if (secondsLeft === 0) {
//    clearInterval(timerInterval)
//  sendMessage();
//}
//}, 6000)
//}

//function sendMessage() {
//  timeEl.textContent = 'Sorry you are out of time!'
//}
//setTime();


score.addEventListener('click', viewHighScore);
function viewHighScore() {
    console.log('viewing high score')

    //take you to the view high scores page (need to make a for loop or function for that)
}

//recognizing you clicked the start quiz button. todo: connect the questions to this button
start.addEventListener('click', startQuizButton);
function startQuizButton() {
    console.log("you clicked me");
}

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 60);
        display.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 6000)
}
