import { Clock } from 'lucide-react';
import { Time } from '@/components/animations/time';
import { Button } from '@/components/ui/button';

export const ClockButton = () => {
  return (
    <Button
      variant='secondary'
      className='cursor-default border-b-1'
    >
      <div className='flex items-center gap-1'>
        <span>[</span>
        <span>
          <Clock size={14} />
        </span>
        <span>{Time()}</span>
        <span>]</span>
      </div>
    </Button>
  );
};
