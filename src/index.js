import Stage from "./scripts/stage";
import Game from "./scripts/game";
import Feeder from "./scripts/feeder";
import LeftBird from "./scripts/leftbird";
import Worm from "./scripts/worm";
import Clock from "./scripts/clock";

const audio = document.getElementById("audio");
audio.loop = true;
const pauseBtn = document.getElementById("pause-button");

let isPaused = false;

pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    isPaused = false;
    audio.play();
    pauseBtn.innerText = "Pause Song";
  } else {
    isPaused = true;
    pauseBtn.innerText = "Play Song";
    audio.pause();
  }
});

document.addEventListener("DOMContentLoaded", () => {});
