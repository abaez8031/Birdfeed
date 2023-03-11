import Feeder from "./feeder";
import Bird from "./bird";
import Worm from "./worm";

class Stage {
  constructor(game,ctx) {
    this.game = game;
    this.ctx = ctx;
    this.birds = [];
    this.worms = [];
    this.animate = this.animate.bind(this);
    this.animate();

    setInterval(() => {
      if(this.game.isPlaying()) {
        this.birds.push(new Bird(this.ctx));
      }
      else {
        return;
      }
    }, 1000);
  }

  animate() {
    // if(this.game.isPlaying()) {
      this.ctx.clearRect(0, 0, 1000, 500);
      const background = new Image();
      background.src = "./assets/stage.png";
      this.ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
      const feeder = new Feeder(this.ctx);
  
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
    // }
    // else {
    //   this.ctx.clearRect(0,0,canvas.width, canvas.height)
    //   this.birds = []
    //   clearInterval(birdsTimer)
    //   requestAnimationFrame(this.animate)
    // }
  }

}

export default Stage;
