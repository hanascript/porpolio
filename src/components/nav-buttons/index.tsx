import { BlogsButton } from './blogs-button';

import { ProjectsButton } from './projects-button';

import { GamesButton } from './games-button';
import { PowerButton } from './power-button';
import { VolumeButton } from './volume-button';

export const NavButtons = () => {
  return (
    <div className='items-center gap-2 hidden md:flex'>
      <PowerButton />
      <VolumeButton />

      <div className='hidden'>
        <ProjectsButton />
        <BlogsButton />
        <GamesButton />
      </div>
    </div>
  );
};
