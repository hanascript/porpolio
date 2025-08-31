import { useMountedState } from 'react-use';

import { AboutWindow } from '@/modules/about';
import { BlogWindow } from '@/modules/blog';
import { ContactWindow } from '@/modules/contact';
import { ProjectsWindow } from '@/modules/projects';

export const WindowProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <AboutWindow />
      <ProjectsWindow />
      <BlogWindow />
      <ContactWindow />
    </>
  );
};
