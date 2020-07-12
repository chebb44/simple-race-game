import {
  ACTIVE_COLOR,
  INACTIVE_COLOR,
  resX,
  BACKGROUND_COLOR,
} from './constants';
import { CANVAS } from './baseCanvasClass';

export const drawPixel = ({ isActive, x, y }) => {
  const pixelSize = Math.round(CANVAS.$canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  CANVAS.context.clearRect(
    x * pixelSize,
    y * pixelSize,
    pixelSize + gapSize,
    pixelSize + gapSize,
  );
  CANVAS.context.fillStyle = BACKGROUND_COLOR;
  CANVAS.context.fillRect(
    x * pixelSize,
    y * pixelSize,
    pixelSize + gapSize,
    pixelSize + gapSize,
  );
  CANVAS.context.strokeStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  CANVAS.context.fillStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  CANVAS.context.strokeRect(
    x * pixelSize + gapSize,
    y * pixelSize + gapSize,
    pixelSize - gapSize,
    pixelSize - gapSize,
  );
  CANVAS.context.fillRect(
    x * pixelSize + gapSize * 2,
    y * pixelSize + gapSize * 2,
    pixelSize - gapSize * 3,
    pixelSize - gapSize * 3,
  );
};
