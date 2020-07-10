import { resizeCanvas } from './js/resizeCanvas';
import { fillBackground } from './js/fillBackground';
import { updateRoadArray } from './js/updateRoadArray';
import { moveCarHandler } from './js/moveCarHandler';
import { renderRoad } from './js/renderRoad';
import { renderLines } from './js/renderLines';
import { GAME_DATA } from './js/gameData';
import { changeInterval } from './js/changeInterval';
import { renderSidebar } from './js/renderSidebar';

const gameIntervalHandler = () => {
  changeInterval();
  renderLines();
  updateRoadArray();
  renderRoad();
  renderSidebar();

  setTimeout(gameIntervalHandler, GAME_DATA.renderInterval);
};

resizeCanvas();
fillBackground();
gameIntervalHandler();

document.onkeydown = moveCarHandler;
window.onresize = () => {
  resizeCanvas();
  fillBackground();
};
