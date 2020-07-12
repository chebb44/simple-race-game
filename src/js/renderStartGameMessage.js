import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';

export function renderStartGameMessage() {
  const pixelSize = Math.round(this.$canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(this.$canvas.width / 20);
  this.context.clearRect(
    pixelSize * 1 + gapSize,
    pixelSize * 6 + gapSize,
    pixelSize * 8 + gapSize,
    pixelSize * 4 + gapSize,
  );
  this.context.fillStyle = BACKGROUND_COLOR;
  this.context.fillRect(
    pixelSize * 1 + gapSize,
    pixelSize * 6 + gapSize,
    pixelSize * 8 + gapSize,
    pixelSize * 4 + gapSize,
  );
  this.context.fillStyle = TEXT_COLOR;
  this.context.font = `${fontSize}px serif`;
  this.context.textAlign = 'center';

  this.context.fillText('PRESS ENTER', 5 * pixelSize, 8 * pixelSize);
  this.context.fillText('TO START', 5 * pixelSize, 9 * pixelSize);
}
