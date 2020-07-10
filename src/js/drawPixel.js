import { CONTEXT, CANVAS } from './addCanvas';
import {
  ACTIVE_COLOR,
  INACTIVE_COLOR,
  resX,
  BACKGROUND_COLOR,
} from './constants';

export const drawPixel = ({ isActive, x, y }) => {
  const pixelSize = Math.round(CANVAS.width / resX);
  const gapSize = Math.round(pixelSize * 0.1);
  CONTEXT.clearRect(
    x * pixelSize,
    y * pixelSize,
    pixelSize + gapSize,
    pixelSize + gapSize,
  );
  CONTEXT.fillStyle = BACKGROUND_COLOR;
  CONTEXT.fillRect(
    x * pixelSize,
    y * pixelSize,
    pixelSize + gapSize,
    pixelSize + gapSize,
  );
  CONTEXT.strokeStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  CONTEXT.fillStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
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
