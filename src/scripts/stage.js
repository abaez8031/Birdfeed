import Feeder from "./feeder";
import Bird from "./bird";
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

    // setInterval() for generating clocks

    setInterval(() => {
      if(this.game.isPlaying()) {
        this.clocks.push(new Clock(this.ctx))
      }
      else {
        return;
      }
    }, 7000)

    setInterval(() => {
      const numBirds = Math.floor(Math.random() * 3) + 1
      if(this.game.isPlaying()) {
        for(let i = 0; i < numBirds; i++) {
          this.birds.push(new Bird(this.ctx));
        }
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

      this.clocks.forEach(clock => {
        clock.update();
        clock.draw();
      });
      
      requestAnimationFrame(this.animate);
  }

}

export default Stage;
