import startAudio from '../assets/start-sound.mp3';
import gameOverAudio from '../assets/game-over-sound.mp3';
import speedUpAudio from '../assets/speed-up.mp3';

export const playStartSound = () => {
  const audio = new Audio(startAudio);
  audio.play();
};
export const playGameOverSound = () => {
  const audio = new Audio(gameOverAudio);
  audio.play();
};
export const playSpeedUpSound = () => {
  const audio = new Audio(speedUpAudio);
  audio.play();
};
