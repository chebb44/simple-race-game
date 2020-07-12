import { resY, resX } from './constants';

export function resizeCanvas() {
  const { clientWidth } = document.body;
  const canvasHeight = clientWidth * 0.9 > 600 ? 600 : clientWidth * 0.9;
  this.$canvas.height = Math.round(canvasHeight / resY) * resY;
  this.$canvas.width = Math.round((canvasHeight * 0.75) / resX) * resX;
}
