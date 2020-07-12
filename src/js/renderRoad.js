import { drawEnemyCars } from './drawEnemyCars';
import { clearRoad } from './clearRoad';
import { drawUserCar } from './drawUserCar';

export const renderRoad = (canvas, context) => {
  clearRoad(canvas, context);
  drawEnemyCars(canvas, context);
  drawUserCar(canvas, context);
};
