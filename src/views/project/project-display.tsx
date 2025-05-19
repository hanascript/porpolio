import { SpinningDonut } from '@/components/animations/spinning-donut';
import { ProjectDescription } from '@/components/project/project-description';
import { ProjectDetails } from '@/components/project/project-details';
import { ProjectImages } from '@/components/project/project-images';
import { useHarddrive } from '@/components/hooks/use-harddrive';

export const ProjectDisplay = () => {
  const { activeProject } = useHarddrive();

  return (
    <>
      <div className='flex'>
        <SpinningDonut />

        {/* Project Details */}
        <ProjectDetails name={activeProject.name} details={activeProject.details} />
      </div>

      {/* Project Description */}
      <ProjectDescription description={activeProject.description} />

      {/* Project Images */}
      <ProjectImages values={activeProject.images} />
    </>
  );
};
