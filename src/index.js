import { resizeCanvas } from './js/resizeCanvas';
import { fillBackground } from './js/fillBackground';
import { drawRoad } from './js/drawRoad';

resizeCanvas();
fillBackground();
window.onresize = () => {
  resizeCanvas();
  fillBackground();
};

let score = 0;
let stepInterval = 500;

const gameIntervalHandler = () => {
  score += 1;
  if (score > 5) {
    stepInterval = 200;
  }
  setTimeout(gameIntervalHandler, stepInterval);
  drawRoad(score);
};

gameIntervalHandler();
