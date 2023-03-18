var score = 0;
var timeLeft = 30;
var gameStarted = false;

function updateScore() {
  score++;
  document.getElementById("score").innerHTML = "Score: " + score;
}

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").innerHTML = "Time Left: " + timeLeft;
  if (timeLeft == 0) {
    endGame();
  }
}

function startGame() {
  score = 0;
  timeLeft = 30;
  gameStarted = true;
  document.getElementById("click-button").disabled = false;
  document.getElementById("start-button").disabled = true;
  setInterval(updateTimer, 1000);
}

function endGame() {
  gameStarted = false;
  document.getElementById("click-button").disabled = true;
  document.getElementById("start-button").disabled = false;
  alert("Game Over! Your score is " + score);
}

document.getElementById("click-button").addEventListener("click", function() {
  if (gameStarted) {
    updateScore();
  }
});

document.getElementById("start-button").addEventListener("click", startGame);
