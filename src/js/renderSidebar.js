import { resX, BACKGROUND_COLOR, TEXT_COLOR } from './constants';
import logoImg from '../assets/tetris.svg';

export function renderSidebar() {
  const pixelSize = Math.round(this.$canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  const fontSize = Math.round(this.$canvas.width / 20);
  this.context.clearRect(
    pixelSize * 10 + gapSize,
    0,
    pixelSize * 15 + gapSize,
    pixelSize * 13,
  );
  this.context.fillStyle = BACKGROUND_COLOR;
  this.context.fillRect(
    10 * pixelSize,
    0 * pixelSize,
    15 * pixelSize + gapSize,
    13 * pixelSize + gapSize,
  );
  this.context.fillStyle = TEXT_COLOR;
  this.context.font = `${fontSize}px serif`;
  this.context.textAlign = 'center';

  this.context.fillText('Score', 12.5 * pixelSize, 1 * pixelSize);
  this.context.fillText(`${this.gameData.score}`, 12.5 * pixelSize, 2 * pixelSize);

  this.context.fillText('Hi-Score', 12.5 * pixelSize, 3 * pixelSize);
  this.context.fillText(
    `${this.gameData.hiScore}`,
    12.5 * pixelSize,
    4 * pixelSize,
  );

  this.context.fillText('Speed', 12.5 * pixelSize, 6 * pixelSize);
  this.context.fillText(
    `${250 - this.gameData.renderInterval}`,
    12.5 * pixelSize,
    7 * pixelSize,
  );
  this.context.fillText('BRICK', 12.5 * pixelSize, 11 * pixelSize);
  this.context.fillText('RACING', 12.5 * pixelSize, 12 * pixelSize);
}

export function renderLogo() {
  const pixelSize = Math.round(this.$canvas.width / resX);
  const gapSize = Math.round(pixelSize * 0.05);
  this.context.clearRect(
    pixelSize * 10 + gapSize,
    pixelSize * 13 + gapSize,
    pixelSize * 15 + gapSize,
    pixelSize * 20 + gapSize,
  );
  this.context.fillStyle = BACKGROUND_COLOR;
  this.context.fillRect(
    10 * pixelSize,
    13 * pixelSize,
    15 * pixelSize + gapSize,
    20 * pixelSize + gapSize,
  );
  const logo = new Image();
  logo.src = logoImg;
  logo.onload = () => {
    this.context.drawImage(
      logo,
      pixelSize * 10.75,
      pixelSize * 14,
      pixelSize * 3.75,
      pixelSize * 4.25,
    );
  };
}
