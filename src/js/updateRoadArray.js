import { getNewRoadPart } from './getNewRoadPart';

export const updateRoadArray = (roadArray, roadArrayPosition) => {
  roadArrayPosition.pos += 1;
  let updatedRoadArray = [...roadArray];
  if (updatedRoadArray.length - roadArrayPosition.pos < 11) {
    updatedRoadArray = [...updatedRoadArray, ...getNewRoadPart()];
  }
  console.log(
    'updateRoadArray -> updatedRoadArray.length',
    updatedRoadArray.length,
  );
  console.log(
    'updateRoadArray -> roadArrayPosition.pos ',
    roadArrayPosition.pos,
  );
  if (roadArrayPosition.pos > 20) {
    updatedRoadArray = updatedRoadArray.slice(10);
    roadArrayPosition.pos -= 10;
  }
  return updatedRoadArray;
};
