import { SPEED_COEFFICIENT, MIN_INTERVAL } from './constants';
import { playSpeedUpSound } from './playSounds';

export function changeInterval() {
  this.gameData.score += 1;
  if (this.gameData.score % 100 === 0) {
    playSpeedUpSound();
    const newInterval = Math.round(
      this.gameData.renderInterval * SPEED_COEFFICIENT,
    );
    this.gameData.renderInterval = Math.max(newInterval, MIN_INTERVAL);
  }
};
