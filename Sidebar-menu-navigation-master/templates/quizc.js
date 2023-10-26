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
    question: "Which of the following is not a valid C variable name?",
    
    a: "int number;",
    b: "float rate;",
    c: "int variable_count;",
    d: "int $main;",
    correct: "d",
},
{
    question: "All keywords in C are in ____________",
    a: "LowerCase letters",
    b: "UpperCase letters",
    c: "CamelCase letters",
    d: "None of the mentioned",
    correct: "a",
},
{
    question: " Which is valid C expression?",
    a: "int my_num = 100,000;",
    b: "int my_num = 100000;",
    c: "int my num = 1000;",
    d: "int $my_num = 10000;",
    correct: "b",
},
{
    question: "Which of the following cannot be a variable name in C?",
    a: "volatile",
    b: "true",
    c: "friend",
    d: "export",
    correct: "a",
},
{
    question: "Which keyword is used to prevent any changes in the variable within a C program?",
    a: "immutable",
    b: "mutable",
    c: "const",
    d: "volatile",
    correct: "c",
},
{
    question: "What is the result of logical or relational expression in C?",
    a: "True or False",
    b: "0 or 1",
    c: "0 if an expression is false and any positive number if an expression is true",
    d: "None of the mentioned",
    correct: "b",
},
{
    question: "Which of the following typecasting is accepted by C language?",

    a: "Widening conversions",
    b: "Narrowing conversions",
    c: "Widening & Narrowing conversions",
    d: "None of the mentioned",
    correct: "c",
},
{
    question: "Where in C the order of precedence of operators do not exist?",
    a: "Within conditional statements, if, else",
    b: "Within while, do-while",
    c: "Within a macro definition",
    d: "None of the mentioned",
    correct: "d",
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