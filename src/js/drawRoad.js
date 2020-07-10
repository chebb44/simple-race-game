import { drawPixel } from './drawPixel';
import { resY } from './constants';

function drawRoadLine(startX, startY) {
  for (let y = -4; y < resY; y += 1) {
    if (y % 4 !== 0) {
      drawPixel({ isActive: true, x: startX, y: startY + y });
    } else {
      drawPixel({ isActive: false, x: startX, y: startY + y });
    }
  }
}

export const drawRoad = (position) => {
  const shift = position % 4;
  drawRoadLine(0, shift);
  drawRoadLine(9, shift);
};
