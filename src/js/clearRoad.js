import { drawPixel } from './drawPixel';
import { resY } from './constants';

export function clearRoad() {
  for (let x = 1; x < 9; x += 1) {
    for (let y = 0; y < resY; y += 1) {
      drawPixel.call(this, {
        isActive: false,
        x,
        y,
      });
    }
  }
}
