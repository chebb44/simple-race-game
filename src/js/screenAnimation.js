import { resY } from './constants';
import { drawPixel } from './drawPixel';

export function screenAnimation() {
  const promiseArray = [];
  for (let y = 0; y < resY; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 10 * x * y);
      });
      promise.then(() => drawPixel.call(this, {
        isActive: true,
        x,
        y,
      }));
      promiseArray.push(promise);
    }
  }
  return Promise.all(promiseArray);
};
