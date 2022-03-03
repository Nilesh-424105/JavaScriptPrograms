const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-container')

let shuffledQuestions,currectQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click, startGame')

nextButton.addEventListener('click', () => {
    correctQuestionIndex++
    setnextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() -0.5)
    correctQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion
    quizScore=0
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[correctQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText= question.question;
    question.answer.forEach((answer) => {
        const button = document.createElement("button")
        button.innerText=answer.Text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach((button) =>{
    setStatusClass(button, button.dataset.correct)

})
if(shuffledQuestions.length > currectQuestionIndex +1){
    nextButton.classList.remove("hide")
}else{
    startButton.innerText = "restart"
    startButton.classList.remove("hide")
}
if(selectedButton.dataset = correct){
    quizScore++
}
document.getElementById('rigth-answer').innerText=quizScore

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question =[
    {
        question: 'which one of these is a JavaScript Framework?',
        answer :[
            {Text: 'python', correct: false},
            {Text: 'Django', correct: false},
            {Text: 'React', correct: true},
            {Text: 'Eclipse', correct: false}
        ],

    },
    {
        question: 'What is the 4*3?',
        answer :[
            {Text: '6', correct: false},
            {Text: '12', correct: true},
            {Text: '9', correct: flase},
            {Text: '5', correct: false}
        ],

    },
    {
        question: 'who is the Prime Minister of India?',
        answer :[
            {Text: 'Narendra Modi', correct: true},
            {Text: 'Rahul Gandhi', correct: false},
            {Text: 'Sharad Pawar', correct: true},
            {Text: 'Manmohan Singh', correct: false}
        ],

    },

]
