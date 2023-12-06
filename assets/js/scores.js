let scores = JSON.parse(localStorage.getItem("scores"));
let scoresListElement = document.getElementById("highscores");
let clearButton = document.getElementById("clear");

console.log("scores:", scores);

function renderScores() {
  if (scores) {
    console.log("Scores exist");
    scores.sort((a, b) => {
      return b[1] - a[1];
    });
    console.log(scores);
    let item;
    scores.forEach((score) => {
      console.log(score);
      item = document.createElement("li");
      item.textContent = score[0] + ": " + score[1];
      scoresListElement.appendChild(item);
    });
  } else {
    console.log("Scores do not exist");
    scoresListElement.textContent = "No Scores";
  }
}

function clear() {
  localStorage.clear();
  scores = null;
  renderScores();
}

clearButton.addEventListener("click", clear);

renderScores();
