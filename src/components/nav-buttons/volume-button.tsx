'use client';

import { Volume2, VolumeOff } from 'lucide-react';

import { useKernel } from '@/components/hooks/use-kernel';
import { useSounds } from '@/components/hooks/use-sounds';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const VolumeButton = () => {
  const { isVolumeDisabled, setIsVolumeDisabled } = useKernel();
  const { play } = useSounds();

  const handleClick = () => {
    play({ id: 'click2' });
    setIsVolumeDisabled(!isVolumeDisabled);
  };

  return (
    <Button
      variant={isVolumeDisabled ? 'secondary' : 'default'}
      onClick={handleClick}
      className={cn(isVolumeDisabled && 'border-b-1')}
    >
      <div className='flex items-center gap-1 group-hover:scale-110 transition-all'>
        <span>[</span>
        <span>{isVolumeDisabled ? <VolumeOff /> : <Volume2 />}</span>
        <span>]</span>
      </div>
    </Button>
  );
};
