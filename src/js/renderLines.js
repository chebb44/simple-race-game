import { drawPixel } from './drawPixel';
import { resY } from './constants';
import { GAME_DATA } from './gameData';

function drawRoadLine(startX, startY) {
  for (let y = -4; y < resY; y += 1) {
    if (y % 4 !== 0) {
      drawPixel({ isActive: true, x: startX, y: startY + y });
    } else {
      drawPixel({ isActive: false, x: startX, y: startY + y });
    }
  }
}

export const renderLines = () => {
  const shift = GAME_DATA.score % 4;
  drawRoadLine(0, shift);
  drawRoadLine(9, shift);
};
