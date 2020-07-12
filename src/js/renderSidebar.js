import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';
import { GAME_DATA } from './gameData';
import logoImg from '../assets/tetris.svg';

export const renderSidebar = (canvas, context) => {
  const pixelSize = Math.round(canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(canvas.width / 20);
  context.clearRect(
    pixelSize * 10 + gapSize,
    0,
    pixelSize * 15 + gapSize,
    pixelSize * 13,
  );
  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(
    10 * pixelSize,
    0 * pixelSize,
    15 * pixelSize + gapSize,
    13 * pixelSize + gapSize,
  );
  context.fillStyle = TEXT_COLOR;
  context.font = `${fontSize}px serif`;
  context.textAlign = 'center';

  context.fillText('Score', 12.5 * pixelSize, 1 * pixelSize);
  context.fillText(`${GAME_DATA.score}`, 12.5 * pixelSize, 2 * pixelSize);

  context.fillText('Hi-Score', 12.5 * pixelSize, 3 * pixelSize);
  context.fillText(`${GAME_DATA.hiScore}`, 12.5 * pixelSize, 4 * pixelSize);

  context.fillText('Speed', 12.5 * pixelSize, 6 * pixelSize);
  context.fillText(
    `${250 - GAME_DATA.renderInterval}`,
    12.5 * pixelSize,
    7 * pixelSize,
  );
  context.fillText('BRICK', 12.5 * pixelSize, 11 * pixelSize);
  context.fillText('RACING', 12.5 * pixelSize, 12 * pixelSize);
};

export const renderLogo = (canvas, context) => {
  const pixelSize = Math.round(canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  context.clearRect(
    pixelSize * 10 + gapSize,
    pixelSize * 13 + gapSize,
    pixelSize * 15 + gapSize,
    pixelSize * 20 + gapSize,
  );
  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(
    10 * pixelSize,
    13 * pixelSize,
    15 * pixelSize + gapSize,
    20 * pixelSize + gapSize,
  );
  const logo = new Image();
  logo.src = logoImg;
  logo.onload = () => {
    context.drawImage(
      logo,
      pixelSize * 10.75,
      pixelSize * 14,
      pixelSize * 3.75,
      pixelSize * 4.25,
    );
  };
};
