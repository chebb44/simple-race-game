import { fillBackground } from './js/fillBackground';
import { updateRoadArray } from './js/updateRoadArray';
import { moveCarHandler } from './js/moveCarHandler';
import { renderRoad } from './js/renderRoad';
import { renderLines } from './js/renderLines';
import { changeInterval } from './js/changeInterval';
import { renderSidebar, renderLogo } from './js/renderSidebar';
import { checkEndGame } from './js/checkEndGame';
import { screenAnimation } from './js/screenAnimation';
import { renderEndGameMessage } from './js/renderEndGameMessage';
import { renderStartGameMessage } from './js/renderStartGameMessage';
import { playStartSound, playGameOverSound } from './js/playSounds';
import { createBlock } from './js/utilities';
import { getNewRoadPart } from './js/getNewRoadPart';
import { resizeCanvas } from './js/resizeCanvas';
import {
  APP_WRAPPER,
  LOCAL_STORAGE_NAME,
  LEFT,
  START_INTERVAL,
} from './js/constants';

const getDefaultData = () => ({
  roadShift: 2,
  userCarPosition: LEFT,
  roadArray: [...getNewRoadPart(), ...getNewRoadPart()],
  score: 0,
  hiScore: localStorage.getItem(LOCAL_STORAGE_NAME) || 0,
  renderInterval: START_INTERVAL,
});
class Game {
  constructor() {
    this.$canvas = createBlock(APP_WRAPPER, 'canvas', 'app-canvas');
    this.context = this.$canvas.getContext('2d');
    this.gameData = getDefaultData();

    this.updateGameData = (data) => {
      console.log('Game -> this.updateGameData -> this', this);
      this.gameData = { ...this.gameData, ...data };
    };

    this.resetGameData = () => {
      this.gameData = getDefaultData();
    };

    this.prepareCanvas = () => {
      resizeCanvas.call(this);
      fillBackground.call(this);
      renderSidebar.call(this);
      renderLogo.call(this);
    };

    this.run = () => {
      this.prepareCanvas();
      screenAnimation
        .call(this)
        .then(() => renderStartGameMessage.call(this))
        .then(() => {
          document.addEventListener('keydown', this.startGameHandler);
        });
      window.onresize = () => {
        this.prepareCanvas();
      };
    };

    this.moveCarHandler = moveCarHandler.bind(this);

    this.startGameHandler = (e) => {
      if (+e.keyCode === 13) {
        this.resetGameData();
        this.mainGameLoop();
        document.addEventListener(
          'keydown',
          this.moveCarHandler,
        );
        playStartSound();
      }
    };

    this.mainGameLoop = () => {
      document.removeEventListener('keydown', this.startGameHandler);
      changeInterval.call(this);
      renderLines.call(this);
      updateRoadArray.call(this);
      renderRoad.call(this);
      renderSidebar.call(this);
      if (checkEndGame.call(this)) {
        document.removeEventListener('keydown', this.moveCarHandler);
        localStorage.setItem(
          LOCAL_STORAGE_NAME,
          Math.max(this.gameData.score, localStorage.getItem(LOCAL_STORAGE_NAME)),
        );
        playGameOverSound();
        screenAnimation
          .call(this)
          .then(() => renderEndGameMessage.call(this))
          .then(() => {
            document.addEventListener('keydown', this.startGameHandler);
          });
      } else {
        setTimeout(this.mainGameLoop, this.gameData.renderInterval);
      }
    };
  }
}

const game = new Game();
game.run();
