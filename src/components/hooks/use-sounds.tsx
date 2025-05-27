import { useSound } from 'use-sound';

export const useSounds = () => {
  const [play] = useSound('/sounds/button-click-2.mp3', {
    playbackRate: 0.45,
    volume: 0.25,
    sprite: {
      click1: [0, 100],
      click2: [300, 350],
    },
  });

  return { play };
};
