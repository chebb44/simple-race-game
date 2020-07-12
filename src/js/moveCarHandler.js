import { RIGHT, LEFT } from './constants';
import { renderRoad } from './renderRoad';
import { GAME_DATA } from './gameData';

export const moveCarHandler = (canvas, context) => (e) => {
  if (+e.keyCode === 37 && GAME_DATA.userCarPosition === RIGHT) {
    GAME_DATA.userCarPosition = LEFT;
    renderRoad(canvas, context);
  }
  if (+e.keyCode === 39 && GAME_DATA.userCarPosition === LEFT) {
    GAME_DATA.userCarPosition = RIGHT;
    renderRoad(canvas, context);
  }
};
