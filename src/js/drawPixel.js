import { CONTEXT, CANVAS } from './addCanvas';
import { ACTIVE_COLOR, INACTIVE_COLOR, resX } from './constants';

export const drawPixel = ({ isActive, x, y }) => {
  const pixelSize = Math.round(CANVAS.width / resX);
  CONTEXT.strokeStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  CONTEXT.fillStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  const gapSize = Math.round(pixelSize * 0.1);
  CONTEXT.clearRect(x * pixelSize, y * pixelSize, pixelSize + gapSize, pixelSize + gapSize);
  CONTEXT.strokeRect(
    x * pixelSize + gapSize,
    y * pixelSize + gapSize,
    pixelSize - gapSize,
    pixelSize - gapSize,
  );
  CONTEXT.fillRect(
    x * pixelSize + gapSize * 2,
    y * pixelSize + gapSize * 2,
    pixelSize - gapSize * 3,
    pixelSize - gapSize * 3,
  );
};
