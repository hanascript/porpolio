import Link from 'next/link';

import { cn } from '@/lib/utils';
import { literata } from '@/lib/fonts';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link
      href='/'
      className={cn('font-bold font-literata text-2xl tracking-tighter', literata.variable)}
    >
      <div className='hidden md:block'>
        <span className='text-pink-300'>Hana</span>Script
      </div>
      <div className='md:hidden'>
        <Image
          src='hanascript.svg'
          alt='HanaScript Icon'
          width={40}
          height={40}
        />
      </div>
    </Link>
  );
};
