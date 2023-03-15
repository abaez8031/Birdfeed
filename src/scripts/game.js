import { setInterval } from "core-js";

import Stage from "./stage";
import Worm from "./worm";

const newGameBtn = document.getElementById("new-game-button");
const scoreboard = document.getElementById("scoreboard");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;
let game = null;
let highScoresList = document.getElementById("high-scores");

class Game {
  constructor() {
    this.ctx = ctx;
    this.playing = true;
    this.stage = new Stage(this, ctx);
    this.timeRemaining = 60;
    this.score = 0;
    this.numShots = 0;
    canvas.addEventListener("click", this.handleClick.bind(this));
    setInterval(this.renderScore.bind(this), 0);

    this.timer = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        clearInterval(this.timer);
        this.endGame();
      }
    }, 1000);
  }

  handleClick(e) {
    if (this.playing) {
      this.numShots++;
      const x = e.offsetX;
      const y = e.offsetY;
      this.stage.worms.push(new Worm(this.ctx, x, y));
      this.stage.worms.forEach((worm) => this.checkWormShot(worm));
      setTimeout(() => {
        this.stage.worms = [];
      }, 300);
    } else {
      return;
    }
  }

  checkWormShot(worm) {
    if (this.playing) {
      // Add collision detection for clocks
      this.stage.clocks.forEach((clock) => {
        if (
          worm.x < clock.x + clock.width &&
          worm.x + worm.width > clock.x &&
          worm.y < clock.y + clock.height &&
          worm.y + worm.height > clock.y
        ) {
          const index = this.stage.clocks.indexOf(clock);
          this.stage.clocks.splice(index, 1);
          this.timeRemaining += 3;
          this.numShots--;
        }
      });
      this.stage.birds.forEach((bird) => {
        if (
          worm.x < bird.x + bird.width &&
          worm.x + worm.width > bird.x &&
          worm.y < bird.y + bird.height &&
          worm.y + worm.height > bird.y
        ) {
          const index = this.stage.birds.indexOf(bird);
          this.stage.birds.splice(index, 1);
          this.addPoint.bind(this)();
        }
      });
    } else {
      return;
    }
  }

  addPoint() {
    this.score++;
  }

  renderScore() {
    scoreboard.innerText = `SCORE: ${this.score} TIME: ${
      this.timeRemaining
    } ACCURACY: ${Math.round((this.score / this.numShots) * 100) ? Math.round((this.score / this.numShots) * 100) : 100 }% `;
  }

  endGame() {
    this.playing = false;
    this.stage.birds = [];
    this.stage.clocks = [];
    clearInterval(this.timer);
    checkHighScore(this.score);
    renderHighScores();
  }

  restartGame() {
    if (this.playing) {
      this.endGame();
    }
    this.score = 0;
    this.timeRemaining = 60;
    this.numShots = 0;
    this.playing = true;
    this.timer = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        clearInterval(this.timer);
        this.endGame();
      }
    }, 1000);
  }

  isPlaying() {
    return this.playing;
  }
}

if (!game) {
  ctx.fillStyle = "aliceblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "20px Helvetica";
  ctx.fillStyle = "pink";
  ctx.fillText(
    "This marvelous game is called Birdfeed!",
    10,
    60
  );
  ctx.fillText(
    "The objective of the game is to feed the flying birds.",
    10,
    120
  );
  ctx.fillText(
    "1. Use your mouse to aim your worm gun at the birds flying overhead.",
    10,
    180
  );
  ctx.fillText(
    "2. You have 60 seconds to feed as many birds as possible.",
    10,
    240
  );
  ctx.fillText(
    "3. Hit the hourglasses to add 3 seconds on to your time limit.",
    10,
    300
  );
  ctx.fillText("4. Happy hunting! Ahem I mean feeding!", 10, 360);
}

newGameBtn.addEventListener("click", () => {
  if (!game) {
    game = new Game();
    audio.play();
  } else {
    game.restartGame();
  }
});

canvas.addEventListener("click", () => {
  if (!game) {
    game = new Game();
    audio.play();
  } else if (!game.isPlaying()) {
    game.restartGame();
  }
});

// IMPLEMENTING A HIGH SCORE LEADERBOARD


function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || []
  const lowestScore = highScores[4]?.score || 0; 

  if (score > lowestScore) {
    saveHighScore(score, highScores);
    renderHighScores();
  }
}

function saveHighScore(score, highScores) {
  const name = prompt("Your score is worthy of the leaderboard. What name would you like to be displayed?");
  const newScore = {score: score, name: name};
  highScores.push(newScore);
  highScores.sort((a,b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function renderHighScores() {
  // CREATE AND RENDER HIGH SCORES TABLE
  const highScores = JSON.parse(localStorage.getItem("highScores")) ?? []
  highScoresList.innerHTML = "";
  let headerRow = document.createElement("tr");
  let userHead = document.createElement("td")
  let scoreHead = document.createElement("td")
  userHead.innerText = "Name";
  scoreHead.innerText = "Score"
  headerRow.appendChild(userHead)
  headerRow.appendChild(scoreHead)
  highScoresList.appendChild(headerRow)
  for (let i = 0; i < highScores.length; i++) {
    let tr = document.createElement("tr");
    let userTD = document.createElement("td");
    let scoreTD = document.createElement("td");
    userTD.innerText = highScores[i].name;
    scoreTD.innerText = highScores[i].score
    tr.appendChild(userTD);
    tr.appendChild(scoreTD);
    highScoresList.appendChild(tr)
  }
}

renderHighScores();

export default Game;
