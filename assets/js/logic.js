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

function select(event) {
  let choiceIndex = event.target.getAttribute("data-index");
  let question = questions[questionIndex];
  let answerIndex = question[2];

  if (choiceIndex == answerIndex) {
    console.log("correct");
    score++;
  } else {
    console.log("incorrect");
    deductTime();
  }

  console.log("Score: " + score + "/" + (questionIndex + 1));
  nextQuestion();
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex < questionsLength) {
    console.log("Question: " + (questionIndex + 1) + "/" + questions.length);
    renderQuestion();
  } else {
    console.log("End of Quiz");
    finish();
  }
}

function deductTime() {
  // deduct 10 seconds
  clock -= 10;
  if (clock < 0) timeout();
  renderClock();
}

function finish() {
  finalScoreElement.textContent = score + "/" + questionsLength;
  questionsScreen.classList.add("hide");
  endScreen.classList.remove("hide");

  clock = 0;
  renderClock();
  clearInterval(clockInterval);
}

function timeout() {
  alert("Times Up!");
  finish();
}

function countDown() {
  clock--;
  if (clock < 0) timeout();
  renderClock();
}

function renderClock() {
  timerElement.textContent = clock;
}

function submit() {
  let scores = JSON.parse(localStorage.getItem("scores"));
  if (!scores) {
    scores = [];
  }
  scores.push([initials.value, score]);
  localStorage.setItem("scores", JSON.stringify(scores));

  window.location.href = "highscores.html";
}

startButton.addEventListener("click", start);

submitButton.addEventListener("click", submit);
