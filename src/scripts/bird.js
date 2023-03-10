class Bird {
  constructor(ctx) {
    this.width = 35;
    this.height = 35;
    this.x = canvas.width;
    this.y = Math.random() * (canvas.height - this.height);
    this.directionX = Math.random() * 5 + 2;
    this.directionY = Math.random() * 5 - 1;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "/images/My project.png";
  }

  update() {
    this.x -= this.directionX;
  }

  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export default Bird;
