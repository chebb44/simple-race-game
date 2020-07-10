import { resizeCanvas } from './js/resizeCanvas';
import { fillBackground } from './js/fillBackground';
import { drawRoad } from './js/drawRoad';

resizeCanvas();
window.onresize = () => {
  resizeCanvas();
};
fillBackground();
let i = 0;
setInterval(() => {
  drawRoad(i);
  i += 1;
}, 300);
