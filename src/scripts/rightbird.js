class RightBird {
  constructor(ctx) {
    this.width = 35;
    this.height = 35;
    this.x = 1000;
    this.y = this.generateY();
    this.speed = Math.random() * 5 + 2;
    this.yDirTimeTracker = 10;
    this.yDirTracker = "down"
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./assets/My project (1).png";
    this.frame = 3;
    setInterval(this.updateFrame.bind(this), 100);
  }

  update() {
    this.x -= this.speed;
    if(this.yDirTracker === "down") {
      this.yDirTimeTracker -= 1
      this.y -= this.speed
    }
    if (this.yDirTracker === "up") {
      this.yDirTimeTracker += 1
      this.y += this.speed
    }
    if (this.yDirTimeTracker === 15) {
      this.yDirTracker = "down"
    }
    if (this.yDirTimeTracker === 0) {
      this.yDirTracker = "up"
    }
  }

  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      this.frame * 35,
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

  generateY() {
    let y = Math.random() * (canvas.height - this.height);
    while (y > 250) {
      y = Math.random() * (canvas.height - this.height);
    }
    return y
  }
}

export default RightBird;
