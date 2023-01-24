//variables for HTML sections and their elements 
var questionPage = document.getElementById('question-page');
var startPage = document.getElementById('start-page');
var finishPage = document.getElementById('finish-page');
var containerHighScores = document.getElementById('highscore-page');
var scoreContent = document.getElementById('score-content');
var formInitials = document.getElementById('initials-form');

var highScoreList = document.getElementById('highscore-list');
var answerCorrect = document.getElementById('answer-correct');
var answerIncorrect = document.getElementById('answer-incorrect');

var question = document.getElementById('question');
var answerOptionA = document.getElementById("answer-a");
var answerOptionB = document.getElementById("answer-b");
var answerOptionC = document.getElementById("answer-c");
var answerOptionD = document.getElementById("answer-d");

var timer = document.querySelector('#timer');
var score = 0;
var timeleft;
var gameover;
timer.innerText = 0;

//variables for buttons
var btnStart = document.querySelector('#startquiz-btn');
var btnViewHighScore = document.querySelector('#highscore-btn');
var btnReturnHome = document.querySelector('#return-home-btn');
var btnClearHighScores = document.querySelector('#clear-highscore-btn');
































/*Pseudo Code Module 4

Create start button 
create h1, p, elements

once start button is pressed, home page element goes away 
clock starts

questions div/section 
radio buttons, text box 
when answer is submitted, it is confirmed either correct or incorrect before next question starts
**next button  OR next question comes automatically 


Type intitials in, score is saved (x/10)
"submit/save" button 

After save button is clicked, your current score is compared to your highest score
**Option to clear high scores
View leaderboard(high scores) button in top corner when quiz is over. Top 5 scores? 

Logic pseudo code

Timer starts

User answer question
Determine if question is right or not
Store score of each question, tallying up as they answer more

Each time question is incorrect, 5 seconds subtracted from timer

END of game is either ALL QUESTIONS ANSWERED or TIMER RUNS OUT
Prompt to enter intials, get the value of their initials, 

Load all existing high scores from local storage 
Determine if new high score was achieved 
Rank previous high scores
Display high scores

Game Restart - 

Show GO BACK button, 

go back button goes to home start page, where timer is set back to its start, and score is cleared to zero 

(high scores are hidden, home page is shown)

timer starts again only once player clicks start button from home page

html notes

questions/options themselves will be put into an array of objects that will cycle through each question
Martin Guldberg to Everyone (Jan 22, 2023, 8:57 PM)
{/* <div id='question-div'></div>
    <div id="question-text">

    </div>
     <div id="answer1-text">

     </div>
      <div id="answer2-text">

    </div>
</div > }

var currentQuestion = [{
    q: "question 1",
    a1: "answer 1",
    a2: "answer 2"
},
{
    q: "question 2",
    a1: "answer 1",
    a2: "answer 2"
},
{
    q: "question 3",
    a1: "answer 1",
    a2: "answer 2"
}]

var currentQuestion=0;
for (var i = 0; i < questionArray.length; i++) {

}

var titleElement = document.getElementById("question-text");
titleElement.textContent = currentQuestion.questionText;

//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
var questionElemenbt = document.getElementById("question-div");
questionElemenbt.style.display="block";

var currentQuestion = null;
for (var i = 0; i < questionArray.length; i++) {
 currentQuestion = questionArray[i];
 var titleElement = document.getElementById("question-text");
titleElement.textContent = currentQuestion.q;
}
-->
}

var currentQuestion = [{
    q: "question 1",
    a1: "answer 1",
    a2: "answer 2"
},
{
    q: "question 2",
    a1: "answer 1",
    a2: "answer 2"
},
{
    q: "question 3",
    a1: "answer 1",
    a2: "answer 2"
}]

*/