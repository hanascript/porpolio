'use client';

import { useState } from 'react';

import { useIsMobile } from './hooks/use-mobile';

export const MobileNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();

  if (!isVisible) return null;

  if (!isMobile) return null;

  return (
    <div className='from-secondary/20 to-secondary/5 fixed right-0 bottom-0 left-0 z-50 bg-gradient-to-br p-4 font-sans backdrop-blur-2xl'>
      <div className='flex items-center justify-between gap-2'>
        <div className='text-primary text-sm'>
          <p className='font-bold'>Hey there! Thanks for visiting!</p>
          <p>
            Just letting you know that this site works best on desktop. Some stuff may not work as
            expected on different devices.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className='bg-secondary rounded-xs px-4 py-2 font-bold hover:cursor-pointer'
          aria-label='Dismiss notification'
        >
          okay
        </button>
      </div>
    </div>
  );
};
