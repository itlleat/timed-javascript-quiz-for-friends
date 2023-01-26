// ** solutions found with help from module 3 and 4 and help from George and Kirtley. Code base scrapped a couple times but found a lot of solutions from mmeii on github as well as various stack overflow users

 // Questions and answers
 const questions = [
    {
        question: "Is the JavaScript programming language  server side, client side, or both?",
        choices: ["a. both", "b. client side", "c. server side", "d. none of the above"],
        answer: "a. both"
    },
    {
        question: "How would you create an alert box with a message in JavaScript",
        choices: ["a. alertMessage();", "b. alertBox();", "c. alert();", "d. warningAlert();"],
        answer: "c. alert();"
    },
    {
        question: "Which is the correct 'if' statement to excute code if 'x' is equal to 12",
        choices: ["a. if (x == 12)", "b. if x == 12", "c. if {x == 12}", "d. if (x != 12)"],
        answer: "a. if (x == 12)"
    },
    {
        question: "What would this snippet of code return? Boolean(55<123):",
        choices: ["a. undefined", "b. false", "c. error", "d. true"],
        answer: "d. true"
    },
];


// references to elements of the DOM
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

// Functions

// WHEN I click the start button, timer starts
var totalTime = 90;
function newQuiz() {
    questionIndex = 0;
    totalTime = 90;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};


// this function shows the questions and answer choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// A function that shows 
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    // if the user choice matches the correct answer it is correct
	// If the user gets a question wrong 15 seconds are deducted from timer
	if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
		correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        totalTime -= 15;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Incorrect! Correct answer: " + questions[questionIndex].answer;
    }

    // Iterate through the questions
	// When the questions are through run the game over function
	questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}



function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// when all questions are answered or timer reaches 0, game over
function gameOver() {
    summary.style.display = "block";
    // hide the question section in the DOM
	questionDiv.style.display = "none";
    // hide the start button 
	startDiv.style.display = "none";
    // hide the display of the timer
	timer.style.display = "none";
    timesUp.style.display = "block";

    // Show the correct number of questions
	// *I had trouble getting the correct answers to reset come back to this* 
    finalScore.textContent = correctAns;
}

// enter initials and store initials and high score locally
function storeHighScores(event) {
    event.preventDefault();

    // stop function if initials are not entered
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    // Display the high score and initials once entered
	startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   

    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
	var scoresArray;

    // If there are no saved high scores return an empty array
	
	if (savedHighScores === null) {
        scoresArray = [];
    } else {
        // parse the scores array using JSON to match them to the user's initials 
		// display the information in the "high scores" section of the html
		scoresArray = JSON.parse(savedHighScores)
    }

    // the userScore variable logs the users initials with their score
	
	var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    
	
	// that information is pushed to fill our userScore criteria
	scoresArray.push(userScore);

    // stringify array in order to store separate high scores with their initials together
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show the high scores
    showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

    // display only the high scores section
	startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check local storage for saved high scores 
    if (savedHighScores === null) {
        return;
    }

	// create a variable that is the user initials and high score parsed out
	
    var storedHighScores = JSON.parse(savedHighScores);

    // a loop to turn the corresponding scores/initials into separate paragraphs sorted from the earliest entered data
    
    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

// event listeners

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});



clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "Leader Board Cleared";
    listOfHighScores.setAttribute("style", "font-family: 'Raleway', sans-serif; color: white; font-style: italic;")
});
