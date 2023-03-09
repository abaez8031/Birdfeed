const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;

const background = new Image();
background.src = "/images/stage.png";

const birds = [];
setInterval(() => {
  birds.push(new Bird());
}, 1000);
// const bird = new Bird();
const feeder = new Feeder();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  birds.forEach((bird) => {
    bird.update();
    bird.draw();
  });
  feeder.draw();
  requestAnimationFrame(animate);
}

animate();
