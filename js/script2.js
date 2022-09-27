var questions = document.querySelector('#questions')
var choices = Array.from(document.querySelectorAll('choice-text'))
var startButton = document.querySelector('#start-btn')

startButton.addEventListener('click', function(event) {
        console.log(event)
    }
    
    // addTimer 
    // var count = 0;
    // //  Select increment and decrement button elements
    // var incrementEl = document.querySelector("#increment");
    // var decrementEl = document.querySelector("#decrement");
    // var countEl = document.querySelector("#count");
    
    // // Updates count on page
    // function setCounterText() {
        //   countEl.textContent = count;
        // }
        // // Attach event listener to increment button element
        // incrementEl.addEventListener("click", function() {
            //   count++;
            //   setCounterText();
            // });
            
            // // Attach event listener to decrement button element
            // decrementEl.addEventListener("click", function() {
                //   // Action will fire if count is greater than  0
                //   if (count > 0) {
                    //     count--;
                    //     setCounterText();
                    //   }
                    // });
                    
                    
                    
                    
                    
                    
                    
                    // const Questions = [{
                    //     id: 0,
                    //     q: "What is capital of India?",
                    //     a: [{ text: "gandhinagar", isCorrect: false },
                    //         { text: "Surat", isCorrect: false },
                    //         { text: "Delhi", isCorrect: true },
                    //         { text: "mumbai", isCorrect: false }
                    //     ]
                    
                    // },
                    // {
                    //     id: 1,
                    //     q: "What is the capital of Thailand?",
                    //     a: [{ text: "Lampang", isCorrect: false, isSelected: false },
                    //         { text: "phuket", isCorrect: false },
                    //         { text: "Ayutthaya", isCorrect: false },
                    //         { text: "Bangkok", isCorrect: true }
                    //     ]
                    
                    // },
                    // {
                    //     id: 2,
                    //     q: "What is the capital of Gujarat",
                    //     a: [{ text: "surat", isCorrect: false },
                    //         { text: "vadodara", isCorrect: false },
                    //         { text: "gandhinagar", isCorrect: true },
                    //         { text: "rajkot", isCorrect: false }
                    //     ]
                    
                    // }
                    
                    // ]
                    
                    // // Set start
                    // var start = true;
                    
                    // // Iterate
                    // function iterate(id) {
                    
                    // // Getting the result display section
                    // var result = document.getElementsByClassName("result");
                    // result[0].innerText = "";
                    
                    // // Getting the question
                    // const question = document.getElementById("question");
                    
                    
                    // // Setting the question text
                    // question.innerText = Questions[id].q;
                    
                    // // Getting the options
                    // const op1 = document.getElementById('op1');
                    // const op2 = document.getElementById('op2');
                    // const op3 = document.getElementById('op3');
                    // const op4 = document.getElementById('op4');
                    
                    
                    // // Providing option text 
                    // op1.innerText = Questions[id].a[0].text;
                    // op2.innerText = Questions[id].a[1].text;
                    // op3.innerText = Questions[id].a[2].text;
                    // op4.innerText = Questions[id].a[3].text;
                    
                    // // Providing the true or false value to the options
                    // op1.value = Questions[id].a[0].isCorrect;
                    // op2.value = Questions[id].a[1].isCorrect;
                    // op3.value = Questions[id].a[2].isCorrect;
                    // op4.value = Questions[id].a[3].isCorrect;
                    
                    // var selected = "";
                    
                    // // Show selection for op1
                    // op1.addEventListener("click", () => {
                    //     op1.style.backgroundColor = "lightgoldenrodyellow";
                    //     op2.style.backgroundColor = "lightskyblue";
                    //     op3.style.backgroundColor = "lightskyblue";
                    //     op4.style.backgroundColor = "lightskyblue";
                    //     selected = op1.value;
                    // })
                    
                    // // Show selection for op2
                    // op2.addEventListener("click", () => {
                    //     op1.style.backgroundColor = "lightskyblue";
                    //     op2.style.backgroundColor = "lightgoldenrodyellow";
                    //     op3.style.backgroundColor = "lightskyblue";
                    //     op4.style.backgroundColor = "lightskyblue";
                    //     selected = op2.value;
                    // })
                    
                    // // Show selection for op3
                    // op3.addEventListener("click", () => {
                    //     op1.style.backgroundColor = "lightskyblue";
                    //     op2.style.backgroundColor = "lightskyblue";
                    //     op3.style.backgroundColor = "lightgoldenrodyellow";
                    //     op4.style.backgroundColor = "lightskyblue";
                    //     selected = op3.value;
                    // })
                    
                    // // Show selection for op4
                    // op4.addEventListener("click", () => {
                    //     op1.style.backgroundColor = "lightskyblue";
                    //     op2.style.backgroundColor = "lightskyblue";
                    //     op3.style.backgroundColor = "lightskyblue";
                    //     op4.style.backgroundColor = "lightgoldenrodyellow";
                    //     selected = op4.value;
                    // })
                    
                    // // Grabbing the evaluate button
                    // const evaluate = document.getElementsByClassName("evaluate");
                    
                    // // Evaluate method
                    // evaluate[0].addEventListener("click", () => {
                    //     if (selected == "true") {
                    //         result[0].innerHTML = "True";
                    //         result[0].style.color = "green";
                    //     } else {
                    //         result[0].innerHTML = "False";
                    //         result[0].style.color = "red";
                    //     }
                    // })
                    // }
                    
                    // if (start) {
                    // iterate("0");
                    // }
                    
                    // // Next button and method
                    // const next = document.getElementsByClassName('next')[0];
                    // var id = 0;
                    
                    // next.addEventListener("click", () => {
                    // start = false;
                    // if (id < 2) {
                    //     id++;
                    //     iterate(id);
                    //     console.log(id);
                    // }
                    
                    // })


// var questions = [
//     {
//           prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
//           answer: "a"
//     },
//     {
//          prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
//          answer: "c"
//     },
//     {
//          prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
//          answer: "a"
//     }
// ];
// var score = 0;

// for(var i = 0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//          score++;
//          alert("Correct!");
//     } else {
//          alert("WRONG!");
//     }
// }
// alert("you got " + score + "/" + questions.length);












// create Timer
// var timeLeft = 15
// var intervalid

// function startCountdown() {
//     clearInterval(intervalId)
//     intervalId = setInterval(function) {
//      timeLeft--
//      timerEl.textContent = timeLeft   
//     }, 1000)
// }