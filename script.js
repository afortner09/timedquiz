const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let score = document.getElementById('scoreNbr');
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
var scoreNbr = 0;

function startGame() {
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  score.innerText = scoreNbr;
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    scoreNbr++
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'The first successful vaccine was introduced by Edward Jenner in 1796. Which disease did it guard against?',
    answers: [
      { text: 'COVID-19', correct: false },
      { text: 'Smallpox', correct: true },
      { text: 'Acne', correct: false },
      { text: 'Malaria', correct: false }
    ]
  },
  {
    question: 'What is 10 * 2?',
    answers: [
      { text: '12', correct: false },
      { text: '20', correct: true }
    ]
  },
{
    question: 'What did the Romans call Scotland?',
    answers: [
      { text: 'Caledonia', correct: true },
      { text: 'Scots', correct: false },
      { text: 'Scottish highlands', correct: false },
      { text: 'Scottish lowlands', correct: false }
    ]
  },
  {
    question: 'What are the five colours of the Olympic rings?',
    answers: [
      { text: 'Blue, purple, orange, green and white', correct: false },
      { text: 'Yellow, green, red, black, white', correct: false },
      { text: 'Blue, yellow, black, green and red', correct: true },
      { text: 'Green, blue, yellow, red, white', correct: false }
    ]
  },
  {
    question: "Who won the FIFA Women's World Cup in 2019?",
    answers: [
      { text: 'Brazil', correct: false },
      { text: 'France', correct: false },
      { text: 'USA', correct: true },
      { text: 'Spain', correct: false }
    ]
  },
  {
    question: 'In football, which team has won the Champions League (formerly the European Cup) the most?',
    answers: [
      { text: 'Barcelona', correct: false },
      { text: 'Real Madrid', correct: true },
      { text: 'Manchester United', correct: false },
      { text: 'Milan', correct: false }
    ]
  },
  {
    question: 'What is the most famous Mexican beer?',
    answers: [
      { text: 'Corona', correct: true },
      { text: 'Modelo', correct: false }
    ]
  },
]