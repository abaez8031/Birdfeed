import Feeder from "./feeder";
import Bird from "./bird";

class Stage {
  constructor(ctx) {
    this.ctx = ctx;
    this.birds = [];
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

    this.birds.forEach((bird) => {
      bird.update();
      bird.draw();
    });
    feeder.draw();
    requestAnimationFrame(this.animate);
  }
}

export default Stage;
