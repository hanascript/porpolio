import { availableGames } from '@/lib/available-games';
import { File } from 'lucide-react';

export const GamesList = () => {
  return (
    <>
      <div className='bg-background px-1 py-2 text-xs text-secondary rounded-tl-xs'>Available Games</div>
      <div className='grid grid-cols-2 gap-2 text-black '>
        {availableGames.map(game => (
          <div
            key={game.id}
            className='flex flex-col items-center justify-center text-xs hover:cursor-pointer hover:text-secondary p-2'
          >
            <File className='size-14' />
            <p className='text-center'>{game.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
