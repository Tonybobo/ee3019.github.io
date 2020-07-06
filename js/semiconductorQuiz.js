const startButton = document.getElementById('start');

startButton.addEventListener('click', start);

const questionContainer = document.getElementById ('question-ctn');

const questionElement = document.getElementById('heading');
const explanation = document.getElementById('explanation');
const answerButton = document.getElementById('answer-btn');

const nextButton = document.getElementById('next');
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
    Next();
} )
const proceed = document.getElementById('proceed')
let shuffledQuestions , currentQuestionIndex
const questions = [
    {
        question: 'The semiconductor memories are organised as __________ dimension(s) of array of memory locations',
        answers:[
            {text:'one dimensional',correct:false},
            {text:'two dimensional',correct:true},
            {text:'three dimensional',correct:false},
            {text:'none',correct:false}
        ],
        explanation :' Explanation: The semiconductor memories are organised as two dimensions of an array which consists of rows and columns.'
    },
    {
        question: 'If the microprocessor has 10 address lines, then the number of memory locations it is able to address is',
        answers:[
            {text:' 512',correct:false},
            {text:'1024',correct:true},
            {text:'2048',correct:false},
            {text:'none',correct:false}
        ],
        explanation :' Explanation:Since for n address lines, the number of memory locations able to address is 2^n.'
    },
    {
        question: 'How many MOSFETs are required for SRAM?',
        answers:[
            {text:'2',correct:false},
            {text:'4',correct:false},
            {text:'6',correct:true},
            {text:'8',correct:false}
        ],
        explanation :' Six MOSFETs are required for a typical SRAM. Each bit of SRAM is stored in four transistors which form two cross-coupled inverters.'
    },
    {
        question: 'Which of the following is an SRAM?',
        answers:[
            {text:'1T-RAM',correct:true},
            {text:'PROM',correct:false},
            {text:'EEPROM',correct:false},
            {text:'EPROM',correct:false}
        ],
        explanation :'1T-RAM is a pseudo-static RAM which is developed by MoSyS, Inc. PROM, EPROM, and EEPROM are non-volatile memories.'
    },
    {
        question: 'Which is the storage element in DRAM?',
        answers:[
            {text:'inductor',correct:false},
            {text:'capacitor',correct:true},
            {text:'resistor',correct:false},
            {text:'mosfet',correct:false}
        ],
        explanation :'DRAM uses a small capacitor whose voltage represents a binary zero which is used as a storage element in DRAM in which a single transistor cell is used to store each bit of data.'
    },
    {
        question: 'How many memory locations can be accessed by 8086?',
        answers:[
            {text:'1 M',correct:true},
            {text:'2 M',correct:false},
            {text:'3 M',correct:false},
            {text:'4 M',correct:false}
        ],
        explanation :'The 8086 processor has a 20-bit address bus, hence it can access a memory of 2^20-1 M locations.'
    },
]

function start(){
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(()=>Math.random() -0.5);
    currentQuestionIndex = 0;
    Next();
}

function Next(){
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    explanation.classList.add('hide');
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showQuestion(question){
        questionElement.innerText = question.question;
        question.answers.forEach(answers => {
            const button = document.createElement('button');
            button.innerText = answers.text;
            button.classList.add('btn');
            if(answers.correct){
                button.dataset.correct = answers.correct
            }
            button.addEventListener('click',selectedAnswer);
            answerButton.appendChild(button);
        })
}


function selectedAnswer (e){
    const selected = e.target;
    const correct = selected.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButton.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct);
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide');
    }else{
        proceed.innerText = 'Proceed to Next Lesson';
        proceed.classList.remove('hide');
    }
    explanation.classList.remove('hide');
    explanation.innerText = questions[currentQuestionIndex].explanation;
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}
function clearStatusClass(element){

    element.classList.remove('wrong');
    element.classList.remove('correct');
}