'use client';

import { TextScroll } from '@/components/animations/text-scroll';
import { useHarddrive } from '@/components/hooks/use-harddrive';

export const StateDisplay = () => {
  const { currentModule } = useHarddrive();

  return (
    <div className='border bg-background p-2 rounded-xs'>
      <TextScroll text={`${currentModule} //`} />
    </div>
  );
};
