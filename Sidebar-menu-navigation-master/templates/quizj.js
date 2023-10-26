const showMenu = (toggleId, navbarId,bodyId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            // APARECER MENU
            navbar.classList.toggle('show')
            // ROTATE TOGGLE
            toggle.classList.toggle('rotate')
            // PADDING BODY
            bodypadding.classList.toggle('expander')
        })
    }
}
showMenu('nav-toggle','navbar','body')

// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll('.nav__link');   
function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));const quizData = [{
    question: "Which of the following is correct about JavaScript?",
    a: "JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",
    correct: "a",
},
{
    question: "Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: "It is an ordered list of string",
    d: "It is an ordered list of functions",
    correct: "a",
},
{
    question: "Which of the following is not javascript data types?",
    a: "Null type",
    b: "Undefined type",
    c: "Number type",
    d: "All of the mentioned",
    correct: "d",
},
{
    question: "Where is Client-side JavaScript code is embedded within HTML documents?",
    a: "A URL that uses the special javascript:code",
    b: "A URL that uses the special javascript:protocol",
    c: "A URL that uses the special javascript:encoding",
    d: " A URL that uses the special javascript:stack",
    correct: "b",
},
{
    question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    a: "Position",
    b: "Window",
    c: "Standard",
    d: "Location",
    correct: "b",
},
{
    question: "Which of the following can be used to call a JavaScript Code Snippet?",
    a: "Function/Method",
    b: "Preprocessor",
    c: "Triggering Event",
    d: "RMI",
    correct: "a",
},
{
    question: "Which of the following scoping type does JavaScript use?",

    a: "Sequential",
    b: "Segmental",
    c: "Lexical",
    d: "Literal",
    correct: "c",
},
{
    question: "What is the basic difference between JavaScript and Java?",
    a: "Functions are considered as fields",
    b: "Functions are values, and there is no hard distinction between methods and fields",
    c: "Variables are specific",
    d: "There is no difference",
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