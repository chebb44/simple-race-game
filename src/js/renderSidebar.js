import { CONTEXT, CANVAS } from './addCanvas';
import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';
import { GAME_DATA } from './gameData';
import logoImg from '../assets/tetris.svg';

export const renderSidebar = () => {
  const pixelSize = Math.round(CANVAS.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(CANVAS.width / 20);
  CONTEXT.clearRect(
    pixelSize * 10 + gapSize,
    0,
    pixelSize * 15 + gapSize,
    pixelSize * 13,
  );
  CONTEXT.fillStyle = BACKGROUND_COLOR;
  CONTEXT.fillRect(
    10 * pixelSize,
    0 * pixelSize,
    15 * pixelSize + gapSize,
    13 * pixelSize + gapSize,
  );
  CONTEXT.fillStyle = TEXT_COLOR;
  CONTEXT.font = `${fontSize}px serif`;
  CONTEXT.textAlign = 'center';

  CONTEXT.fillText('Score', 12.5 * pixelSize, 1 * pixelSize);
  CONTEXT.fillText(`${GAME_DATA.score}`, 12.5 * pixelSize, 2 * pixelSize);

  CONTEXT.fillText('Hi-Score', 12.5 * pixelSize, 3 * pixelSize);
  CONTEXT.fillText(`${GAME_DATA.hiScore}`, 12.5 * pixelSize, 4 * pixelSize);

  CONTEXT.fillText('Speed', 12.5 * pixelSize, 6 * pixelSize);
  CONTEXT.fillText(
    `${250 - GAME_DATA.renderInterval}`,
    12.5 * pixelSize,
    7 * pixelSize,
  );
  CONTEXT.fillText('BRICK', 12.5 * pixelSize, 11 * pixelSize);
  CONTEXT.fillText('RACING', 12.5 * pixelSize, 12 * pixelSize);
};

export const renderLogo = () => {
  const pixelSize = Math.round(CANVAS.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  CONTEXT.clearRect(
    pixelSize * 10 + gapSize,
    pixelSize * 13 + gapSize,
    pixelSize * 15 + gapSize,
    pixelSize * 20 + gapSize,
  );
  CONTEXT.fillStyle = BACKGROUND_COLOR;
  CONTEXT.fillRect(
    10 * pixelSize,
    13 * pixelSize,
    15 * pixelSize + gapSize,
    20 * pixelSize + gapSize,
  );
  const logo = new Image();
  logo.src = logoImg;
  logo.onload = () => {
    CONTEXT.drawImage(
      logo,
      pixelSize * 10.75,
      pixelSize * 14,
      pixelSize * 3.75,
      pixelSize * 4.25,
    );
  };
};
