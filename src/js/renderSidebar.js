import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';
import { GAME_DATA } from './gameData';
import logoImg from '../assets/tetris.svg';
import { CANVAS } from './baseCanvasClass';

export const renderSidebar = () => {
  const pixelSize = Math.round(CANVAS.$canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(CANVAS.$canvas.width / 20);
  CANVAS.context.clearRect(
    pixelSize * 10 + gapSize,
    0,
    pixelSize * 15 + gapSize,
    pixelSize * 13,
  );
  CANVAS.context.fillStyle = BACKGROUND_COLOR;
  CANVAS.context.fillRect(
    10 * pixelSize,
    0 * pixelSize,
    15 * pixelSize + gapSize,
    13 * pixelSize + gapSize,
  );
  CANVAS.context.fillStyle = TEXT_COLOR;
  CANVAS.context.font = `${fontSize}px serif`;
  CANVAS.context.textAlign = 'center';

  CANVAS.context.fillText('Score', 12.5 * pixelSize, 1 * pixelSize);
  CANVAS.context.fillText(`${GAME_DATA.score}`, 12.5 * pixelSize, 2 * pixelSize);

  CANVAS.context.fillText('Hi-Score', 12.5 * pixelSize, 3 * pixelSize);
  CANVAS.context.fillText(`${GAME_DATA.hiScore}`, 12.5 * pixelSize, 4 * pixelSize);

  CANVAS.context.fillText('Speed', 12.5 * pixelSize, 6 * pixelSize);
  CANVAS.context.fillText(
    `${250 - GAME_DATA.renderInterval}`,
    12.5 * pixelSize,
    7 * pixelSize,
  );
  CANVAS.context.fillText('BRICK', 12.5 * pixelSize, 11 * pixelSize);
  CANVAS.context.fillText('RACING', 12.5 * pixelSize, 12 * pixelSize);
};

export const renderLogo = () => {
  const pixelSize = Math.round(CANVAS.$canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  CANVAS.context.clearRect(
    pixelSize * 10 + gapSize,
    pixelSize * 13 + gapSize,
    pixelSize * 15 + gapSize,
    pixelSize * 20 + gapSize,
  );
  CANVAS.context.fillStyle = BACKGROUND_COLOR;
  CANVAS.context.fillRect(
    10 * pixelSize,
    13 * pixelSize,
    15 * pixelSize + gapSize,
    20 * pixelSize + gapSize,
  );
  const logo = new Image();
  logo.src = logoImg;
  logo.onload = () => {
    CANVAS.context.drawImage(
      logo,
      pixelSize * 10.75,
      pixelSize * 14,
      pixelSize * 3.75,
      pixelSize * 4.25,
    );
  };
};
