import { CAR_HEAD, DOWN_DIR } from './constants';
import { drawCar } from './drawCar';
import { GAME_DATA } from './gameData';

export const drawEnemyCars = () => {
  GAME_DATA.roadArray.forEach((element, index) => {
    if (element.l === CAR_HEAD) {
      drawCar({
        isDraw: true,
        direction: DOWN_DIR,
        x: 2,
        y: GAME_DATA.roadShift - index,
      });
    }
    if (element.r === CAR_HEAD) {
      drawCar({
        isDraw: true,
        direction: DOWN_DIR,
        x: 5,
        y: GAME_DATA.roadShift - index,
      });
    }
  });
};
