import { resizeCanvas } from './js/resizeCanvas';
import { fillBackground } from './js/fillBackground';
import { drawRoad } from './js/drawRoad';
import { drawCar } from './js/drawCar';
import { UP_DIR, DOWN_DIR } from './js/constants';
import { moveCarHandler } from './js/moveCarHandler';
import { getNewRoadPart } from './js/getNewRoadPart';
import { drawEnemyCars } from './js/drawEnemyCars';
import { updateRoadArray } from './js/updateRoadArray';

resizeCanvas();
fillBackground();
window.onresize = () => {
  resizeCanvas();
  fillBackground();
};

let score = 0;
let stepInterval = 1500;
let roadArrayPosition = { pos: 0 };
let roadArray = [...getNewRoadPart(), ...getNewRoadPart()];

const gameIntervalHandler = () => {
  score += 1;
  setTimeout(gameIntervalHandler, stepInterval);
  drawRoad(score);
  roadArray = updateRoadArray(roadArray, roadArrayPosition);
  drawEnemyCars(roadArray, roadArrayPosition);
};

gameIntervalHandler();

document.addEventListener('keydown', moveCarHandler);
console.log(getNewRoadPart());
