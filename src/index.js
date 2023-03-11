import Stage from "./scripts/stage";
import Game from "./scripts/game";
import Feeder from "./scripts/feeder";
import Bird from "./scripts/bird";
import Worm from "./scripts/worm";
const audio = document.getElementById("audio")
const pauseBtn = document.getElementById("pause-button")

let isPaused = false;

pauseBtn.addEventListener("click", () => {
  if(isPaused) {
    isPaused = false;
    audio.play()
    pauseBtn.innerText = "Pause Song"
  }
  else {
    isPaused = true
    pauseBtn.innerText = "Play Song"
    audio.pause()
  }
})


document.addEventListener("DOMContentLoaded", () => {
});
