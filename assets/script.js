
//variables for HTML sections and their elements 
var questionPage = document.getElementById('question-page');
var startPage = document.getElementById('start-page');
var finishPage = document.getElementById('finish-page');
var highScorePage = document.getElementById('highscore-page');
var scoreContent = document.getElementById('score-content');
var initialsForm = document.getElementById('initials-form');

var highScoreList = document.getElementById('highscore-list');
var answerCorrect = document.getElementById('answer-correct');
var answerIncorrect = document.getElementById('answer-incorrect');

var questionText = document.getElementById('question');
var answersContent = document.getElementById('answers');
var answerOptionA = document.getElementById('answer-a');
var answerOptionB = document.getElementById('answer-b');
var answerOptionC = document.getElementById('answer-c');
var answerOptionD = document.getElementById('answer-d');

//variables for timer
var timer = document.querySelector('#timer');

var score = 0;
var currentQuestion = 0;

var trackEndGame = 0;
var timeleft;
var gameover;
timer.innerText = 0;



//variables for HTML buttons
var startBtn = document.querySelector('#startquiz-btn');
var viewHighScoreBtn = document.querySelector('#highscore-btn');
var returnHomeBtn = document.querySelector('#return-home-btn');
var clearHighScoreBtn = document.querySelector('#clear-highscore-btn');
var submitScoreBtn = document.querySelector('#sumbit-score-btn');

//High Score Array
var highScores = [];

var shuffledQuestions;
var QuestionIndex = 0;

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
        optionA: "<button class='answer-button' id='A' onclick='canswerCheck(event)'>Throws an error</button>",
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
        q: "<p>CSS files are linked in what part of the HTML file.</p>",
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
];

var startQuiz = function() {
    startPage.classList.add('hide');
    startPage.classList.remove('show');
    questionPage.classList.remove('hide');
    questionPage.classList.add('show');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
  }

  var setTime = function() {
    timeleft = 50; 
  
  var timercheck = setInterval(function() {
    timer.innerText = timeleft;
    timeleft--
  
    if (gameover) {
        clearInterval(timercheck)
    }
   
    if (timeleft < 0) {
        showScore()
        timer.innerText = 0
        clearInterval(timercheck)
    }
  
    }, 1000)
  } 

  var setQuestion = function() {
    
    displayQuestion(shuffledQuestions[QuestionIndex])
  }

  

  var displayQuestion = function(index) {
    questionText.innerText = index.q
    answerOptionA.innerHTML = index.optionA;
    answerOptionB.innerHTML = index.optionB;
    answerOptionC.innerHTML = index.optionC;
    answerOptionD.innerHTML = index.optionD;
  }

  var answerRight = function() {
    if (answerCorrect.className = 'hide') {
        answerCorrect.classList.remove('hide')
        answerCorrect.classList.add('banner')
        answerIncorrect.classList.remove('banner')
        answerIncorrect.classList.add('hide')
      }
    }  
    var answerWrong = function() {
        if (answerIncorrect.className = 'hide') {
            answerIncorrect.classList.remove('hide')
            answerIncorrect.classList.add('banner')
            answerCorrect.classList.remove('banner')
            answerCorrect.classList.add('hide')
        }
      }
    var answerCheck = function(event) {
          if (shuffledQuestions[QuestionIndex].answer === event.target.id){
            answerRight()
            score = score + 5;
          } else {
            answerWrong()
            timeleft = timeleft - 10;
          };

          QuestionIndex++
          if (shuffledQuestions.length > QuestionIndex + 1) {
            setQuestion()
          } else {
            gameover = 'true';
            showScore();
          }
        }


        var showScore = function() {
            questionPage.classList.add('hide');
            finishPage.classList.remove('hide');
            finishPage.classList.add('show');
          
            var scoreDisplay = document.createElement('p');
            scoreDisplay.innerText = ('Your final score is ' + score + '!');
            scoreContent.appendChild(scoreDisplay);
          }  
          var createHighScore = function(event) { 
            event.preventDefault() 
            var initials = document.querySelector('#initials').value;
            if (!initials) {
              alert('Please enter your initials to continue');
              return;
            }
        initialsForm.reset();

        var highScore = {
            initials: initials,
            score: score
          } 
          highScores.push(highScore);
          highScores.sort((a, b) => {return b.score-a.score});

          while (highScoreList.firstChild) {
            highScoreList.removeChild(highScoreList.firstChild)
           }

           for (var i = 0; i < HighScores.length; i++) {
            var highscore = document.createElement('li');
            highscore.ClassName = 'high-score';
            highscore.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
            highScoreList.appendChild(highscore);
          }
          saveHighScore();
          displayHighScores();
          };
          var saveHighScore = function() {
            localStorage.setItem('HighScores', JSON.stringify(HighScores))     
          };
          var loadHighScore = function() {
            var LoadedHighScores = localStorage.getItem('HighScores')
            if (!LoadedHighScores) {
            return false;
            }

            LoadedHighScores = JSON.parse(LoadedHighScores);
            LoadedHighScores.sort((a, b) => {return b.score-a.score});

            for (var i = 0; i < LoadedHighScores.length; i++) {
                var highscore = document.createElement('li');
                highscore.ClassName = 'high-score';
                highscore.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
                highScoreList.appendChild(highscore);
                HighScores.push(LoadedHighScores[i]); 
                }
              }  
              var renderStartPage = function () {
                highScorePage.classList.add('hide')
                highScorePage.classList.remove('show')
                startPage.classList.remove('hide')
                startPage.classList.add('show')
                scoreContent.removeChild(scoreContainer.lastChild)
                QuestionIndex = 0
                gameover = ""
                timer.textContent = 0 
                score = 0
                
                if (answerCorrect.className = 'show') {
                    answerCorrect.classList.remove('show');
                    answerCorrect.classList.add('hide')
                }  
                if (answerIncorrect.className = 'show') {
                    answerIncorrect.classList.remove('show');
                    answerIncorrect.classList.add('hide');
                  }
                };
                var displayHighScores = function() {
                    highScorePage.classList.remove('hide');
                    highScorePage.classList.add('show');
                    gameover = 'true'
                  
                    if (finishPage.className = 'show') {
                        finishPage.classList.remove('show');
                        finishPage.classList.add('hide');
                    }
                    if (startPage.className = 'show') {
                        startPage.classList.remove('show');
                        startPage.classList.add('hide');
                    }
                        
                    if (questionPage.className = 'show') {
                      qquestionPage.classList.remove('show');
                      questionPage.classList.add('hide');
                    }
                  
                    if (answerCorrect.className = 'show') {
                        answerCorrect.classList.remove('show');
                        answerCorrect.classList.add('hide');
                    }
                  
                    if (answerIncorrect.className = 'show') {
                        answerIncorrect.classList.remove('show');
                        answerIncorrect.classList.add('hide');
                    }
                  }

                  var clearScores = function() {
                    HighScores = [];
                    while (highScoreList.firstChild) {
                        highScoreList.removeChild(highScoreList.firstChild);
                    }
                    localStorage.clear(HighScores);
                  } 
                  
                  loadHighScore()


          startBtn.addEventListener('click', startQuiz);
          initialsForm.addEventListener('submit', createHighScore);
          viewHighScoreBtn.addEventListener('click', displayHighScores);
          returnHomeBtn.addEventListener('click', renderStartPage);
          clearHighScoreBtn.addEventListener('click', clearScores);

