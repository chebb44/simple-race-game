import { getNewRoadPart } from './getNewRoadPart';
import { GAME_DATA } from './gameData';

export const updateRoadArray = () => {
  GAME_DATA.roadShift += 1;
  let updatedRoadArray = [...GAME_DATA.roadArray];
  if (updatedRoadArray.length - GAME_DATA.roadShift < 11) {
    updatedRoadArray = [...updatedRoadArray, ...getNewRoadPart()];
  }
  if (GAME_DATA.roadShift > 30) {
    updatedRoadArray = updatedRoadArray.slice(10);
    GAME_DATA.roadShift -= 10;
  }
  GAME_DATA.roadArray = updatedRoadArray;
};
