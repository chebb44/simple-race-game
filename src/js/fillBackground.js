import { resX, resY } from './constants';
import { drawPixel } from './drawPixel';

export const fillBackground = () => {
  for (let x = 0; x < resX - 5; x += 1) {
    for (let y = 0; y < resY; y += 1) {
      drawPixel({ isActive: false, x, y });
    }
  }
};
