var start = document.getElementById("start")
var startBtn = document.getElementById("start-btn")
var questionTitle = document.getElementById("questionTitle")
var questionDiv = document.getElementById("questionDiv")
var opt1 = document.getElementById("option-1")
var opt2 = document.getElementById("option-2")
var opt3 = document.getElementById("option-3")
var opt4 = document.getElementById("option-4")
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var checkAnswer = document.getElementById("checkAnswer");
var results = document.getElementById("results")
var enterInitialsBtn = document.getElementById("enterInitialsBtn")
var userInitials = document.getElementById("userInitials")
var questionIndex = 0
var secondsLeft = 75;

// function setTime() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + "seconds left";

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//         }
//     }, 7500);
// }
timeEl.style.display = "inline";
// timeEl.style.display = "none";
questionDiv.style.display = "none";
checkAnswer.style.display = "none";
checkAnswer.textContent = "";

function startQuiz() {
    questionIndex = 0;
    secondsLeft = 75;
    timeEl.textContent = "Time: " + secondsLeft;
    questionDiv.style.display = "block";
    start.style.display = "none";
    timeEl.style.display = "block";
    checkAnswer.textContent = "";

    var startTimer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        checkAnswer.textContent = "";
        if (secondsLeft <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length -1) {
                endGame()
            }
        }
    }, 1000)
    renderQuestion();
}

function openQuiz() {
    renderQuestion();
}

var questions = [
        {
            question: "Commonly used data types DO NOT include:",
            options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
            answer: "3. alerts"
        },{
            question: "The condition in an if/else statement is enclosed within _____.",
            options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
            answer: "3. parenthesis"
        },{
            question: "Arrays in JavaScript can be used to store _____.",
            options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
            answer: "4. all of the above"
        },{
            question: "String values must be enclosed within ___ when being assigned to variables.",
            options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
            answer: "3. quotes"
        },{
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
            answer: "4. console log"
        }
    ];
    
function renderQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    opt1.textContent = questions[questionIndex].options[0];
    opt2.textContent = questions[questionIndex].options[1];
    opt3.textContent = questions[questionIndex].options[2];
    opt4.textContent = questions[questionIndex].options[3];
}

function verifyAnswer(answer) {

    checkAnswer.style.display = "block";
    checkAnswer.textContent = "";

    if (questions[questionIndex].answer ===
        questions[questionIndex].options[answer]) {
            answer++;
            // checkAnswer.style.display = "block";
            checkAnswer.textContent = "Correct!";
        } else {
            // checkAnswer.style.display = "block";
            checkAnswer.textContent = "Wrong!";
            secondsLeft -= 10;
            timeEl.textContent = "Time: " + secondsLeft;
        }

        questionIndex++;
        if (questionIndex < questions.length) {
            renderQuestion();
        } else {
            endGame()
        }
}

function chose1() { verifyAnswer(0) }
function chose2() { verifyAnswer(1) }
function chose3() { verifyAnswer(2) }
function chose4() { verifyAnswer(3) }

function endGame() {
    results.style.display = "block";
    questionDiv.style.display = "none";
    start.style.display= "none"
    timeEl.style.display= "none"
}



startBtn.addEventListener("click", startQuiz)

opt1.addEventListener("click", chose1);
opt2.addEventListener("click", chose2);
opt3.addEventListener("click", chose3);
opt4.addEventListener("click", chose4);