import Feeder from "./feeder";
import Bird from "./bird";
import Worm from "./worm";

const background = new Image();
background.src = "./assets/stage.png";

class Stage {
  constructor(game,ctx) {
    this.game = game;
    this.ctx = ctx;
    this.birds = [];
    this.worms = [];
    this.animate = this.animate.bind(this);
    this.feeder = new Feeder(this.ctx);
    this.animate();

    setInterval(() => {
      // Randomize bird creation. 1-3 birds per sec or random time interval
      if(this.game.isPlaying()) {
        this.birds.push(new Bird(this.ctx));
      }
      else {
        return;
      }
    }, 1000);
  }

  animate() {
      this.ctx.clearRect(0, 0, 1000, 500);
      this.ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
      this.feeder.draw();
  
      this.birds.forEach((bird) => {
        bird.update();
        bird.draw();
      });
  
  
      this.worms.forEach((worm) => {
        worm.draw();
      });
      
      requestAnimationFrame(this.animate);
  }

}

export default Stage;
