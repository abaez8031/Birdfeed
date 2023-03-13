import { setInterval } from "core-js";

import Stage from "./stage";
import Worm from "./worm";

const newGameBtn = document.getElementById("new-game-button")
const scoreboard = document.getElementById("scoreboard");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;
let activeGame = false;
let game = null;

// IMPLEMENTING A HIGH SCORE LEADERBOARD
let highscores = {
  "PLS": 60,
  "TAK": 50,
  "ME": 40,
  "OFF": 30,
  "DIS": 20
};

class Game {
  constructor() {
    this.ctx = ctx;
    this.playing = true;
    this.stage = new Stage(this,ctx);
    this.timeRemaining = 60;
    this.score = 0;
    this.numShots = 0;
    activeGame = true;
    canvas.addEventListener("click", this.handleClick.bind(this));
    setInterval(this.renderScore.bind(this), 0);
    
    this.timer = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        clearInterval(this.timer)
        this.endGame()
      }
    }, 1000);

  }

  handleClick(e) {
    if (this.playing) {
      this.numShots++
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
      this.stage.clocks.forEach(clock => {
        if(
          worm.x < clock.x + clock.width &&
          worm.x + worm.width > clock.x &&
          worm.y < clock.y + clock.height &&
          worm.y + worm.height > clock.y
        ) {
          const index = this.stage.clocks.indexOf(clock)
          this.stage.clocks.splice(index,1)
          this.timeRemaining += 3
          this.numShots--
        }
      })
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
      scoreboard.innerText = `SCORE: ${this.score} TIME: ${this.timeRemaining} ACCURACY: ${Math.round(this.score/ this.numShots * 100)}% `;
    }

  endGame() {
    this.playing = false;
    activeGame = false;
    this.stage.birds = [];
    this.stage.clocks = [];
    alert(`GAME OVER! Your score is ${this.score}`);
  }

  restartGame() {
    if (this.playing) {
      this.endGame()
    }
    clearInterval(this.timer)
    this.score = 0;
    this.timeRemaining = 60;
    this.numShots = 0;
    activeGame = true;
    this.playing = true;
    this.timer = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        clearInterval(this.timer)
        this.endGame()
      }
    }, 1000);
  }

  isPlaying() {
    return this.playing
  }

}

if(!game) {
ctx.fillStyle = "aliceblue"
ctx.fillRect(0,0,canvas.width, canvas.height)
ctx.font = "20px Helvetica";
ctx.fillStyle = "pink";
ctx.fillText("The objective of this game is to feed the flying birds.", 10, 60);
ctx.fillText("1. Use your mouse to aim your worm gun at the birds flying overhead.", 10, 120);
ctx.fillText("2. You have 60 seconds to feed as many birds as possible.", 10, 180);
ctx.fillText("3. Hit the hourglasses to add 3 seconds on to your time limit.", 10, 240);
ctx.fillText("4. Happy hunting! Ahem I mean feeding!", 10, 300);
}


newGameBtn.addEventListener("click", () => {
  if(!game) {
    game = new Game()
    audio.play()
  }
  else {
    game.restartGame()
  }
})

canvas.addEventListener("click", () => {
  if(!game) {
    game = new Game()
    audio.play()
  }
})

export default Game;
