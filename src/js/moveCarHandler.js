import { UP_DIR, USER_CAR_LEFT, USER_CAR_RIGHT } from './constants';
import { drawCar } from './drawCar';

export const moveCarHandler = (e) => {
  if (e.keyCode == 37) {
    console.log('left');
    drawCar({ isDraw: false, direction: UP_DIR, ...USER_CAR_RIGHT });
    drawCar({ isDraw: true, direction: UP_DIR, ...USER_CAR_LEFT });
  }
  if (e.keyCode == 39) {
    console.log('right');
    drawCar({ isDraw: false, direction: UP_DIR, ...USER_CAR_LEFT });
    drawCar({ isDraw: true, direction: UP_DIR, ...USER_CAR_RIGHT });
  }
};
