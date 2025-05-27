'use client';

import { Power } from 'lucide-react';

import { useHarddrive } from '@/components/hooks/use-harddrive';
import { useSounds } from '@/components/hooks/use-sounds';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const PowerButton = () => {
  const { isDisabled, setIsDisabled } = useHarddrive();
  const { play } = useSounds();

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
