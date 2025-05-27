import { useSounds } from '@/components/hooks/use-sounds';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export const MobileButton = () => {
  const { play } = useSounds();

  const handleClick = () => {
    play({ id: 'click2' });
  };

  return (
    <Button onClick={handleClick}>
      <div className='flex items-center gap-1 group-hover:scale-110 transition-all'>
        [<Menu />]
      </div>
    </Button>
  );
};
