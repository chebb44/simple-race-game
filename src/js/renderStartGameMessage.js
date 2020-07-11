import { CONTEXT, CANVAS } from './addCanvas';
import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';

export const renderStartGameMessage = () => {
  const pixelSize = Math.round(CANVAS.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(CANVAS.width / 20);
  CONTEXT.clearRect(
    pixelSize * 1 + gapSize,
    pixelSize * 6 + gapSize,
    pixelSize * 8 + gapSize,
    pixelSize * 4 + gapSize,
  );
  CONTEXT.fillStyle = BACKGROUND_COLOR;
  CONTEXT.fillRect(
    pixelSize * 1 + gapSize,
    pixelSize * 6 + gapSize,
    pixelSize * 8 + gapSize,
    pixelSize * 4 + gapSize,
  );
  CONTEXT.fillStyle = TEXT_COLOR;
  CONTEXT.font = `${fontSize}px serif`;
  CONTEXT.textAlign = 'center';

  CONTEXT.fillText('PRESS ENTER', 5 * pixelSize, 8 * pixelSize);
  CONTEXT.fillText('TO START', 5 * pixelSize, 9 * pixelSize);
};
