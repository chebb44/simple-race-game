import { createBlock } from './utilities';
import { APP_WRAPPER } from './constants';

export const CANVAS = createBlock(APP_WRAPPER, 'canvas', 'app-canvas');
export const CONTEXT = CANVAS.getContext('2d');
