let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message");
const scoreText = document.querySelector(".score");
const number = document.querySelector(".number");
const highscoreText = document.querySelector(".highscore");
let score = 20;
let highscore = 0;

const zeroscore = function () {
  scoreText.textContent = 0;
  message.textContent = "🤡 you lost ";
};

const correct = function () {
  message.textContent = "🥳 Right on target";
  if (score > highscore) {
    highscore = score;
    highscoreText.textContent = highscore;
  }
  number.textContent = secretNumber;
  document.body.style.backgroundColor = "#60b347";
  number.style.width = "30rem";
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = +document.querySelector(".guess").value;

  if (!guess) {
    message.textContent = "🚫 no Number!";
  } else if (guess === secretNumber) {
    correct();
  } else if (guess > secretNumber) {
    message.textContent = "📈 too high";
    score--;
    score <= 0 ? zeroscore() : (scoreText.textContent = score);
  } else if (guess < secretNumber) {
    message.textContent = "📉 too low";
    score--;
    score <= 0 ? zeroscore() : (scoreText.textContent = score);
  }
});

const again = document.querySelector(".again");
again.addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  message.textContent = "Start guessing...";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  scoreText.textContent = score;
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
