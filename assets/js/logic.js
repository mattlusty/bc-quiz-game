const startButton = document.getElementById("start");
const questionsScreen = document.getElementById("questions");
const titleElement = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");
const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const finalScoreElement = document.getElementById("final-score");
const initialsElement = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const timerElement = document.getElementById("time");

let questionIndex = -1; // current question index;
const questionsLength = questions.length;
let score = 0;
let clockInterval;
let clock = 40;

function renderQuestion() {
  choicesElement.innerHTML = null;

  let choicesListElement = document.createElement("ul");
  let question = questions[questionIndex];
  let questionText = question[0];
  let choices = question[1];
  titleElement.textContent = questionText;
  let choiceElement;

  choices.forEach((choice, index) => {
    choiceElement = document.createElement("li");
    choiceButton = document.createElement("button");
    choiceButton.setAttribute("data-index", index);
    choiceButton.textContent = "select";
    choiceButton.addEventListener("click", select);
    choiceElement.textContent = choice;
    choiceElement.appendChild(choiceButton);
    choicesListElement.appendChild(choiceElement);
  });
  choicesElement.appendChild(choicesListElement);
}

function start(event) {
  startScreen.remove();
  questionsScreen.classList.remove("hide");
  clockInterval = setInterval(countDown, 1000);
  nextQuestion();
}

startButton.addEventListener("click", start);
