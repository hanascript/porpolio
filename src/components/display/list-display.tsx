import { BlogList } from '@/views/blog/blog-list';
import { useHarddrive } from '@/components/hooks/use-harddrive';
import { ProjectList } from '@/views/project/project-list';
import { GamesList } from '@/views/games/games-list';

export const ListDisplay = () => {
  const { currentModule } = useHarddrive();

  const displayedModule = () => {
    switch (currentModule) {
      case 'projects':
        return <ProjectList />;
      case 'blogs':
        return <BlogList />;
      case 'games':
        return <GamesList />;
      default:
        return <ProjectList />;
    }
  };

  return displayedModule();
};
