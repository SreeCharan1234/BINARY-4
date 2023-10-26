const quizData = [{
    question: "Which of the following extension is used to save an HTML file?",
    a: ".hl",
    b: ".h",
    c: ".htl",
    d: ".html",
    correct: "d",
},
{
    question: "Which tag is used to create a blank line in HTML?",
    a: "<b>",
    b: "<br>",
    c: "<em>",
    d: "<a>",
    correct: "b",
},
{
    question: "Which HTML tag is used to convert the plain text into italic format?",
    a: "<b>",
    b: "<p>",
    c: "<i>",
    d: "<a>",
    correct: "c",
},
{
    question: "What is the use of <hr/> tag in HTML?",
    a: "For making content appearance italics",
    b: "To create vertical rule between sections",
    c: "To create a line break",
    d: "To create horizontal rule between sections",
    correct: "d",
},
{
    question: "Which attribute is not essential under <iframe>?",
    a: "frameborder",
    b: "width",
    c: "height",
    d: "src",
    correct: "a",
},
{
    question: "Which works similar to <b> element?",
    a: "<blockquote>",
    b: "<strong>",
    c: "<em>",
    d: "<i>",
    correct: "b",
},
{
    question: "Which tag is used to underline the text in HTML?",

    a: "<p>",
    b: "<u>",
    c: "<i>",
    d: "<ul>",
    correct: "b",
},
{
    question: "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
    a: "type",
    b: "article",
    c: "id",
    d: "classe",
    correct: "c",
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