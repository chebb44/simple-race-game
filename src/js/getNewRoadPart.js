import { CAR_HEAD } from './constants';

export const getNewRoadPart = () => {
  const roadPart = [];
  if (Math.random() > 0.5) {
    for (let i = 0; i < 6; i++) {
      roadPart.push({ l: 0, r: 0 });
    }
    roadPart.push({ l: CAR_HEAD, r: 0 });
    for (let i = 0; i < 3; i++) {
      roadPart.push({ l: 1, r: 0 });
    }
  } else {
    for (let i = 0; i < 6; i++) {
      roadPart.push({ l: 0, r: 0 });
    }
    roadPart.push({ l: 0, r: CAR_HEAD });
    for (let i = 0; i < 3; i++) {
      roadPart.push({ l: 0, r: 1 });
    }
  }
  return roadPart;
};
