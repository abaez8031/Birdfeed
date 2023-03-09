import Stage from "./scripts/stage";
import Game from "./scripts/game";
import Feeder from "./scripts/feeder";
import Bird from "./scripts/bird";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello world");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const stage = new Stage(ctx);
});
