import { CANVAS } from './addCanvas';
import { resY, resX } from './constants';

export const resizeCanvas = () => {
  const { clientWidth } = document.body;
  const canvasHeight = clientWidth * 0.9 > 600 ? 600 : clientWidth * 0.9;
  CANVAS.height = Math.round(canvasHeight / resY) * resY;
  CANVAS.width = Math.round((canvasHeight * 0.75) / resX) * resX;
};
