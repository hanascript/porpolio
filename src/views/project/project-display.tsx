import { useHarddrive } from '@/components/hooks/use-harddrive';
import { ProjectDescription } from '@/components/project/project-description';
import { ProjectDetails } from '@/components/project/project-details';
import { ProjectImages } from '@/components/project/project-images';

export const ProjectDisplay = () => {
  const { activeProject } = useHarddrive();

  return (
    <>
      {/* Project Images */}
      <ProjectImages values={activeProject.images} />

      {/* Project Details */}
      <ProjectDetails
        name={activeProject.name}
        details={activeProject.details}
      />

      {/* Project Description */}
      <ProjectDescription description={activeProject.description} />
    </>
  );
};
