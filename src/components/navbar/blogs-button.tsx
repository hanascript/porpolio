import { Button } from '../ui/button';

import { Rss } from 'lucide-react';
import { useHarddrive } from '@/components/hooks/use-harddrive';
import { cn } from '@/lib/utils';
import useSound from 'use-sound';

export const BlogsButton = () => {
  const { isDisabled, currentModule, setCurrentModule } = useHarddrive();

  const [play] = useSound('/sounds/button-click.mp3', {
    playbackRate: 0.5,
    volume: 0.5,
  });

  const handleClick = () => {
    if (isDisabled || currentModule === 'blogs') return;
    play();
    setCurrentModule('blogs');
  };

  return (
    <Button
      variant={currentModule === 'blogs' ? 'secondary' : 'default'}
      onClick={handleClick}
      disabled={isDisabled}
      className={cn(currentModule === 'blogs' && 'border-b-1')}
    >
      <div className='flex items-center gap-1 group-hover:scale-110 transition-all'>
        <span>[</span>
        <span>
          <Rss />
        </span>
        <span>]</span>
      </div>
    </Button>
  );
};
