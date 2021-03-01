// bringing html elements into JS
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const questionNumber = document.getElementById('questionNumber');
const question = document.getElementById('question');
const choices = document.getElementById('choices');
const choicesA = document.getElementById('A');
const choicesB = document.getElementById('B');
const next = document.getElementById('next');
const results = document.getElementById('results');
const submit = document.getElementById('submit');
const plan = document.getElementById('plan');
const score = document.getElementById('score');
const result = document.getElementById('result');

//Questions
const myQuestions = [
  {
    number: 'Question 1/9',
    question: 'For whom are you completing this assesment?',
    choiceA: 'Myself',
    choiceB: 'Someone else',
    correct: ['A', 'B']
  },
  {
    number: 'Question 2/9',
    question: "Do you have health insurance?",
    choiceA: "Yes",
    choiceB: "No",
    correct: ['A', 'B']
  },
  {
    number: "Question 3/9",
    question: "Are you feeling sick?",
    choiceA: "Yes",
    choiceB: "No",
    correct: 'A'
  },
  {
    number: "Question 4/9",
    question: "Do you live in a long term care facility, nursing home or homeless shelter?",
    choiceA: "Yes",
    choiceB: "No",
    correct: 'A'  
  },
  {
    number: "Question 5/9",
    question: "In the last two weeks have you worked or volunteered in a healthcare facility or as a first responder?",
    definition: "Healthcare facilities include a hospital, other medical setting(including dental care setting) or long term care facility.",
    choiceA: "Yes",
    choiceB: "No",
    correct: 'A'
  },
     {
    number: "Question 6/9",
    question: "Do you have any of the following new or worsening symptoms or signs?  Fever or chills, Shortness of Breath or Loss of Smell",
     choiceA: "Yes",
     choiceB: "No",
     correct: 'A'
  },
  {
    number: "Question 7/9",
    question: 'Have you traveled outside of the country in the past 14 days?',
    choiceA: "Yes",
    choiceB: "No",
    correct: 'A'
  },
  {
    number: "Question 8/9",
    question: "In the past 14 days, have you been in contact with someone who tested positive (or is currently being tested) for COVID-19?",
    choiceA: "Yes",
    choiceB: "No",
    correct: 'A'
  },
  {
    number: 'Question 9/9',
    question: 'In the past 14 days, have you been in contact with someone who exhibited any symptoms related to COVID-19?',
    choiceA: "Yes",
    choiceB: "No",
    correct: "A"
  },
]
// The code below allows you to press the next button and run through the questions and answers throughout the assesment
let i = 0;
const section = document.getElementById('questionNumber');
document.getElementById('next').addEventListener('click', () => {

  section.textContent = myQuestions[i].number; i++
  
  
});



let j = 0;
const quest = document.getElementById('question');
document.getElementById('next').addEventListener('click', () => {
  
  quest.textContent = myQuestions[j].question; j++
  
});

let m = 0;
const def = document.getElementById('definition');
document.getElementById('next').addEventListener('click', () => {
  
  def.textContent = myQuestions[m].definition; m++
  
});


let k = 0
const choice1 = document.getElementById('A');
document.getElementById('next').addEventListener('click', () => {
  
  choice1.textContent = myQuestions[k].choiceA; k++
  
});


let l = 0
const choice2 = document.getElementById('B');
document.getElementById('next').addEventListener('click', () => {
  
  choice2.textContent = myQuestions[l].choiceB; l++
  
}); 

// start Assesment Page that has a start quiz button

document.getElementById('start').addEventListener('click', () => {
  document.getElementById('quiz').style.display = "block";
  document.getElementById('cover').style.display = "none";
})
// choose a response and have it be collected to quantify and turn into results page/click next button when response selected otherwise it is not active
//last question has a submit button that initiates the adding up off the points and based off of information a results page
// previous button that allows you to navigate to prior questions
/* let a = 0;
document.getElementById('previous').addEventListener('click', () => {

  questionNumber.textContent = myQuestions[a].number; a--
  
});

let b = 0;

document.getElementById('previous').addEventListener('click', () => {

  question.textContent = myQuestions[b].question; b--
  
  
});

let c = 0;
document.getElementById('previous').addEventListener('click', () => {
  
  def.textContent = myQuestions[c].definition; c--
  
});

let d = 0;

document.getElementById('previous').addEventListener('click', () => {
  
  choicesA.textContent = myQuestions[d].choiceA; d--
  
});

let e = 0;
document.getElementById('previous').addEventListener('click', () => {
  
  choicesB.textContent = myQuestions[e].choiceB; e--
  
});
*/

//responsive web design (fits every viewport on any device and have answer buttons collapse into a column in small sizes
