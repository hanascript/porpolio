'use client';

import { ClockButton } from '@/components/nav-buttons/clock-button';
import { LetsTalkButton } from '@/components/nav-buttons/lets-talk-button';
import { ThemeButton } from '@/components/nav-buttons/theme-button';
import { VolumeButton } from '@/components/nav-buttons/volume-button';

export const Navbar = () => {
  return (
    <header>
      <div className='m-4 mx-auto flex max-w-screen-2xl items-center justify-between px-4 font-sans'>
        <div className='glass text-secondary flex items-center justify-center text-sm'>
          <ClockButton />
          <VolumeButton />
          <ThemeButton />
        </div>
        <LetsTalkButton />
      </div>
    </header>
  );
};
