import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';

export const renderEndGameMessage = () => {
  const pixelSize = Math.round(CANVAS.$canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(CANVAS.width / 20);
  CANVAS.context.clearRect(
    pixelSize * 1 + gapSize,
    pixelSize * 5 + gapSize,
    pixelSize * 8 + gapSize,
    pixelSize * 5 + gapSize,
  );
  CANVAS.context.fillStyle = BACKGROUND_COLOR;
  CANVAS.context.fillRect(
    pixelSize * 1 + gapSize,
    pixelSize * 5 + gapSize,
    pixelSize * 8 + gapSize,
    pixelSize * 5 + gapSize,
  );
  CANVAS.context.fillStyle = TEXT_COLOR;
  CANVAS.context.font = `${fontSize}px serif`;
  CANVAS.context.textAlign = 'center';

  CANVAS.context.fillText('GAME OVER', 5 * pixelSize, 6.5 * pixelSize);
  CANVAS.context.fillText('PRESS ENTER', 5 * pixelSize, 8 * pixelSize);
  CANVAS.context.fillText('TO RESTART', 5 * pixelSize, 9 * pixelSize);
};
