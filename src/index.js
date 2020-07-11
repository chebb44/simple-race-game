/* eslint-disable no-use-before-define */
import { resizeCanvas } from './js/resizeCanvas';
import { fillBackground } from './js/fillBackground';
import { updateRoadArray } from './js/updateRoadArray';
import { moveCarHandler } from './js/moveCarHandler';
import { renderRoad } from './js/renderRoad';
import { renderLines } from './js/renderLines';
import { GAME_DATA, resetGameData } from './js/gameData';
import { changeInterval } from './js/changeInterval';
import { renderSidebar, renderLogo } from './js/renderSidebar';
import { checkEndGame } from './js/checkEndGame';
import { screenAnimation } from './js/screenAnimation';
import { renderEndGameMessage } from './js/renderEndGameMessage';
import { LOCAL_STORAGE_NAME } from './js/constants';
import { renderStartGameMessage } from './js/renderStartGameMessage';
import { playStartSound, playGameOverSound } from './js/playSounds';

export const mainGameLoop = () => {
  document.removeEventListener('keydown', startGameHandler);
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
    playGameOverSound();
    screenAnimation()
      .then(() => renderEndGameMessage())
      .then(() => {
        document.addEventListener('keydown', startGameHandler);
      });
  } else {
    setTimeout(mainGameLoop, GAME_DATA.renderInterval);
  }
};

const startGameHandler = (e) => {
  if (+e.keyCode === 13) {
    resetGameData();
    mainGameLoop();
    document.addEventListener('keydown', moveCarHandler);
    playStartSound();
  }
};

resizeCanvas();
fillBackground();
renderSidebar();
renderLogo();

screenAnimation()
  .then(() => renderStartGameMessage())
  .then(() => {
    document.addEventListener('keydown', startGameHandler);
  });

window.onresize = () => {
  resizeCanvas();
  fillBackground();
  renderSidebar();
  renderLogo();
};
