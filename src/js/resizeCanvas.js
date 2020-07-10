import { CANVAS } from './addCanvas';
import { resY, resX } from './constants';

export const resizeCanvas = () => {
  const { clientWidth } = document.body;
  const canvasHeight = clientWidth * 0.8 > 600 ? 600 : clientWidth * 0.8;
  CANVAS.height = Math.round(canvasHeight / resY) * resY;
  CANVAS.width = Math.round((canvasHeight * 0.75) / resX) * resX;
};
