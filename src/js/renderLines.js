import { drawPixel } from './drawPixel';
import { resY } from './constants';

function drawRoadLine(startX, startY) {
  for (let y = -4; y < resY; y += 1) {
    if (y % 4 !== 0) {
      drawPixel.call(this, {
        isActive: true,
        x: startX,
        y: startY + y,
      });
    } else {
      drawPixel.call(this, {
        isActive: false,
        x: startX,
        y: startY + y,
      });
    }
  }
}

export function renderLines() {
  const shift = this.gameData.score % 4;
  drawRoadLine.call(this, 0, shift);
  drawRoadLine.call(this, 9, shift);
}
