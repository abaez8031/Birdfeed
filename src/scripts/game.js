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
    canvas.addEventListener("click", this.handleClick.bind(this));
    // this.addTimer.bind(this)();
  }

  // countdown() {
  //   while (this.timeRemaining >= 0) {
  //     setInterval(() => {
  //       this.timeRemaining--;
  //     }, 1000);
  //   }
  // }

  // addTimer() {
  //   this.ctx.fillText(`Time: ${this.timeRemaining}`, 50, 50);
  // }

  handleClick(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.stage.worms.push(new Worm(this.ctx, x, y));
    this.stage.worms.forEach((worm) => this.checkWormShot(worm));
  }

  checkWormShot(worm) {
    this.stage.birds.forEach((bird) => {
      if (
        worm.x < bird.x + bird.width &&
        worm.x + worm.width > bird.x &&
        worm.y < bird.y + bird.height &&
        worm.y + worm.height > bird.y
      ) {
        // Collision detected!
        console.log("HIT");
        this.addPoint();
      }
    });
  }

  addPoint() {
    this.score++;
  }
}

new Game();
export default Game;
