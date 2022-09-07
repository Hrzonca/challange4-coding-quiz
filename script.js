var quizRunning = true;
var questionAnswer = 0;
var score = document.getElementById('topscore');
var start = document.getElementsByClassName("start");
var question1El = document.getElementsById('question1');
var question2El = document.getElementsById('question2');
var question3El = document.getElementsById('question3');
var question4El = document.getElementsById('question4');
var question5El = document.getElementsById('question5');
var submitScoreEl = document.getElementById('sumbitscore');

question1El.style.display = 'none';
question2El.style.display = 'none';
question3El.style.display = 'none';
question4El.style.display = 'none';
question5El.style.display = 'none';
submitScoreEl.style.display = 'none';

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
            3: '372'
        },
        1: {
            0: 'Monocyte',
            1: 'Basophil',
            2: 'Erythroctye',
            3: 'Lymphocyte'
        },
        2: {
            0: 'Sebum',
            1: 'Melanin',
            2: 'Elastin',
            3: 'Collagen'
        },
        3: {
            0: 'Optic',
            1: 'Trigeminal',
            2: 'Olfactory',
            3: 'Facial'
        },
        4: {
            0: 'Carbon Dioxide',
            1: 'Carbon monoxide',
            2: 'Xenon',
            3: 'Nitrogen'
        },
    }

}

var correctAnswers = {

}