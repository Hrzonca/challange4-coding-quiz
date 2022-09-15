//just for the questions 
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
//other question but just trying to work on question 1 first 
var buttonOption1 = document.querySelector("#option1")
var buttonOption2 = document.querySelector("#option2")
var buttonOption3 = document.querySelector("#option3")
var buttonOption4 = document.querySelector("#option4")
buttonOption1.textContent = quiz[currentQuestion].options[0];
buttonOption2.textContent = quiz[currentQuestion].options[1];
buttonOption3.textContent = quiz[currentQuestion].options[2];
buttonOption4.textContent = quiz[currentQuestion].options[3];




var currentQuestion = 2;
var buttonOption1 = document.querySelector("#option1")
var buttonOption2 = document.querySelector("#option2")
var buttonOption3 = document.querySelector("#option3")
var buttonOption4 = document.querySelector("#option4")
buttonOption1.textContent = quiz[currentQuestion].options[0];
buttonOption2.textContent = quiz[currentQuestion].options[1];
buttonOption3.textContent = quiz[currentQuestion].options[2];
buttonOption4.textContent = quiz[currentQuestion].options[3];



var currentQuestion = 3;
var buttonOption1 = document.querySelector("#option1")
var buttonOption2 = document.querySelector("#option2")
var buttonOption3 = document.querySelector("#option3")
var buttonOption4 = document.querySelector("#option4")
buttonOption1.textContent = quiz[currentQuestion].options[0];
buttonOption2.textContent = quiz[currentQuestion].options[1];
buttonOption3.textContent = quiz[currentQuestion].options[2];
buttonOption4.textContent = quiz[currentQuestion].options[3];



var currentQuestion = 4;
var buttonOption1 = document.querySelector("#option1")
var buttonOption2 = document.querySelector("#option2")
var buttonOption3 = document.querySelector("#option3")
var buttonOption4 = document.querySelector("#option4")
buttonOption1.textContent = quiz[currentQuestion].options[0];
buttonOption2.textContent = quiz[currentQuestion].options[1];
buttonOption3.textContent = quiz[currentQuestion].options[2];
buttonOption4.textContent = quiz[currentQuestion].options[3];

//tryign to get the userChoice to save and grade 
var userChoice = "";
if (userChoice === buttonOption2) {
    console.log('correct')
    userChoice = ("Correct!")
} else {
    console.log("wrong")
    userChoice = ("Wrong!")
}
// created lis


//timer that is put in the startQuizButton function
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
