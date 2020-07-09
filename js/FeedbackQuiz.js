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
        question: 'Which of the following electrical characteristics is not exhibited by an ideal op-amp?',
        answers:[
            {text:'Infinite voltage gain',correct:false},
            {text:'Infinite bandwidth',correct:false},
            {text:'Infinite output resistance',correct:true},
            {text:'Infinite slew rate',correct:false}
        ],
        explanation :'Explanation: An ideal op-amp exhibits zero output resistance so that output can drive an infinite number of other devices.'
    },
    {
        question: 'An ideal op-amp requires infinite bandwidth because',
        answers:[
            {text:' Signals can be amplified without attenuation',correct:true},
            {text:'Output common-mode noise voltage is zero',correct:false},
            {text:'Output voltage occurs simultaneously with input voltage changes',correct:false},
            {text:'Output can drive infinite number of device',correct:false}
        ],
        explanation :'Explanation: An ideal op-amp has infinite bandwidth. Therefore, any frequency signal from 0 to ∞ Hz can be amplified without attenuation.'
    },
    {
        question: 'Regarding the negative feedback amplifier, which of the following statements is wrong?',
        answers:[
            {text:'Widens the separation between 3db frequency',correct:false},
            {text:'Improves gain stability',correct:false},
            {text:'Increases gain – bandwidth product',correct:true},
            {text:'Reduces distortion',correct:false}
        ],
        explanation :'Explanation: The gain-bandwidth product in a negative amplifier remains constant. Reducing the closed loop gain (>=1) increases the feedback factor and increases the bandwidth. Thus the gain bandwidth product remains constant.'
    },
    {
        question: ' Negative feedback in amplifier _____________',
        answers:[
            {text:'Improves the signal-to-noise ratio at input',correct:false},
            {text:'Improves the signal-to-noise ratio at output',correct:false},
            {text:'Does not improve the signal-to-noise ratio at I/O',correct:false},
            {text:'Reduces distortion',correct:true}
        ],
        explanation :'Explanation: Since the negative feedback to any amplifier reduces its overall gain; hence any noise and distortion in the amplifier is also reduced.'
    },
    {
        question: 'Voltage shunt feedback amplifier forms',
        answers:[
            {text:'A negative feedback',correct:true},
            {text:'A positive feedback',correct:false},
            {text:'Both positive and negative',correct:false},
            {text:'None of the mentioned',correct:false}
        ],
        explanation :'Explanation: A voltage shunt feedback amplifier forms a negative feedback because, any increase in the output signal results in a feedback signal into the inverting input causing a decrease in the output signal.'
    },
    {
        question: 'Why the feedback circuit is said to be negative for voltage series feedback amplifier',
        answers:[
            {text:'Feedback voltage is 180 degree out of phase with respect to input voltage',correct:true},
            {text:' Input voltage is 180 degree out of phase with respect to feedback voltage',correct:false},
            {text:'Feedback voltage is in same phase with respect to input voltage',correct:false},
            {text:'Input voltage is in same phase with respect to feedback voltage',correct:false}
        ],
        explanation :'Explanation: Voltage series feedback amplifier have the difference voltage, Vid = Vin-Vf. Therefore, the feedback voltage always opposes the input voltage and is out of phase by 180o with respect to input voltage. Hence, the feedback is said to be negative.'
    },
    {
        question: 'Define the input resistance with feedback for voltage series feedback amplifier?',
        answers:[
            {text:'RIF = (1-AB)',correct:false},
            {text:'RIF = (AB-1)',correct:false},
            {text:'RIF = (1+AB)',correct:true},
            {text:'None of the mentioned',correct:false}
        ],
        explanation :'Explanation: In feedback amplifier, the input resistance of the op-amp with feedback is (1+AB) times that of without feedback.'
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
        proceed.innerText = 'Congratulation you have finished all lessons.';
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