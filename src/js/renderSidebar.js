import { CONTEXT, CANVAS } from './addCanvas';
import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';
import { GAME_DATA } from './gameData';

export const renderSidebar = () => {
  const pixelSize = Math.round(CANVAS.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(CANVAS.width / 20);
  CONTEXT.clearRect(
    pixelSize * 10 + gapSize,
    0,
    pixelSize * 15 + gapSize,
    pixelSize * 20,
  );
  CONTEXT.fillStyle = BACKGROUND_COLOR;
  CONTEXT.fillRect(
    10 * pixelSize,
    0 * pixelSize,
    15 * pixelSize + gapSize,
    20 * pixelSize + gapSize,
  );
  CONTEXT.fillStyle = TEXT_COLOR;
  CONTEXT.font = `${fontSize}px serif`;
  CONTEXT.textAlign = 'center';
  CONTEXT.fillText('Score', 12.5 * pixelSize, 1 * pixelSize);
  CONTEXT.fillText(`${GAME_DATA.score}`, 12.5 * pixelSize, 2 * pixelSize);

  CONTEXT.fillText('Hi-Score', 12.5 * pixelSize, 3 * pixelSize);
  CONTEXT.fillText(`${GAME_DATA.score}`, 12.5 * pixelSize, 4 * pixelSize);

  CONTEXT.fillText('Speed', 12.5 * pixelSize, 10 * pixelSize);
  CONTEXT.fillText(`${250 - GAME_DATA.renderInterval}`, 12.5 * pixelSize, 11 * pixelSize);
};
