import { GAME_DATA } from './gameData';
import { SPEED_COEFFICIENT, MIN_INTERVAL } from './constants';
import { playSpeedUpSound } from './playSounds';

export const changeInterval = () => {
  GAME_DATA.score += 1;
  if (GAME_DATA.score % 100 === 0) {
    playSpeedUpSound();
    const newInterval = Math.round(
      GAME_DATA.renderInterval * SPEED_COEFFICIENT,
    );
    GAME_DATA.renderInterval = Math.max(newInterval, MIN_INTERVAL);
  }
};
