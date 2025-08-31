import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useMountedState } from 'react-use';

import { useSounds } from '@/components/hooks/use-sounds';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const { play } = useSounds();
  const isMounted = useMountedState();

  const handleClick = () => {
    play({ id: 'click2' });
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!isMounted()) {
    return (
      <button className='hover:bg-secondary/15 p-2.5 hover:cursor-pointer'>
        <Sun className='size-4' />
      </button>
    );
  }

  return (
    <button
      className='hover:bg-secondary/15 p-2.5 hover:cursor-pointer'
      onClick={handleClick}
    >
      {theme === 'light' ? <Moon className='size-4' /> : <Sun className='size-4' />}
    </button>
  );
};
