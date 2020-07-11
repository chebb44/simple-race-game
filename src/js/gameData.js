import { LEFT, START_INTERVAL, LOCAL_STORAGE_NAME } from './constants';
import { getNewRoadPart } from './getNewRoadPart';

const DEFAULT_DATA = () => ({
  roadShift: 2,
  userCarPosition: LEFT,
  roadArray: [...getNewRoadPart(), ...getNewRoadPart()],
  score: 0,
  hiScore: localStorage.getItem(LOCAL_STORAGE_NAME) || 0,
  renderInterval: START_INTERVAL,
});

export const GAME_DATA = {
  roadShift: 2,
  userCarPosition: LEFT,
  roadArray: [...getNewRoadPart(), ...getNewRoadPart()],
  score: 0,
  hiScore: localStorage.getItem(LOCAL_STORAGE_NAME) || 0,
  renderInterval: START_INTERVAL,
};

export const resetGameData = () => {
  Object.keys(GAME_DATA).forEach((key) => {
    GAME_DATA[key] = DEFAULT_DATA()[key];
  });
};
