let frame;
canvas.addEventListener("mousemove", (e) => {
  const x = e.offsetX;
  if (x >= 0) frame = 1;
  if (x >= 130) frame = 2;
  if (x >= 280) frame = 3;
  if (x >= 430) frame = 4;
  if (x >= 580) frame = 5;
  if (x >= 730) frame = 6;
  if (x >= 850) frame = 7;
});

class Feeder {
  constructor(ctx) {
    this.width = 50;
    this.height = 70;
    this.x = 475;
    this.y = 430;
    this.image = new Image();
    this.image.src = "./assets/172970-PhotoRoom.png";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      frame * 52.5 - 2.5,
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
