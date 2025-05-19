import { useHarddrive } from '@/components/hooks/use-harddrive';
import { BlogDisplay } from '@/views/blog/blog-display';
import { ProjectDisplay } from '@/views/project/project-display';

export const PanelDisplay = () => {
  const { currentModule } = useHarddrive();

  const displayedModule = () => {
    switch (currentModule) {
      case 'projects':
        return <ProjectDisplay />;
      case 'blogs':
        return <BlogDisplay />;
      default:
        return <ProjectDisplay />;
    }
  };

  return displayedModule();
};
