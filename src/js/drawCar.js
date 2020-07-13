import { drawPixel } from './drawPixel';
import { UP_DIR, DOWN_DIR } from './constants';

export function drawCar({
  isDraw, direction, x, y,
}) {
  const carUpPixels = [
    { x: x + 1, y },
    { x, y: y + 1 },
    { x: x + 1, y: y + 1 },
    { x: x + 2, y: y + 1 },
    { x: x + 1, y: y + 2 },
    { x, y: y + 3 },
    { x: x + 2, y: y + 3 },
  ];
  const carDownPixels = [
    { x, y },
    { x: x + 2, y },
    { x: x + 1, y: y + 1 },
    { x, y: y + 2 },
    { x: x + 1, y: y + 2 },
    { x: x + 2, y: y + 2 },
    { x: x + 1, y: y + 3 },
  ];
  if (direction === UP_DIR) {
    carUpPixels.forEach((item) => {
      drawPixel.call(this, {
        isActive: isDraw,
        x: item.x,
        y: item.y,
      });
    });
  }
  if (direction === DOWN_DIR) {
    carDownPixels.forEach((item) => {
      drawPixel.call(this, {
        isActive: isDraw,
        x: item.x,
        y: item.y,
      });
    });
  }
}
