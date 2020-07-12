import { CAR_HEAD, LEFT, RIGHT } from './constants';

export const getNewRoadPart = () => {
  const roadPart = [];
  if (Math.random() > 0.5) {
    for (let i = 0; i < 6; i += 1) {
      roadPart.push({ [LEFT]: 0, [RIGHT]: 0 });
    }
    roadPart.push({ [LEFT]: CAR_HEAD, [RIGHT]: 0 });
    for (let i = 0; i < 3; i += 1) {
      roadPart.push({ [LEFT]: 1, [RIGHT]: 0 });
    }
  } else {
    for (let i = 0; i < 6; i += 1) {
      roadPart.push({ [LEFT]: 0, [RIGHT]: 0 });
    }
    roadPart.push({ [LEFT]: 0, [RIGHT]: CAR_HEAD });
    for (let i = 0; i < 3; i += 1) {
      roadPart.push({ [LEFT]: 0, [RIGHT]: 1 });
    }
  }
  return roadPart;
};
