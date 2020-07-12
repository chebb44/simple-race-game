import { resY, resX } from './constants';
import { CANVAS } from './baseCanvasClass';

export const resizeCanvas = () => {
  const { clientWidth } = document.body;
  const canvasHeight = clientWidth * 0.9 > 600 ? 600 : clientWidth * 0.9;
  CANVAS.$canvas.height = Math.round(canvasHeight / resY) * resY;
  CANVAS.$canvas.width = Math.round((canvasHeight * 0.75) / resX) * resX;
};
