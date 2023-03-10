class Worm {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/worm_1fab1.png";
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
  }

  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

export default Worm;
