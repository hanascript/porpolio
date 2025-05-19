'use client';

import { resume } from '@/lib/resume';
import { useHarddrive } from '@/components/hooks/use-harddrive';
import { cn } from '@/lib/utils';

export const ProjectList = () => {
  const { activeProject, setActiveProject } = useHarddrive();

  return (
    <>
      <div className='bg-background px-1 py-2 text-xs text-secondary rounded-t-xs'>Active Projects</div>
      {resume.projects.map(project => (
        <div
          key={project.id}
          className={cn(
            'text-xs flex items-center justify-between bg-background py-0.5 px-1 hover:cursor-pointer hover:text-sm transition-all',
            activeProject.id === project.id && 'bg-secondary border-background border text-background'
          )}
          onClick={() => setActiveProject(project.id)}
        >
          <div className='flex items-center gap-1.5'>
            {activeProject.id === project.id && <span className='size-1.5 rounded-full bg-background' />}
            <p>{project.name}</p>
          </div>

          <span>-</span>
          <p>{project.type}</p>
        </div>
      ))}
    </>
  );
};
