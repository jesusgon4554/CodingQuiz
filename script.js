//HTML elements //
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");



// Choice button IDs 
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//Quiz Question
var questions= [{
    question: "What does HTML stand for?",
    choice1: "Hyper Target Machine Langauge",
    choice2: "Hello To My Lads",
    choice3: "HyperText Markup Language",
    choice4: "HTML",
    answer:  "c" },
    {

    question: "What does CSS stand for?",
    choice1: "Cascading Style Sheet",
    choice2: "Cold Season Sweaters",
    choice3: "Cascading Script Sheet",
    choice4: "CSS",
    answer: "a" },
    {

    question: "What is the main purpose of Javascript?",
    choice1: "Styling the website",
    choice2: "Store Data",
    choice3: "Artificial intelligence",
    choice4: "To create a responsive webpage",
    answer: "d"},
    {

    question: "What is the 'a' tag used for?",
    choice1: "Pictures",
    choice2: "Links",
    choice3: "Arrays",
    choice4: "Append",
    answer: "b"},
    {

    question: "What company developed Javascript?",
    choice1: "Sun Microsystems",
    choice2: "Bell Labs",
    choice3: "Oracle",
    choice4: "Microsoft",
    answer: "a"},
    {

    question: "Which is not a Javascript Data type?",
    choice1: "number",
    choice2: "string",
    choice3: "object",
    choice4: "getElementByID",
    answer: "d"},
    {
    
    question: "How many elements does .querySelectorAll target?",
    choice1: "first",
    choice2: "Last",
    choice3: "All",
    choice4: "None",
    answer: "c" },
    {   

    question: "What content does text() return in jQuery",
    choice1: "sets or returns the text content of selected element",
    choice2: "sets or returns the content of selected element",
    choice3: "sets or returns the values of forms of selected element",
    choice3: "sets or returns the text content of selected element",
    choice3: "sets or returns the attributes of selected element",
    choice4: "",
    answer: "a"},
    {

    question: "Which jQuery method appends?",
    choice1: "append()",
    choice2: "prepend()",
    choice3: "after()",
    choice4: "before()",
    answer: "a"},
    {

    question: "Which jQuery method removes elements and content?",
    choice1: "empty()",
    choice2: "remove()",
    choice3: "delete()",
    choice4: "erase()",
    answer: "b" }

];

// global variables
var finalQuestionIndex = questions.length;
var currentQuestionIndex = 0;
var timeLeft = 50;
var timerInterval;
var score = 0;
var correct;

//Generate questions and answers
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = questions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choice1;
    buttonB.innerHTML = currentQuestion.choice2;
    buttonC.innerHTML = currentQuestion.choice3;
    buttonD.innerHTML = currentQuestion.choice4;
};

// Start Quiz, Timer, hides start button, and displays first question
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}
// end of quiz
function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + questions.length + " correct!";
}

// shows high scores
submitScoreBtn.addEventListener("click", function highscore(){
    
    // alert to add initials 
    if(highscoreInputName.value === "") {
        alert("Enter your initials.");
        return false;
    }else{
        // variables for user scores //
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});

// clear and add high scores
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// high scores page
function showHighscore(){
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

//clears local storage
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

//resets variables and quiz
function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}

// check response
function checkAnswer(answer){
    correct = questions[currentQuestionIndex].answer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
       
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    }else{
        showScore();
    }
}

// This button starts quiz. //
startQuizButton.addEventListener("click",startQuiz);
