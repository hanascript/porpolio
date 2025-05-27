'use client';

import Link from 'next/link';

import { NavButtons } from './nav-buttons';
import { ClockButton } from './nav-buttons/clock-button';

export const Navbar = () => {
  return (
    <nav className='border rounded-xs bg-background p-1 mb-4 flex justify-between items-center text-sm'>
      <NavButtons />
      <div className='flex items-center gap-2 w-full md:w-auto justify-between md:justify-normal'>
        <Link
          href='/'
          className='text-xl uppercase tracking-wide text-secondary cursor-pointer'
        >
          HANASCRIPT
        </Link>
        <ClockButton />
      </div>
    </nav>
  );
};
