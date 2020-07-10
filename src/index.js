import { resizeCanvas } from './js/resizeCanvas';
import { fillBackground } from './js/fillBackground';
import { updateRoadArray } from './js/updateRoadArray';
import { moveCarHandler } from './js/moveCarHandler';
import { renderRoad } from './js/renderRoad';
import { renderLines } from './js/renderLines';
import { GAME_DATA } from './js/gameData';

const stepInterval = 300;
const gameIntervalHandler = () => {
  GAME_DATA.score += 1;
  renderLines(GAME_DATA.score);
  updateRoadArray();
  renderRoad();

  setTimeout(gameIntervalHandler, stepInterval);
};

resizeCanvas();
fillBackground();
gameIntervalHandler();

document.onkeydown = moveCarHandler;
window.onresize = () => {
  resizeCanvas();
  fillBackground();
};
