class Clock {
  constructor(ctx) {
    this.width = 30;
    this.height = 30;
    this.x = 0;
    this.y = this.generateY();
    this.speed = Math.random() * 5 + 2;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src =
      "./assets/1586017.png";
  }

  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      0,
      0,
      128,
      128,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.x += this.speed;
  }

  generateY() {
    let y = Math.random() * (canvas.height - this.height);
    while (y > 250) {
      y = Math.random() * (canvas.height - this.height);
    }
    return y;
  }
}

export default Clock;