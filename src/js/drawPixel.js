import {
  ACTIVE_COLOR,
  INACTIVE_COLOR,
  resX,
  BACKGROUND_COLOR,
} from './constants';

export function drawPixel({ isActive, x, y }) {
  const pixelSize = Math.round(this.$canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  this.context.clearRect(
    x * pixelSize,
    y * pixelSize,
    pixelSize + gapSize,
    pixelSize + gapSize,
  );
  this.context.fillStyle = BACKGROUND_COLOR;
  this.context.fillRect(
    x * pixelSize,
    y * pixelSize,
    pixelSize + gapSize,
    pixelSize + gapSize,
  );
  this.context.strokeStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  this.context.fillStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  this.context.strokeRect(
    x * pixelSize + gapSize,
    y * pixelSize + gapSize,
    pixelSize - gapSize,
    pixelSize - gapSize,
  );
  this.context.fillRect(
    x * pixelSize + gapSize * 2,
    y * pixelSize + gapSize * 2,
    pixelSize - gapSize * 3,
    pixelSize - gapSize * 3,
  );
}
