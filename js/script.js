var start = document.getElementById("start")
var startBtn = document.getElementById("start-btn")
var question = document.getElementById("question")
var opt1 = document.getElementById("option-1")
var opt2 = document.getElementById("option-2")
var opt3 = document.getElementById("option-3")
var opt4 = document.getElementById("option-4")
var questions = [
        {
            question : "Commonly used data types DO NOT include:",
            option1 : "1.strings",
            option2 : "2.booleans",
            option3 : "alerts",
            option4 : "numbers"
        },{
            question : "The condition in an if/else statement is enclosed within _____.",
            option1 : "quotes",
            option2 : "curly brackets",
            option3 : "parenthesis",
            option4 : "square brackets"
        },{
            question : "Arrays in JavaScript can be used to store _____.",
            option1 : "numbers and strings",
            option2 : "other arrays",
            option3 : "booleans",
            option4 : "all of the above"
        },{
            question : "String values must be enclosed within ___ when being assigned to variables.",
            option1 : "commas",
            option2 : "curly brackets",
            option3 : "quotes",
            option4 : "parenthesis"
        },{
            question : "A very useful tool used during development and debugging for printing content to the debugger is:",
            option1 : "JavaScript",
            option2 : "terminal/bash",
            option3 : "for loops",
            option4 : "console log"
        },
    ];
    
function renderQuestion() {
    var q = questions[0];

    question.innerHTML = "<p>" + q.question + "</p>";
    opt1.innerHTML = questions[0].innerHTML;
}
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
}
startBtn.addEventListener("click", startQuiz)
