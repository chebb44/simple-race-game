import { drawPixel } from './drawPixel';
import { UP_DIR, DOWN_DIR } from './constants';

export const drawCar = ({ isDraw, direction, x, y }) => {
  if (direction === UP_DIR) {
    drawPixel({ isActive: isDraw, x: x + 1, y });
    drawPixel({ isActive: isDraw, x, y: y + 1 });
    drawPixel({ isActive: isDraw, x: x + 1, y: y + 1 });
    drawPixel({ isActive: isDraw, x: x + 2, y: y + 1 });
    drawPixel({ isActive: isDraw, x: x + 1, y: y + 2 });
    drawPixel({ isActive: isDraw, x, y: y + 3 });
    drawPixel({ isActive: isDraw, x: x + 2, y: y + 3 });
  }
  if (direction === DOWN_DIR) {
    drawPixel({ isActive: isDraw, x, y });
    drawPixel({ isActive: isDraw, x: x + 2, y });
    drawPixel({ isActive: isDraw, x: x + 1, y: y + 1 });
    drawPixel({ isActive: isDraw, x, y: y + 2 });
    drawPixel({ isActive: isDraw, x: x + 1, y: y + 2 });
    drawPixel({ isActive: isDraw, x: x + 2, y: y + 2 });
    drawPixel({ isActive: isDraw, x: x + 1, y: y + 3 });
  }
};
