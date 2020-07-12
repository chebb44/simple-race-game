import { getNewRoadPart } from './getNewRoadPart';

export function updateRoadArray() {
  this.gameData.roadShift += 1;
  let updatedRoadArray = [...this.gameData.roadArray];
  if (updatedRoadArray.length - this.gameData.roadShift < 11) {
    updatedRoadArray = [...updatedRoadArray, ...getNewRoadPart()];
  }
  if (this.gameData.roadShift > 30) {
    updatedRoadArray = updatedRoadArray.slice(10);
    this.gameData.roadShift -= 10;
  }
  this.gameData.roadArray = updatedRoadArray;
};
