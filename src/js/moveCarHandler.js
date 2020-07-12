import { RIGHT, LEFT } from './constants';
import { renderRoad } from './renderRoad';

export function moveCarHandler(e) {
  if (+e.keyCode === 37 && this.gameData.userCarPosition === RIGHT) {
    this.gameData.userCarPosition = LEFT;
    renderRoad.call(this);
  }
  if (+e.keyCode === 39 && this.gameData.userCarPosition === LEFT) {
    this.gameData.userCarPosition = RIGHT;
    renderRoad.call(this);
  }
};
