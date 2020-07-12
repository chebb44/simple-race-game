import {
  ACTIVE_COLOR,
  INACTIVE_COLOR,
  resX,
  BACKGROUND_COLOR,
} from './constants';

export const drawPixel = ({
  canvas, context, isActive, x, y,
}) => {
  const pixelSize = Math.round(canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  context.clearRect(
    x * pixelSize,
    y * pixelSize,
    pixelSize + gapSize,
    pixelSize + gapSize,
  );
  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(
    x * pixelSize,
    y * pixelSize,
    pixelSize + gapSize,
    pixelSize + gapSize,
  );
  context.strokeStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  context.fillStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  context.strokeRect(
    x * pixelSize + gapSize,
    y * pixelSize + gapSize,
    pixelSize - gapSize,
    pixelSize - gapSize,
  );
  context.fillRect(
    x * pixelSize + gapSize * 2,
    y * pixelSize + gapSize * 2,
    pixelSize - gapSize * 3,
    pixelSize - gapSize * 3,
  );
};
