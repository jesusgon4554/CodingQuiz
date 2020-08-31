//html selectors
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");
var totalScore = document.getElementById("finalScore");
var gameOver = document.getElementById("gameOver");
var quizQuestion = document.getElementById("question");
var timer = document.getElementById("time");
var start = document.getElementById("start");
var highScoreContainer= document.getElementById("highScoreContainer");
var highScoresPage = document.getElementById("highScorePage");
var highScoreName= document.getElementById("yourInitals");
var score = document.getElementById("yourScore");
var end = document.getElementById("endGame");
var submit = document.getElementById("submitScore");
var highScores = document.getElementById("highScores");


// button selection
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//Questions
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

    question: "What is the <a> tag used for?",
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

//vars
var finalQuestionIndex = quesions.length;
var quesionIndex = 0;
var timeAlloted = 70;
var timeInterval;
var score = 0;
var correct;

//generate questions and answers
function quizQuestions(){
    gameover.style.display = "none";
    if (questionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = questions[currentQuestionIndex];
    quizQuestion.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
}
quizQuestions()