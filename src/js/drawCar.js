import { drawPixel } from './drawPixel';
import { UP_DIR, DOWN_DIR } from './constants';

export const drawCar = ({
  canvas, context, isDraw, direction, x, y,
}) => {
  if (direction === UP_DIR) {
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 1, y,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x, y: y + 1,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 1, y: y + 1,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 2, y: y + 1,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 1, y: y + 2,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x, y: y + 3,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 2, y: y + 3,
    });
  }
  if (direction === DOWN_DIR) {
    drawPixel({
      canvas, context, isActive: isDraw, x, y,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 2, y,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 1, y: y + 1,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x, y: y + 2,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 1, y: y + 2,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 2, y: y + 2,
    });
    drawPixel({
      canvas, context, isActive: isDraw, x: x + 1, y: y + 3,
    });
  }
};
