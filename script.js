var quizRunning = true; //if there is still time then the quiz is true
var questionAnswered = 0; //track the number of questions answered
var trackAnswer = 0;
var score = 0; //baseline score
var highScore = 50; //Max score
var score = document.getElementById('topscore');
var start = document.getElementsByClassName("start");
var question1El = document.getElementById('question1');
var question2El = document.getElementById('question2');
var question3El = document.getElementById('question3');
var question4El = document.getElementById('question4');
var question5El = document.getElementById('question5');
var submitScoreEl = document.getElementById('sumbitscore');
var displayQuestion = document.createElement('questionDisplay')

question1El.style.display = 'none';
question2El.style.display = 'none';
question3El.style.display = 'none';
question4El.style.display = 'none';
question5El.style.display = 'none';
submitScoreEl.style.display = 'none';

document.getElementById('start').onclick = function () {
    anatomyQuestion
}
var anatomyQuestion = {
    questions: {
        0: 'How many bones are in the human body?',
        1: 'Which cells in the blood do not have a nucleus?',
        2: ' Which of the following is a structural, fibrous protein found in the dermis?',
        3: 'Which of the following cranial nerves is related to the sense of smell?',
        4: 'Which of the following substances is found in greater quantity in exhaled air?',
    }
};

var anatomyAnswers = {
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
    0: '2',
    1: '2',
    2: '3',
    3: '0',
    4: '1',

}

//whichever answer the user chooses, they are prompted if it is right or wrong. if right then the quiz moves on and add 1 second. if wrong the quiz moves on but 5 seconds is removed. has to be done with all the questions. 
question1El.addEventListener('click', function () {
if (questionDisplay.textContent === 'Which of the following substances is found in greater quantity in exhaled air?' && question5El === "Carbon monoxide") {
    console.log("Correct!")
    questionAnswered = 2;
    trackAnswer = 
}
    
})

function question2El() {
    if (userChoice === '2') {
        alert('Correct!');
    } else {
        alert('Wrong!')
    }
}
function question3El() {
    if (userChoice === '3') {
        alert('Correct!');
    } else {
        alert('Wrong!')
    }
}
function question4El() {
    if (userChoice === '0') {
        alert('Correct!');
    } else {
        alert('Wrong!')
    }
}
function question5El() {
    if (userChoice === '1') {
        alert('Correct!');
    } else {
        alert('Wrong!')
    }
}