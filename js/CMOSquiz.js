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
        question: 'In CMOS fabrication, nMOS and pMOS are integrated in same substrate?',
        answers:[
            {text:'True',correct:true},
            {text:'False',correct:false}
        ],
        explanation :'Explantion: In CMOS fabrication, nMOS and pMOS are integrated in the same chip substrate. n-type and p-type devices are formed in the same structure.'
    },
    {
        question: 'The arrow on the symbol of MOSFET indicates?',
        answers:[
            {text:'that it is a N-channel MOSFET',correct:false},
            {text:'the direction of electrons',correct:true},
            {text:' the direction of conventional current flow',correct:false},
            {text:'that it is a P-channel MOSFET',correct:false},
        ],
        explanation:'Explantion: The arrow is to indicate the direction of electrons (opposite to the direction of conventional current flow).'
    },
    {
        question: 'Neglecting Channel Length Modulation, if the transconductance of a MOSFET increases, the output impedance of the follower stage?',
        answers:[
            {text:'increase',correct:false},
            {text:'decrease',correct:true},
            {text:'increase linearly',correct:false},
            {text:'decrease non-linearly',correct:false}
        ],
        explanation:'Explantion: The output impedance of a follower stage is (1/gm || Rd). If the transconductance increases, the output impedance will decrease, as can be seen from the formulae.'
    },
    {
        question: 'If p-transistor is conducting and has small voltage between source and drain, then the it is said to work in',
        answers:[
            {text:'linear region',correct:false},
            {text:'saturation region',correct:false},
            {text:'non saturation resistive region',correct:true},
            {text:'cut-off region',correct:false},
        ],
        explanation:'Explantion: If p-transistor is conducting and has small voltage between source and drain, then it is said to be in unsaturated resistive region.'
    },
    {
        question: 'An n-channel MOSFET operating with VOV=0.5V exhibits a linear resistance = 1 kΩ when VDS is very small. What is the value of the device transconductance parameter kn?',
        answers:[
            {text:'2 mA/V^2',correct:true},
            {text:'20 mA/V^2',correct:false},
            {text:'0.2 A/V^2',correct:false},
            {text:'2 A/V^2',correct:false}
        ],
        explanation: 'Explantion: Use the standard mathematical expression to determine the value of kn. '
    },
    {
        question: 'For MOSFET is to be used as a switch then it must operate in',
        answers:[
            {text:'Cut-off region',correct:false},
            {text:'Triode region',correct:false},
            {text:'Saturation region',correct:false},
            {text:' Both cut-off and triode region can be used',correct:true}
        ],
        explanation: 'Explantion: In both regions it can perform the task of a switch. '
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