var quizRunning = true; //if there is still time then the quiz is true
var questionAnswered = 0; //track the number of questions answered
var trackAnswer = 0;
var score = 0; //baseline score
var highScore = 50; //Max score
var score = document.querySelector('#topscore');
var start = document.querySelector(".start");
var question1El = document.getElementById('question1');
var question2El = document.getElementById('question2');
var question3El = document.getElementById('question3');
var question4El = document.getElementById('question4');
var question5El = document.getElementById('question5');
var submitScoreEl = document.getElementById('sumbitscore');



question1El.style.display = 'none';
question2El.style.display = 'none';
question3El.style.display = 'none';
question4El.style.display = 'none';
question5El.style.display = 'none';
submitScoreEl.style.display = 'none';

//registers that you clicked the button
score.addEventListener('click', viewHighScore);
function viewHighScore() {
    console.log('viewing high score')
}

//recognizing you clicked the start quiz button. todo: connect the questions to this button
start.addEventListener('click', startQuizButton);
function startQuizButton() {
    console.log("you clicked me");

    //document.querySelector('#start').addEventListener('click', start)

    var message = 'Out of Time!'
    function countDown() {
        var timeEl = document.querySelector(".timeLeft")
        var timeLeft = 60;

        var timeInterval = setInterval;
        (function () {
            if (timeLeft > 1) {
                timeEl.textContent = timeLeft + 'seconds remaining';
                timeLeft--;
            } else {
                timeEl.textContent = '';
                clearInterval(timeLeft);
                message();

            }

        }, 6000);
    }
}
//Start button to move to the first question
//startQuizButton.addEventListener('click', function() {}
var anatomyQuestion = {
    questions: {
        0: 'How many bones are in the human body?',
        1: 'Which cells in the blood do not have a nucleus?',
        2: 'Which of the following is a structural, fibrous protein found in the dermis?',
        3: 'Which of the following cranial nerves is related to the sense of smell?',
        4: 'Which of the following substances is found in greater quantity in exhaled air?',
    }
};

var anatomyOptions = {
    answers: {
        0: {
            0: "404",
            1: '3',
            2: '206',
            3: '372',
        },
        1: {
            0: 'Monocyte',
            1: 'Basophil',
            2: 'Erythroctye',
            3: 'Lymphocyte',
        },
        2: {
            0: 'Sebum',
            1: 'Melanin',
            2: 'Elastin',
            3: 'Collagen',
        },
        3: {
            0: 'Olfactory',
            1: 'Trigeminal',
            2: 'Optic',
            3: 'Facial',
        },
        4: {
            0: 'Carbon monoxide',
            1: 'Carbon dixide',
            2: 'Xenon',
            3: 'Nitrogen',
        },
    }

}

var correctAnswers = {
    correct: {
        0: '2', //206
        1: '2', //Erythocytes
        2: '3', //Collagen
        3: '0', //Olfactory
        4: '1', //Carbon dioxide

    }
}
//make a for loop to cycle thrpugh questions randomly?
//whichever answer the user chooses, they are prompted if it is right or wrong. if right then the quiz moves on and add 1 second. if wrong the quiz moves on but 5 seconds is removed. has to be done with all the questions. 
question1El.addEventListener('click', function () {
    if (question.textContent === 'How many bones are in the human body?' && question5El === "206") {
        console.log("Correct!")
        questionAnswered = 1;

    }

})
question2El.addEventListener('click', function () {
    if (question.textContent === 'Which cells in the blood do not have a nucleus?' && question2El === "Erthroctyes") {
        console.log("Correct!")
        questionAnswered = 2;

    }

})
question3El.addEventListener('click', function () {
    if (question.textContent === 'Which of the following is a structural, fibrous protein found in the dermis?' && question3El === "Collagen") {
        console.log("Correct!")
        questionAnswered = 3;

    }

})
question4El.addEventListener('click', function () {
    if (question.textContent === 'Which of the following cranial nerves is related to the sense of smell?' && question4El === "Olfactory") {
        console.log("Correct!")
        questionAnswered = 4;

    }

})
question5El.addEventListener('click', function () {
    if (question.textContent === 'Which of the following substances is found in greater quantity in exhaled air?' && question5El === "Carbon dioxide") {
        console.log("Correct!")
        questionAnswered = 5;

    }

})

//include all right answers to the questions, do the same for wrong answers
function rightAnswer(event) {
    event.preventDefault();
    console.log(event);
    var rResponse = 'Correct!'
}

function wrongAnswer(event) {
    event.preventDefault();
    console.log(event);
    var wResponse = 'Wrong!'

}

