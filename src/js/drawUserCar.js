import {
  UP_DIR,
  USER_CAR_LEFT,
  USER_CAR_RIGHT,
  RIGHT,
  LEFT,
} from './constants';
import { drawCar } from './drawCar';
import { GAME_DATA } from './gameData';

export const drawUserCar = () => {
  if (GAME_DATA.userCarPosition === LEFT) {
    GAME_DATA.userCarPosition = LEFT;
    drawCar({ isDraw: true, direction: UP_DIR, ...USER_CAR_LEFT });
  }
  if (GAME_DATA.userCarPosition === RIGHT) {
    GAME_DATA.userCarPosition = RIGHT;
    drawCar({ isDraw: true, direction: UP_DIR, ...USER_CAR_RIGHT });
  }
};
