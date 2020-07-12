import { drawPixel } from './drawPixel';
import { resY } from './constants';

export const clearRoad = (canvas, context) => {
  for (let x = 1; x < 9; x += 1) {
    for (let y = 0; y < resY; y += 1) {
      drawPixel({
        canvas, context, isActive: false, x, y,
      });
    }
  }
};
