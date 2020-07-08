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
        question: 'In CMOS logic circuit the n-MOS transistor acts as:',
        answers:[
            {text:'Load',correct:false},
            {text:'Pull up network',correct:false},
            {text:'Pull down network',correct:true},
            {text:' Not used in CMOS circuits',correct:false}
        ],
        explanation :'Explanation: A static CMOS gate has an nMOS pull-down network to connect the output to 0 (GND)'
    },
    {
        question: 'In CMOS logic circuit, the switching operation occurs because:',
        answers:[
            {text:' Both n-MOSFET and p-MOSFET turns OFF simultaneously for input ‘0’ and turns ON simultaneously for input ‘1’',correct:false},
            {text:'Both n-MOSFET and p-MOSFET turns ON simultaneously for input ‘0’ and turns OFF simultaneously for input ‘1’',correct:false},
            {text:'N-MOSFET transistor turns ON, and p-MOSFET transistor turns OFF for input ‘1’ and N-MOS transistor turns OFF, and p-MOS transistor turns ON for input ‘0’',correct:true},
            {text:'  None of the mentioned',correct:false}
        ],
        explanation :'Explanation: In CMOS logic circuit, the switching operation occurs because N-MOS transistor turns ON, and p-MOS transistor turns OFF for input ‘1’ and N-MOS transistor turns OFF, and p-MOS transistor turns ON for input ‘0’. The networks are arranged such that one is ON and the other OFF for any input pattern.'
    },
    {
        question: 'A latch is an example of a ___________',
        answers:[
            {text:'Monostable multivibrator',correct:false},
            {text:' Astable multivibrator',correct:false},
            {text:'Bistable multivibrator',correct:true},
            {text:'555 timer',correct:false}
        ],
        explanation :'Explanation: A latch is an example of a bistable multivibrator. A Bistable multivibrator is one in which the circuit is stable in either of two states. It can be flipped from one state to the other state and vice-versa'
    },
    {
        question: 'Why latches are called a memory devices?',
        answers:[
            {text:'It has capability to stare 8 bits of data',correct:false},
            {text:'It has internal memory of 4 bit',correct:false},
            {text:'It can store one bit of data',correct:true},
            {text:' It can store infinite amount of data',correct:false}
        ],
        explanation :'Explanation: Latches can be memory devices, and can store one bit of data for as long as the device is powered. Once device is turned off, the memory gets refreshed.'
    },
    {
        question: ' The outputs of SR latch are ___________',
        answers:[
            {text:' x and y',correct:false},
            {text:'a and b',correct:false},
            {text:'s and r',correct:false},
            {text:'q and q’',correct:true}
        ],
        explanation :'Explanation: SR or Set-Reset latch is the simplest type of bistable multivibrator having two stable states. The inputs of SR latch are s and r while outputs are q and q’. It is clear from the diagram:'
    },
    {
        question: 'One example of the use of an S-R flip-flop is as ___________',
        answers:[
            {text:' Transition pulse generator',correct:false},
            {text:'Racer',correct:false},
            {text:'Switch debouncer',correct:true},
            {text:'Astable oscillator',correct:false}
        ],
        explanation :'Explanation: The SR flip-flop is very effective in removing the effects of switch bounce, which is the unwanted noise caused during the switching of electronic devices.'
    },
    {
        question: 'When both inputs of a J-K flip-flop cycle, the output will ______',
        answers:[
            {text:' Be invalid',correct:false},
            {text:'Change',correct:false},
            {text:'Not change',correct:true},
            {text:'Toggle',correct:false}
        ],
        explanation :'Explanation: After one cycle the value of each input comes to the same value. Eg: Assume J=0 and K=1. After 1 cycle, it becomes as J=0->1->0(1 cycle complete) and K=1->0->1(1 cycle complete). The J & K flip-flop has 4 stable states: Latch, Reset, Set and Toggle.'
    },
    {
        question: 'Which of the following is correct for a gated D-type flip-flop?',
        answers:[
            {text:' The Q output is either SET or RESET as soon as the D input goes HIGH or LOW',correct:true},
            {text:'The output complement follows the input when enabled',correct:false},
            {text:'Only one of the inputs can be HIGH at a time',correct:false},
            {text:'The output toggles if one of the inputs is held HIGH',correct:false}
        ],
        explanation :'Explanation: In D flip flop, when the clock is high then the output depends on the input otherwise reminds previous output. In a state of clock high, when D is high the output Q also high, if D is ‘0’ then output is also zero. Like SR flip-flop, the D-flip-flop also have an invalid state at both inputs being 1.'
    },
    {
        question: ' The output of latches will remain in set/reset untill ___________',
        answers:[
            {text:'The trigger pulse is given to change the state',correct:true},
            {text:'Any pulse given to go into previous state',correct:false},
            {text:' They don’t get any pulse more',correct:false},
            {text:'The pulse is edge-triggered',correct:false}
        ],
        explanation :'Explanation: The output of latches will remain in set/reset untill the trigger pulse is given to change the state.'
    },
    {
        question: 'Master slave flip flop is also referred to as?',
        answers:[
            {text:'Level triggered flip flop',correct:false},
            {text:'Pulse triggered flip flop',correct:true},
            {text:'Edge triggered flip flop',correct:false},
            {text:'Edge-Level triggered flip flop',correct:false}
        ],
        explanation :'Explanation: The term pulse triggered means the data is entered on the rising edge of the clock pulse, but the output does not reflect the change until the falling edge of the clock pulse'
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