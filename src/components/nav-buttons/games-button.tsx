import { Button } from '../ui/button';

import { Swords } from 'lucide-react';
import { useHarddrive } from '@/components/hooks/use-harddrive';
import { cn } from '@/lib/utils';
import useSound from 'use-sound';

export const GamesButton = () => {
  const { isDisabled, currentModule, setCurrentModule } = useHarddrive();

  const [play] = useSound('/sounds/button-click.mp3', {
    playbackRate: 0.5,
    volume: 0.5,
  });

  const handleClick = () => {
    if (isDisabled || currentModule === 'games') return;
    play();
    setCurrentModule('games');
  };

  return (
    <Button
      variant={currentModule === 'games' ? 'secondary' : 'default'}
      onClick={handleClick}
      disabled={isDisabled}
      className={cn(currentModule === 'games' && 'border-b-1')}
    >
      <div className='flex items-center gap-1 group-hover:scale-110 transition-all'>
        <span>[</span>
        <span>
          <Swords />
        </span>
        <span>]</span>
      </div>
    </Button>
  );
};
