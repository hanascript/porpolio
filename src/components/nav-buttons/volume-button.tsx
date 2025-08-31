import { Volume2, VolumeX } from 'lucide-react';

import { useKernel } from '@/components/hooks/use-kernel';
import { useSounds } from '@/components/hooks/use-sounds';

export const VolumeButton = () => {
  const { isVolumeDisabled, setIsVolumeDisabled } = useKernel();

  const { play } = useSounds();

  const handleClick = () => {
    if (isVolumeDisabled) {
      play({ id: 'click2' });
    }
    setIsVolumeDisabled(!isVolumeDisabled);
  };

  return (
    <button
      className='hover:bg-secondary/15 p-2.5 hover:cursor-pointer'
      onClick={handleClick}
    >
      {isVolumeDisabled ? <VolumeX className='size-4' /> : <Volume2 className='size-4' />}
    </button>
  );
};
