import { GAME_DATA } from './gameData';
import { LEFT, CAR_HEAD, RIGHT } from './constants';

function checkLineBusy(line) {
  const startElNumber = Math.max(GAME_DATA.roadShift - 15, 0);
  const arr = GAME_DATA.roadArray.slice(startElNumber, startElNumber + 5);
  return arr.filter((el) => el[line] === CAR_HEAD || el[line] === 1).length > 0;
}
export const checkEndGame = () => {
  if (
    (GAME_DATA.userCarPosition === LEFT && checkLineBusy('l'))
    || (GAME_DATA.userCarPosition === RIGHT && checkLineBusy('r'))
  ) {
    return true;
  }
  return false;
};
