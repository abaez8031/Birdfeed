class Bird {
  constructor(ctx) {
    this.width = 35;
    this.height = 35;
    this.x = 0;
    this.y = Math.random() * (canvas.height - this.height);
    this.speed = Math.random() * 5 + 2;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "/images/My project.png";
    this.frame = 3;
    setInterval(this.updateFrame.bind(this), 100);
  }

  update() {
    this.x += this.speed;
  }

  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      this.frame * 37,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  updateFrame() {
    if (this.frame > 6) {
      this.frame = 3;
    } else {
      this.frame++;
    }
  }
}

export default Bird;
