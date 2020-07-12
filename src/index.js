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
import { renderStartGameMessage } from './js/renderStartGameMessage';
import { playStartSound, playGameOverSound } from './js/playSounds';
import { createBlock } from './js/utilities';
import {
  APP_WRAPPER, resY, resX, LOCAL_STORAGE_NAME,
} from './js/constants';

class Game {
  constructor() {
    this.$canvas = createBlock(APP_WRAPPER, 'canvas', 'app-canvas');
    this.context = this.canvas.getContext('2d');

    this.resizeCanvas = () => {
      const { clientWidth } = document.body;
      const canvasHeight = clientWidth * 0.9 > 600 ? 600 : clientWidth * 0.9;
      this.$canvas.height = Math.round(canvasHeight / resY) * resY;
      this.$canvas.width = Math.round((canvasHeight * 0.75) / resX) * resX;
    };

    this.run = () => {
      this.resizeCanvas(this.canvas);
      fillBackground(this.$canvas, this.context);
      renderSidebar(this.$canvas, this.context);
      renderLogo(this.$canvas, this.context);
      screenAnimation(this.$canvas, this.context)
        .then(() => renderStartGameMessage())
        .then(() => {
          document.addEventListener('keydown', this.startGameHandler);
        });
      window.onresize = () => {
        this.resizeCanvas();
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
