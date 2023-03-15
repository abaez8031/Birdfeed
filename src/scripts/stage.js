import Feeder from "./feeder";
import Bird from "./bird";
import RightBird from "./rightbird";
import Worm from "./worm";
import Clock from "./clock"

const background = new Image();
background.src = "./assets/stage.png";

class Stage {
  constructor(game,ctx) {
    this.game = game;
    this.ctx = ctx;
    this.birds = [];
    this.worms = [];
    this.clocks = [];
    this.animate = this.animate.bind(this);
    this.feeder = new Feeder(this.ctx);
    this.animate();

    setInterval(() => {
      if(this.game.isPlaying()) {
        this.clocks.push(new Clock(this.ctx))
      }
      else {
        return;
      }
    }, 7000)

    setInterval(() => {
      let numBirds = 1;
      if (this.game.timeRemaining <= 10) {
        numBirds = 6;
      }
      else if (this.game.timeRemaining <= 20) {
        numBirds = 5;
      }
      else if (this.game.timeRemaining <= 30) {
        numBirds = 4;
      }
      else if (this.game.timeRemaining <= 40) {
        numBirds = 3;
      }
      else if (this.game.timeRemaining <= 50) {
        numBirds = 2;
      }
      if(this.game.isPlaying()) {
        for(let i = 0; i < Math.floor(numBirds / 2); i++) {
          this.birds.push(new Bird(this.ctx));
        }
        for(let i = 0; i < Math.ceil(numBirds / 2); i++) {
          this.birds.push(new RightBird(this.ctx))
        }
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

      this.clocks.forEach(clock => {
        clock.update();
        clock.draw();
      });
      
      requestAnimationFrame(this.animate);
  }

}

export default Stage;
