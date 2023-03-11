import { setInterval } from "core-js";

import Stage from "./stage";
import Worm from "./worm";

class Game {
  constructor() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    this.ctx = ctx;
    canvas.width = 1000;
    canvas.height = 500;
    this.stage = new Stage(ctx);
    this.timeRemaining = 60;
    this.score = 0;
    this.playing = true;
    canvas.addEventListener("click", this.handleClick.bind(this));
    setInterval(this.renderScore.bind(this), 0);
    const timer = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        this.endGame()
      }
    }, 1000);
  }

  handleClick(e) {
    if (this.playing) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
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
      this.stage.birds.forEach((bird) => {
        if (
          worm.x < bird.x + bird.width &&
          worm.x + worm.width > bird.x &&
          worm.y < bird.y + bird.height &&
          worm.y + worm.height > bird.y
        ) {
          console.log("HIT");
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
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerText = `SCORE: ${this.score} TIME: ${this.timeRemaining}`;
  }

  endGame() {
    this.playing = false;
    clearInterval(this.timer);
  }
  
}

new Game();

export default Game;
