import { resizeCanvas } from './js/resizeCanvas';
import { fillBackground } from './js/fillBackground';
import { updateRoadArray } from './js/updateRoadArray';
import { moveCarHandler } from './js/moveCarHandler';
import { renderRoad } from './js/renderRoad';
import { renderLines } from './js/renderLines';
import { GAME_DATA, resetGameData } from './js/gameData';
import { changeInterval } from './js/changeInterval';
import { renderSidebar } from './js/renderSidebar';
import { checkEndGame } from './js/checkEndGame';
import { screenAnimation } from './js/screenAnimation';
import { renderEndGameMessage } from './js/renderEndGameMessage';
import { LOCAL_STORAGE_NAME } from './js/constants';
import { renderStartGameMessage } from './js/renderStartGameMessage';

export const gameIntervalHandler = () => {
  changeInterval();
  renderLines();
  updateRoadArray();
  renderRoad();
  renderSidebar();
  if (checkEndGame()) {
    document.removeEventListener('keydown', moveCarHandler);
    localStorage.setItem(
      LOCAL_STORAGE_NAME,
      Math.max(GAME_DATA.score, localStorage.getItem(LOCAL_STORAGE_NAME)),
    );
    screenAnimation()
      .then(() => renderEndGameMessage())
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        document.addEventListener('keydown', startGameHandler);
      });
  } else {
    setTimeout(gameIntervalHandler, GAME_DATA.renderInterval);
  }
};

const startGameHandler = (e) => {
  if (+e.keyCode === 13) {
    resetGameData();
    gameIntervalHandler();
    document.addEventListener('keydown', moveCarHandler);
  }
};

resizeCanvas();
fillBackground();
renderSidebar();
screenAnimation()
  .then(() => renderStartGameMessage())
  .then(() => {
    document.addEventListener('keydown', startGameHandler);
  });

window.onresize = () => {
  resizeCanvas();
  fillBackground();
  renderSidebar();
};
