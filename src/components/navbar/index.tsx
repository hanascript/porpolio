'use client';

import Link from 'next/link';
import { ClockButton } from './clock-button';
import { PowerButton } from './power-button';
import { ProjectsButton } from './projects-button';
import { BlogsButton } from './blogs-button';
import { GamesButton } from './games-button';

export const Navbar = () => {
  return (
    <nav className='border rounded-xs bg-background p-1 mb-4 flex justify-between items-center text-sm'>
      <div className='flex items-center gap-2'>
        <PowerButton />
        <ProjectsButton />
        <div className='hidden'>
          <BlogsButton />
          <GamesButton />
        </div>
      </div>
      <div className='flex items-center gap-2'>
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
