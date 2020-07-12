import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';

export const renderStartGameMessage = (canvas, context) => {
  const pixelSize = Math.round(canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(canvas.width / 20);
  context.clearRect(
    pixelSize * 1 + gapSize,
    pixelSize * 6 + gapSize,
    pixelSize * 8 + gapSize,
    pixelSize * 4 + gapSize,
  );
  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(
    pixelSize * 1 + gapSize,
    pixelSize * 6 + gapSize,
    pixelSize * 8 + gapSize,
    pixelSize * 4 + gapSize,
  );
  context.fillStyle = TEXT_COLOR;
  context.font = `${fontSize}px serif`;
  context.textAlign = 'center';

  context.fillText('PRESS ENTER', 5 * pixelSize, 8 * pixelSize);
  context.fillText('TO START', 5 * pixelSize, 9 * pixelSize);
};
