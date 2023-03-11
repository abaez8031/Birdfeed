import Stage from "./stage";

let frame;
canvas.addEventListener("mousemove", (e) => {
  const x = e.offsetX
  if(x >= 0) frame = 1
  if(x >= 150) frame = 2
  if(x >= 300) frame = 3
  if(x >= 450) frame = 4
  if(x >= 600) frame = 5
  if(x >= 750) frame = 6
  if(x >= 900) frame = 7
})

class Feeder {
  constructor(ctx) {
    this.width = 50;
    this.height = 70;
    this.x = 475;
    this.y = 430;
    this.image = new Image();
    this.image.src = "/images/172971-PhotoRoom.png";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      frame * 50,
      30,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Feeder;
