import { CONTEXT, CANVAS } from './js/addCanvas';
import { ACTIVE_COLOR, INACTIVE_COLOR, resX } from './js/constants';

let pixelSize;

const DrawPixel = ({ isActive, x, y }) => {
  CONTEXT.fillStyle = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
  CONTEXT.strokeRect(x, y, pixelSize, pixelSize);
  const gapSize = Math.round(pixelSize * 0.1);
  CONTEXT.fillRect(
    x + gapSize,
    y + gapSize,
    pixelSize - gapSize * 2,
    pixelSize - gapSize * 2,
  );
};

const renderCanvas = () => {
  const { clientWidth } = document.body;
  const canvasHeight = clientWidth * 0.8 > 600 ? 600 : clientWidth * 0.8;
  CANVAS.height = Math.round(canvasHeight);
  CANVAS.width = Math.round(canvasHeight * 0.75);
  pixelSize = CANVAS.width / resX;
  DrawPixel({ isActive: true, x: 10, y: 10 });
  DrawPixel({ isActive: false, x: 60, y: 100 });
};

renderCanvas();
window.onresize = () => {
  renderCanvas();
};
