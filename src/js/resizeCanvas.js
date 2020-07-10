import { CANVAS } from './addCanvas';

export const resizeCanvas = () => {
  const { clientWidth } = document.body;
  const canvasHeight = clientWidth * 0.8 > 600 ? 600 : clientWidth * 0.8;
  CANVAS.height = Math.round(canvasHeight);
  CANVAS.width = Math.round(canvasHeight * 0.75);
};
