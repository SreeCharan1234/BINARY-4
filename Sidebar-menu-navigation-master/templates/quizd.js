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

linkColor.forEach(l => l.addEventListener('click', colorLink));

const quizData = [{
    question: "Which of the following sorting algorithms is the fastest for sorting small arrays?",
    a: "Quick sort",
    b: "Shell sort",
    c: "Insertion sort",
    d: "Heap sort",
    correct: "c",
},
{
    question: "What is the advantage of selection sort over other sorting techniques?",
    a: "It is faster than any other sorting technique",
    b: "It is scalable",
    c: "It works best for inputs which are already sorted",
    d: "It requires no additional storage space",
    correct: "d",
},
{
    question: "Which of the following method is used for sorting in merge sort",
    a: "partitioning",
    b: "merging",
    c: "exchanging",
    d: "selection",
    correct: "b",
},
{
    question: " Which of the following sorting algorithm does not use recursion?",
    a: " bottom up merge sort",
    b: "merge sort",
    c: " heap sort",
    d: " quick sort",
    correct: "a",
},
{
    question: "Merge sort uses which of the following method to implement sorting?",
    a: "selection",
    b: "exchanging",
    c: "merging",
    d: "partitioning",
correct: "c",
},
{
    question: "Which of the following sorting algorithms is the fastest?",
    a: "Merge sort",
    b: "Shell sort",
    c: "Insertion sort",
    d: "Quick sort",
correct: "d",
},
{
question: "Shell sort algorithm is an example of?",
a: "Bottom-up sorting",
b: "In-place sorting",
c: "Internal sorting",
d: "External sorting",
correct: "c",
},
{
    question: "Quick sort uses which of the following method to implement sorting?",
    a: "partitioning",
    b: "selection",
    c: "exchanging",
    d: "merging",
    correct: "a",
},
{
question: "In heap sort, after deleting the last minimum element, the array will contain elements in?",
a: "increasing sorting order",
b: "tree preorder",
c: "tree inorder",
d: "decreasing sorting order",
correct: "d",
},
{
question: "Which of the following sorting algorithm is used by C++ internally?",
a: "quicksort",
b: "merge sort",
c: "introsort",
d: "heap sort",
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