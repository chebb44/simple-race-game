import { LEFT, CAR_HEAD, RIGHT } from './constants';

function checkLineBusy(line) {
  const startElNumber = Math.max(this.gameData.roadShift - 15, 0);
  const arr = this.gameData.roadArray.slice(startElNumber, startElNumber + 5);
  return arr.filter((el) => el[line] === CAR_HEAD || el[line] === 1).length > 0;
}
export function checkEndGame() {
  if (
    (this.gameData.userCarPosition === LEFT && checkLineBusy.call(this, LEFT))
    || (this.gameData.userCarPosition === RIGHT && checkLineBusy.call(this, RIGHT))
  ) {
    return true;
  }
  return false;
}
