import {
  UP_DIR,
  USER_CAR_LEFT,
  USER_CAR_RIGHT,
  RIGHT,
  LEFT,
} from './constants';
import { drawCar } from './drawCar';

export function drawUserCar() {
  if (this.gameData.userCarPosition === LEFT) {
    this.gameData.userCarPosition = LEFT;
    drawCar.call(this, {
      isDraw: true,
      direction: UP_DIR,
      ...USER_CAR_LEFT,
    });
  }
  if (this.gameData.userCarPosition === RIGHT) {
    this.gameData.userCarPosition = RIGHT;
    drawCar.call(this, {
      isDraw: true,
      direction: UP_DIR,
      ...USER_CAR_RIGHT,
    });
  }
}
