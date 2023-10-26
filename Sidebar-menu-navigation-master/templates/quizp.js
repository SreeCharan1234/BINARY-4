const quizData = [{
    question: " Who developed Python Programming Language?",
    a: "Wick van Rossum",
    b: "Rasmus Lerdorf",
    c: "Guido van Rossum",
    d: "Niene Stom",
    correct: "c",
},
{
    question: " Which type of Programming does Python support?",
    a: "object-oriented programming",
    b: "structured programming",
    c: "functional programming",
    d: "all of the mentioned",
    correct: "d",
},
{
    question: "Is Python case sensitive when dealing with identifiers?",
    a: "no",
    b: "yes",
    c: "machine de  pendent",
    d: "none of     the mentioned",
    correct:     "b",
},
{
    question: " Which of the following is the correct extension of the Python file?",
    a: ".python",
    b: ".pl",
    c: ".py",
    d: ".p",
    correct: "c",
},
{
    question: "Is Python code compiled or interpreted?",
    a: "Python code is both compiled and interpreted",
    b: "Python code is neither compiled nor interpreted",
    c: "Python code is only compiled",
    d: "Python code is only interpreted",
correct: "a",
},
{
    question: "All keywords in Python are in _________",
    a: "Capitalized",
    b: "lower case",
    c: "UPPER CASE",
    d: "None of the mentioned",
correct: "d",
},
{
    question: "Which of the following is used to define a block of code in Python language?",

    a: "Indentation",
    b: "Key",
    c: "Brackets",
    d: "All of the mentioned",
    correct: "a",
},
{
    question: " Which keyword is used for function in Python language?",
    a: "Function",
    b: "def",
    c: "Fun",
    d: "Define",
    correct: "b",
}

];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);