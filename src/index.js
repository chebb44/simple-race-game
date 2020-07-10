import { resizeCanvas } from './js/resizeCanvas';
import { fillBackground } from './js/fillBackground';
import { updateRoadArray } from './js/updateRoadArray';
import { moveCarHandler } from './js/moveCarHandler';
import { renderRoad } from './js/renderRoad';
import { renderLines } from './js/renderLines';
import { GAME_DATA } from './js/gameData';
import { changeInterval } from './js/changeInterval';
import { renderSidebar } from './js/renderSidebar';
import { checkEndGame } from './js/checkEndGame';

const gameIntervalHandler = () => {
  if (checkEndGame()) {
    document.removeEventListener('keydown', moveCarHandler);
    console.log('game end');
  } else {
    setTimeout(gameIntervalHandler, GAME_DATA.renderInterval);
  }
  changeInterval();
  renderLines();
  updateRoadArray();
  renderRoad();
  renderSidebar();
};

resizeCanvas();
fillBackground();
gameIntervalHandler();

document.addEventListener('keydown', moveCarHandler);
window.onresize = () => {
  resizeCanvas();
  fillBackground();
  renderSidebar();
};
