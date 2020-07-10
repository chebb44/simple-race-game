import { resizeCanvas } from './js/resizeCanvas';

resizeCanvas();
window.onresize = () => {
  resizeCanvas();
};
