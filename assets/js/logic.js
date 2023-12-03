const startButton = document.getElementById("start");
const questionsElement = document.getElementById("questions");
const titleElement = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");

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
