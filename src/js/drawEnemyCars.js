import {
  CAR_HEAD, DOWN_DIR, LEFT, RIGHT,
} from './constants';
import { drawCar } from './drawCar';

export function drawEnemyCars() {
  this.gameData.roadArray.forEach((element, index) => {
    if (element[LEFT] === CAR_HEAD) {
      drawCar.call(this, {
        isDraw: true,
        direction: DOWN_DIR,
        x: 2,
        y: this.gameData.roadShift - index,
      });
    }
    if (element[RIGHT] === CAR_HEAD) {
      drawCar.call(this, {
        isDraw: true,
        direction: DOWN_DIR,
        x: 5,
        y: this.gameData.roadShift - index,
      });
    }
  });
}
