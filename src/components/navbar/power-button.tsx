'use client';

import { Power } from 'lucide-react';
import { useHarddrive } from '@/components/hooks/use-harddrive';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import useSound from 'use-sound';

export const PowerButton = () => {
  const { isDisabled, setIsDisabled } = useHarddrive();
  const [play] = useSound('/sounds/button-click-2.mp3', {
    playbackRate: 0.45,
    volume: 0.25,
    sprite: {
      click1: [0, 100],
      click2: [300, 350]
    }
  });

  const handleClick = () => {
    play({ id: 'click2' });
    setIsDisabled(!isDisabled);
  };

  return (
    <Button
      variant={isDisabled ? 'secondary' : 'default'}
      onClick={handleClick}
      className={cn(isDisabled && 'border-b-1')}
    >
      <div className='flex items-center gap-1 group-hover:scale-110 transition-all'>
        <span>[</span>
        <span>
          <Power />
        </span>
        <span>]</span>
      </div>
    </Button>
  );
};
