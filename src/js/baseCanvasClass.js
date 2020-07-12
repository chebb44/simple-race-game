import { createBlock } from './utilities';
import { APP_WRAPPER } from './constants';

export class BaseCanvas {
  constructor() {
    this.$canvas = createBlock(APP_WRAPPER, 'canvas', 'app-canvas');
    this.context = this.$canvas.getContext('2d');
  }
}

export const CANVAS = new BaseCanvas();
