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
    question: "How many characters are specified in the ASCII scheme?",
    a: "64",
    b: "128",
    c: "256",
    d: "24",
    correct: "b",
},
{
    question: "Which function is used to check whether a character is an alphabet?",
    a: "isalpha()",
    b: "isalnum()",
    c: "isdigit()",
    d: "isblank()",
    correct: "a",
},
{
    question: " Which of the following belongs to the set of character types?",
    a: "char",
    b: "wchar_t",
    c: "only a",
    d: "both wchar_t and char",
    correct: "d",
},
{
    question: "How do we represent a wide character of the form wchar_t?",
    a: "L’a’",
    b: "l’a’",
    c: "L[a]",
    d: "la",
    correct: "a",
},
{
    question: "In C++, what is the sign of character data type by default?",
    a: "Signed",
    b: "Unsigned",
    c: "Implementation dependent",
    d: "Unsigned Implementation",
    correct: "c",
},
{
    question: "Is the size of character literals different in C and C++?",
    a: "Implementation defined",
    b: "Can’t say",
    c: "Yes, they are different",
    d: "No, they are not different",
    correct: "c",
},
{
    question: "Suppose in a hypothetical machine, the size of char is 32 bits. What would sizeof(char) return?",

    a: "4",
    b: "1",
    c: "Implementation dependent",
    d: "Machine dependent",
    correct: "b",
},
{
    question: "What constant defined in <climits> header returns the number of bits in a char?",
    a: "CHAR_SIZE",
    b: "SIZE_CHAR",
    c: "BIT_CHAR",
    d: "CHAR_BIT",
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