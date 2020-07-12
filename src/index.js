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
    this.context = this.$canvas.getContext('2d');

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
        .then(() => renderStartGameMessage(this.$canvas, this.context))
        .then(() => {
          document.addEventListener('keydown', this.startGameHandler);
        });
      window.onresize = () => {
        this.resizeCanvas();
        fillBackground(this.$canvas, this.context);
        renderSidebar(this.$canvas, this.context);
        renderLogo(this.$canvas, this.context);
      };
    };
    this.startGameHandler = (e) => {
      if (+e.keyCode === 13) {
        resetGameData();
        this.mainGameLoop();
        document.addEventListener('keydown', moveCarHandler(this.$canvas, this.context));
        playStartSound();
      }
    };
    this.mainGameLoop = () => {
      document.removeEventListener('keydown', this.startGameHandler);
      changeInterval();
      renderLines(this.$canvas, this.context);
      updateRoadArray();
      renderRoad(this.$canvas, this.context);
      renderSidebar(this.$canvas, this.context);
      if (checkEndGame()) {
        document.removeEventListener('keydown', moveCarHandler);
        localStorage.setItem(
          LOCAL_STORAGE_NAME,
          Math.max(GAME_DATA.score, localStorage.getItem(LOCAL_STORAGE_NAME)),
        );
        playGameOverSound();
        screenAnimation(this.$canvas, this.context)
          .then(() => renderEndGameMessage(this.$canvas, this.context))
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
