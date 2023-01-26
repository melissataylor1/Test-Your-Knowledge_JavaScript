
//variables for HTML sections and their elements 
const viewHighScore = document.querySelector('.view-highscores');
const timer= document.querySelector('#timer');
const startContent = document.querySelector('.start-content');
const startBtn = document.querySelector('.start-btn');
const quizContent = document.querySelector('.quiz-content');
const questionText = document.querySelector('.questions');
const answerOption = document.querySelectorAll('.answer-btn');
const checkScore = document.querySelector('.check-score');
const finishContent = document.querySelector('.finish-content');
const finalScore = document.querySelector('.final-score');
const finish = document.querySelector('.finish-text');
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
var questions = [
    {
        q: "The condition in an if / else statement is enclosed within ____.",
        optionA: "<button class='answer-button' id='A' onclick='answerCheck(event)'>quotes</button>",
        optionB: "<button class='answer-button' id='B' onclick='answerCheck(event)'>curly brackets</button>",
        optionC: "<button class='answer-button' id='C' onclick='answerCheck(event)'>parentheses</button>",
        optionD: "<button class='answer-button' id='D' onclick='answerCheck(event)'>square brackets</button>",
        answer: "C"
    },{
        q: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        optionA: "<button class='answer-button' id='A' onclick='answerCheck(event)'>Throws an error</button>",
        optionB: "<button class='answer-button' id='B' onclick='answerCheck(event)'>Ignores the statements</button>",
        optionC: "<button class='answer-button' id='C' onclick='answerCheck(event)'>Gives a warning</button>",
        optionD: "<button class='answer-button' id='D' onclick='answerCheck(event)'>None of the above</button>",
        answer: "B"
    },{
        q: "Repeats until a specific condition becomes false:",
        optionA: "<button class='answer-button' id='A' onclick='answerCheck(event)'>the DOM</button>",
        optionB: "<button class='answer-button' id='B' onclick='answerCheck(event)'>Do While Loop</button>",
        optionC: "<button class='answer-button' id='C' onclick='answerCheck(event)'>For Loop Example</button>",
        optionD: "<button class='answer-button' id='D' onclick='answerCheck(event)'>What is a variable?</button>",
        answer: "C"
    },{
        q: "CSS files are linked in what part of the HTML file.",
        optionA: "<button class='answer-button' id='A' onclick='answerCheck(event)'>header</button>",
        optionB: "<button class='answer-button' id='B' onclick='answerCheck(event)'>main</button>",
        optionC: "<button class='answer-button' id='C' onclick='answerCheck(event)'>footer</button>",
        optionD: "<button class='answer-button' id='D' onclick='answerCheck(event)'>head</button>",
        answer: "D"
    },{
        q: "Can read and alter the elements on a webpage",
        optionA: "<button class='answer-button' id='A' onclick='answerCheck(event)'>addEventListener</button>",
        optionB: "<button class='answer-button' id='B' onclick='answerCheck(event)'>For Loop Example</button>",
        optionC: "<button class='answer-button' id='C' onclick='answerCheck(event)'>intervalid</button>",
        optionD: "<button class='answer-button' id='D' onclick='answerCheck(event)'>.innerHTML</button>",
        answer: "D"
    }
    ,{
        q: "Which of the following keywords is used to define a variable in Javascript?",
        optionA: "<button class='answer-button' id='A' onclick='answerCheck(event)'>var</button>",
        optionB: "<button class='answer-button' id='B' onclick='answerCheck(event)'>let</button>",
        optionC: "<button class='answer-button' id='C' onclick='answerCheck(event)'>var & let</button>",
        optionD: "<button class='answer-button' id='D' onclick='answerCheck(event)'>if</button>",
        answer: "C"
    }
];
