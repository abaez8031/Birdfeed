import Feeder from "./feeder";
import Bird from "./bird";
import Worm from "./worm";

class Stage {
  constructor(ctx) {
    this.ctx = ctx;
    this.birds = [];
    this.worms = [];
    this.animate = this.animate.bind(this);
    this.animate();

    setInterval(() => {
      this.birds.push(new Bird(this.ctx));
    }, 1000);
  }

  animate() {
    const background = new Image();
    const feeder = new Feeder(this.ctx);
    background.src = "/images/stage.png";
    this.ctx.clearRect(0, 0, 1000, 500);
    this.ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    feeder.draw();
    this.birds.forEach((bird) => {
      bird.update();
      bird.draw();
    });
    this.worms.forEach((worm) => {
      worm.draw();
    });
    // this.ctx.fillStyle = "rgba(150,70,20,.3)";
    // this.ctx.fillRect(50, 50, 300, 100);
    // this.ctx.fillText(`Score: ${this.score}`, 50, 50);
    requestAnimationFrame(this.animate);
  }
}

export default Stage;
