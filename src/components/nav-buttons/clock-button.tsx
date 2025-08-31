'use client';

import { useState } from 'react';

import { LocalTime, Time } from '@/components/animations/time';
import { useKernel } from '@/components/hooks/use-kernel';
import { useSounds } from '@/components/hooks/use-sounds';

export const ClockButton = () => {
  const [isLocalTime, setIsLocalTime] = useState(true);
  const { isVolumeDisabled } = useKernel();
  const { play } = useSounds();

  const handleClick = () => {
    if (isVolumeDisabled) {
      play({ id: 'click2' });
    }
    setIsLocalTime(!isLocalTime);
  };
  return (
    <button
      className='hover:bg-secondary/15 p-2 hover:cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex items-center justify-center gap-1'>
        <span>[</span>
        <div>{isLocalTime ? <span>LOC {Time()}</span> : <span>INT {LocalTime()}</span>}</div>
        <span>]</span>
      </div>
    </button>
  );
};
