var questionsEl = document.querySelector('#questions')
var timerEl = document.querySelector('.time');
var choicesEl = document.querySelector('#choices')
var submitBtn = document.querySelector('#submitscore');
var startBtn = document.querySelector('#start');
var initalsEl = document.querySelector('#initals');
var rightwrongEl = document.querySelector('#rightwrong');
var titleOption = document.getElementById("titleOption");

document.getElementById('finish').setAttribute('style', 'display:none;');
document.getElementById('questions').setAttribute('style', 'display: none;');
var I = 0;



var time = quiz.length * 12;
var timerId;

start.addEventListener('click', startQuizButton);
function startQuizButton() {
    console.log("you clicked me");
    timerId = setInterval(clock, 1000);
    timerEl.textContent = timerId;


    document.getElementById('finish').setAttribute('style', 'display:none;');
    document.getElementById('questions').setAttribute('style', 'display: block;');

    document.getElementById("begining").setAttribute('style', 'display: none;');
    

   
    showQuestion();
}

function clock() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    } 
}
 
function showQuestion() {
  
    var currentQ = quiz[I].question;
    console.log(currentQ);
    var questionTitle1 = document.querySelector('#title');
    questionTitle1.textContent =quiz[I].question;
    titleOption.textContent ="";
    quiz[I].options.forEach(function(choice) {
       var optionsbtn = document.createElement("button");
       optionsbtn.setAttribute("value", choice);
       optionsbtn.setAttribute("class", "titleoptions"); 
       optionsbtn.textContent = choice;
       optionsbtn.onclick = nextQuestion;
       titleOption.appendChild(optionsbtn);


    });
   

}
function nextQuestion() {
    
    I++;

    if (I === quiz.length) {
        endQuiz();
    
    } else {
        showQuestion()
    }

    //look at activies for 
}

function endQuiz() {
    document.getElementById('questions').setAttribute('style', 'display: none;');
clearInterval(timerId);
}

