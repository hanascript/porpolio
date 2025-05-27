import { BlogsButton } from './blogs-button';

import { ProjectsButton } from './projects-button';

import { GamesButton } from './games-button';
import { PowerButton } from './power-button';

export const NavButtons = () => {
  return (
    <div className='items-center gap-2 hidden md:flex'>
      <PowerButton />
      <ProjectsButton />
      <div className='hidden'>
        <BlogsButton />
        <GamesButton />
      </div>
    </div>
  );
};
