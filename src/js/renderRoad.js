import { drawEnemyCars } from './drawEnemyCars';
import { clearRoad } from './clearRoad';
import { drawUserCar } from './drawUserCar';

export function renderRoad() {
  clearRoad.call(this);
  drawEnemyCars.call(this);
  drawUserCar.call(this);
}
