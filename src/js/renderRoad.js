import { drawEnemyCars } from './drawEnemyCars';
import { clearRoad } from './clearRoad';
import { drawUserCar } from './drawUserCar';

export const renderRoad = () => {
  clearRoad();
  drawEnemyCars();
  drawUserCar();
};
