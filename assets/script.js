
//variables for HTML sections and their elements 
const viewHighScore = document.querySelector('.view-highscores');
const timer= document.querySelector('#timer');
const startContent = document.querySelector('.start-content');
const startBtn = document.querySelector('.start-btn');
const quizContent = document.querySelector('.quiz-content');
const questionText = document.querySelector('.questions');
const answerOptions = document.querySelectorAll('.answer-btn');
const checkAnswer = document.querySelector('.check-answer');
const finishContent = document.querySelector('.finish-content');
const finalScore = document.querySelector('.final-score');
const finishText = document.querySelector('.finish-text');
const highScores = document.querySelector('.highscore-content');
const scoreList = document.querySelector('.highscore-list');
const submitBtn = document.querySelector('.submit-btn');
const backBtn = document.querySelector('.return-home-btn');
const clearBtn = document.querySelector('.clear-highscore-btn');
const initialsInput = document.querySelector('#initials');

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


let questionNumber = 0;
let questionCount = 1;
let score = [];
let timeLeft = 50;

//TIMER FUNCTION
function setTime() {
  let timerInterval = setInterval(function () {
    //makes timer count backwards
    timeLeft--;
    //makes timer span in HTML print the time
    timer.textContent = timeLeft;
   
     //Stops quiz at 0 seconds
    if (timeLeft == 0) {
      clearInterval(timerInterval);
      //If quiz finishes bc time ran out, displays message below instead of "END"
      //And initates game over function
      finishText.textContent = 'Out of time :(';
      gameOver();

    //If time !== 0 then quiz finishes when no more questions
  } else if (questionCount >= questions.length + 1){
      clearInterval(timerInterval);
      gameOver();
  }
}, 1000);
};

//QUIZ START
function startQuiz() {
  //hides home page content
  startContent.style.display = 'none';
  //shows first question and starts the time
  quizContent.style.display = 'block';
  questionNumber = 0;
  setTime();
  showQuestion(questionNumber);
};


//QUESTION DISPLAY
//Sets text content of questions & answers to corresponding array values
function showQuestion(n) {
//n = parameter for question within array of questions
  questionText.textContent = questions[n].q;
  //assigns option with value in button element in question section
  optionA.textContent = questions[n].options[0];
  optionB.textContent = questions[n].options[1];
  optionC.textContent = questions[n].options[2];
  optionD.textContent = questions[n].options[3];
  //Stores index of current question in questionNumber variable
  questionNumber = n;
};

//EVENTLISTENER FOR START BUTTON CLICK
startBtn.addEventListener('click', startQuiz);

//CHECK ANSWER
function checkAnswerChoice (event) {
  event.preventDefault();
//displays answer feedback for 1 second
  checkAnswer.style.display = 'block';
  setTimeout(function () {
      checkAnswer.style.display = 'none';
  }, 1000);

  //Tests if correct answer condition is met 
  if (questions[questionNumber].a === event.target.value) {
      checkAnswer.textContent = 'Correct 😃!';
  } else {
      checkAnswer.textContent = 'Incorrect 😟!';
      //10 second penalty for wrong answers
      timeLeft = timeLeft - 10;
  };

  if (questionNumber < questions.length - 1) {
      showQuestion(questionNumber + 1);
  } else {
      gameOver();
  }

  questionCount++;
};
//Displays the users score 
function gameOver() {
  quizContent.style.display = 'none';
  finishContent.style.display = 'block';
    timeLeft = timeLeft < 0 ? 0 : timeLeft;
    finalScore.textContent = 'Your final score is ' + timeLeft + '.';
}

//Add click event for answerChoice element to call checkAnswerChoice function
answerOptions.forEach(function (click) {
    click.addEventListener('click', checkAnswerChoice);
});


//Renders initials and scores into a score list as <li> elemenets
function renderScores() {
    scoreList.innerHTML = '';
    scoreList.style.display = 'block';

    let highScores = sort();

    //Render new li for each score
    for (let i = 0; i < scores.length; i++) {
        let highScore = highScores[i];

        let li = document.createElement('li');
        li.textContent = highScore.initials + ' - ' + highScore.score;
        li.setAttribute('data-index', i);
        li.style.backgroundColor = 'rgb(' + [210, 186, 236, 0.531].join(',') + ')';
        scoreList.appendChild(li);
    };

    init();
};

function init() {
    //Retrieve stored scores from local storage
    let storedScores = JSON.parse(localStorage.getItem('scores'));

    //If stored value exists, set scores to those values
    if (storedScores !== null) {
        scores = storedScores;
    } else {
        //If stored value doesn't exist, set scores to an empty array
        scores = [];
    };
    return scores;
};





//Sort scores from highest to lowest
function sort() {
  let unsortedList = init();
  //If scores from init function doesn't exist, exit function 
  if (init == null) {
      return;
  } else {
      //Sort scores from highest value to lowest
      unsortedList.sort(function (a, b) {
          return b.score - a.score;
      })

      return unsortedList;
  };
};

//Store scores and initials to local storage 
function storeScores() {
  //Save initials and score values to highScore
  let highScore = {
      initials: initialsInput.value.trim(),
      score: timeLeft
  };

  //If highScore doesn't exist, exit function
  if (highScore === '') {
      return;
  };

  //Push highScore values to scores array
  scores.push(highScore);

  //Stringify and set key in localStorage to scores array
  localStorage.setItem('scores', JSON.stringify(scores));
  renderScores();
};

//Add click event to submitBtn element
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  finishContent.style.display = 'none';
  //Displays high scores
  highScores.style.display = 'block';
  //Calls storeScores to push data to localStorage
  storeScores();
});

//Calls init to retrieve data and render it to the page on load
init();

//Add click event to viewHighscore element
viewHighScore.addEventListener('click', function (event) {
  event.preventDefault();
  startContent.style.display = 'none';
  quizContent.style.display = 'none';
  finishContent.style.display = 'none';
  checkAnswer.style.display = 'none';
  //Displays high scores
  highScores.style.display = 'block';
  //Re-renders the high score list
  renderScores();
});

//Add click event to backBtn element
backBtn.addEventListener('click', function (event) {
  event.preventDefault();
  //Go back to main page
  location.reload();
});

//Add click event to clearBtn element
clearBtn.addEventListener('click', function (event) {
  event.preventDefault();
  //Clears data from localStorage
  localStorage.clear();
  //Re-renders the high score list
  renderScores();
});



