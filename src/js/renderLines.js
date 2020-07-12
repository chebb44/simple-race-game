import { drawPixel } from './drawPixel';
import { resY } from './constants';
import { GAME_DATA } from './gameData';

function drawRoadLine(canvas, context, startX, startY) {
  for (let y = -4; y < resY; y += 1) {
    if (y % 4 !== 0) {
      drawPixel({
        canvas, context, isActive: true, x: startX, y: startY + y,
      });
    } else {
      drawPixel({
        canvas, context, isActive: false, x: startX, y: startY + y,
      });
    }
  }
}

export const renderLines = (canvas, context) => {
  const shift = GAME_DATA.score % 4;
  drawRoadLine(canvas, context, 0, shift);
  drawRoadLine(canvas, context, 9, shift);
};
