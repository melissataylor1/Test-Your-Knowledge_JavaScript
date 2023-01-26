
//variables for HTML sections and their elements 
const viewHighScore = document.querySelector('.view-highscores');
const timer= document.querySelector('#timer');
const startContent = document.querySelector('.start-content');
const startBtn = document.querySelector('.start-btn');
const quizContent = document.querySelector('.quiz-content');
const questionText = document.querySelector('.questions');
const answerOptions = document.querySelectorAll('.answer-btn');
const checkScore = document.querySelector('.check-score');
const finishContent = document.querySelector('.finish-content');
const finalScore = document.querySelector('.final-score');
const finishText = document.querySelector('.finish-text');
const highScores = document.querySelector('.highscore-content');
const scoreList = document.querySelector('.highscore-list');
const submitBtn = document.querySelector('.submit-btn');
const backBtn = document.querySelector('.return-home-btn');
const clearBtn = document.querySelector('.clear-highscore-btn');

//Answer IDs
const optionA = document.querySelector('#option-a');
const optionB = document.querySelector('#option-b');
const optionC = document.querySelector('#option-c');
const optionD = document.querySelector('#option-d');

//Questions Array
let questions = [
    {
        q: "The condition in an if / else statement is enclosed within ____.",
        options: ['A) quotes','B) curly crackets', 'C) parentheses', 'D)square brackets'],
        a: '3'
    },
    {
        q: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        options: ['A) Throws an error', 'B) Ignores the statements', 'C) Gives a warning','D)None of the above'],
        a: '2'
    },
    {
        q: "Repeats until a specific condition becomes false:",
        options: ['A) The DOM', 'B) DO WHile Loop', 'C) For Loop Example', 'D) Variable'],
        a: '3'
    },
    {
        q: "CSS files are linked in what part of the HTML file.",
        options: ['A) header', 'B) main', 'C) footer', 'D) head'],
        a: '4'
    },
    {
        q: "Can read and alter the elements on a webpage",
        options: ['A).innerHTML', 'B) For Loop Example', 'C) intervalid', 'D) AddEventListeners'],
        a: '1'
    },
    {
        q: "Which of the following keywords is used to define a variable in Javascript?",
        options:['A) var', 'B) let', 'C) var & let', 'D) if'],
        a: '3'
    }
];

let score = [];
let questionNumber = 0;
let questionCount = 1;
let timeLeft = 50;

//timer function
function setTime() {
  let timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
   
     //Stops quiz at 0 seconds
    if (timeLeft == 0) {
      clearInterval(timerInterval);
      //If quiz finishes because time ran out, displays message instead of "END"
      finishText.textContent = 'Out of time :(';
      //Initates game over function
      gameOver();

      //If time !== 0 then quiz finishes when no more questions
  } else if (questionCount >= questions.length + 1){
      clearInterval(timerInterval);
      gameOver();
  }
}, 1000);
};
