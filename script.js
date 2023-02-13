"use strict";
// -----------------------------
//          GLOBAL VARIABLES
// -----------------------------
// Random Between 1 and 20
let secret_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector(".score").textContent = String(score);

let high_score = 0;
// -----------------------------
//          EVENT LISTENERS
// -----------------------------
const check_listener = function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (score > 0) {
    // Not Valid Input
    if (!guess) {
      document.querySelector(".message").textContent = "No Number ☹️";
    }
    // Correct Guess
    else if (guess === secret_number) {
      // Update Number Width + Show Value
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = String(secret_number);
      // Update Message
      document.querySelector(".message").textContent = "CONGRATULATIONS!🎉";

      document.querySelector("body").style.backgroundColor = "#60b347";

      // Update High-Score
      if (score > high_score) {
        high_score = score;
        document.querySelector(".highscore").textContent = String(high_score);
      }
    }
    // Wrong Guess
    else {
      // Wrong out of range
      if (guess <= 0 || guess > 20) {
        document.querySelector(".message").textContent =
          "Number out of Range! ☹️";
      }
      // Wrong High value
      else if (guess > secret_number) {
        document.querySelector(".message").textContent = "Too High📈";
      }
      // Wrong Low value
      else if (guess < secret_number) {
        document.querySelector(".message").textContent = "Too Low📉";
      }

      score--;
      document.querySelector(".score").textContent = String(score);
      if (score === 0) {
        document.querySelector(".message").textContent = "YOU LOST💥";
        document.querySelector(".number").textContent = String(secret_number);
        document.querySelector("body").style.background = "#951515";
        //document.querySelector(".number").style.color = "#eee";
      }
    }
  }
};

const again_listener = function () {
  // Reset Score
  score = 20;
  document.querySelector(".score").textContent = String(score);
  // Different Secret Number
  secret_number = Math.trunc(Math.random() * 20) + 1;
  // Reset Secret Number
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.background = "#eee";
  document.querySelector(".number").style.color = "#333";
  // Reset Background
  document.querySelector("body").style.backgroundColor = "#222";
  // Reset Message
  document.querySelector(".message").textContent = "Start guessing...";
  // Reset HighScore
  document.querySelector(".highscore").textContent = String(high_score);
  // Reset Guess
  document.querySelector(".guess").value = "1";
};
// -----------------------------
//          EVENT HANDLER
// -----------------------------
document.querySelector(".check").addEventListener("click", check_listener);
document.querySelector(".again").addEventListener("click", again_listener);
