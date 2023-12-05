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

let questionIndex = 0;

function renderQuestion() {
  let question = questions[questionIndex];
  let questionText = question[0];
  titleElement.textContent = questionText;
  questionsElement.classList.remove("hide");
}

function start(event) {
  const startScreen = document.getElementById("start-screen");
  startScreen.remove();
  renderQuestion();
}

startButton.addEventListener("click", start);
