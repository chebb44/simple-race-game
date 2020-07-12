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

class Game {
  constructor() {
    this.run = () => {
      resizeCanvas();
      fillBackground();
      renderSidebar();
      renderLogo();
      screenAnimation()
        .then(() => renderStartGameMessage())
        .then(() => {
          document.addEventListener('keydown', this.startGameHandler);
        });
      window.onresize = () => {
        resizeCanvas();
        fillBackground();
        renderSidebar();
        renderLogo();
      };
    };
    this.startGameHandler = (e) => {
      if (+e.keyCode === 13) {
        console.log('Game -> startGameHandler -> this', this);
        resetGameData();
        this.mainGameLoop();
        document.addEventListener('keydown', moveCarHandler);
        playStartSound();
      }
    };
    this.mainGameLoop = () => {
      document.removeEventListener('keydown', this.startGameHandler);
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
            document.addEventListener('keydown', this.startGameHandler);
          });
      } else {
        setTimeout(this.mainGameLoop, GAME_DATA.renderInterval);
      }
    };
  }
}

const game = new Game();
game.run();
