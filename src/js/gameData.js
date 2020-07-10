import { LEFT, START_INTERVAL } from './constants';
import { getNewRoadPart } from './getNewRoadPart';

export const GAME_DATA = {
  roadShift: 10,
  userCarPosition: LEFT,
  roadArray: [...getNewRoadPart(), ...getNewRoadPart()],
  score: 0,
  renderInterval: START_INTERVAL,
};
