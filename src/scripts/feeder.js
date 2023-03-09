import Stage from "./stage";

class Feeder {
  constructor(ctx) {
    this.width = 50;
    this.height = 70;
    this.x = 475;
    this.y = 430;
    this.image = new Image();
    this.image.src = "/images/Arcade - Blood Bros - Player 1.png";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      35,
      30,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export default Feeder;
