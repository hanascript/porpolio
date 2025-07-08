import { resume } from '@/lib/resume';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Separator } from './ui/separator';

export const InfoCol = () => {
  return (
    <article className='border bg-background rounded-xs h-full col-span-1 lg:col-span-3'>
      <div className='flex items-center justify-between p-2 text-background bg-primary cursor-default select-none'>
        <p className='uppercase text-xs tracking-wide'>developer //</p>
        <p className='flex items-center gap-1 animate-pulse cursor-pointer'>
          <span className='size-2 mt-0.5 rounded-full bg-green-400 border border-black' />
          <span className='text-xs'>Available for hire</span>
        </p>
      </div>

      <div className='p-2'>
        <h1 className='text-4xl text-secondary tracking-wide'>NATHAN</h1>
        <h1 className='text-4xl text-secondary tracking-wide pb-4'>MARCELLOUS</h1>
        <div className='flex flex-col gap-4 text-xs'>
          <Link
            href='mailto:nathanm@hanascript.com'
            target='_blank'
            rel='noopener noreferrer'
            className='w-fit'
          >
            <div className='flex items-center cursor-pointer hover:text-secondary transition-all'>
              <span className='mr-2'>
                <Mail size={14} />
              </span>
              <span>NATHANM@HANASCRIPT.COM</span>
            </div>
          </Link>
          <Link
            href='https://github.com/hanascript'
            target='_blank'
            rel='noopener noreferrer'
            className='w-fit'
          >
            <div className='flex items-center cursor-pointer hover:text-secondary transition-all'>
              <span className='mr-2'>
                <Github size={14} />
              </span>
              <span>GITHUB.COM/HANASCRIPT</span>
            </div>
          </Link>
          <Link
            href='https://www.linkedin.com/in/nathan-marcellous/'
            target='_blank'
            rel='noopener noreferrer'
            className='w-fit'
          >
            <div className='flex items-center cursor-pointer hover:text-secondary transition-all'>
              <span className='mr-2'>
                <Linkedin size={14} />
              </span>
              <span>LINKEDIN.COM/IN/NATHAN-MARCELLOUS/</span>
            </div>
          </Link>
        </div>
        <Separator className='mt-2 mb-2' />
        <h2 className='py-4 text-secondary cursor-default select-none'>ABOUT ME</h2>
        <p className='text-[11px] leading-tight'>{resume.about}</p>
        <p className='text-[11px] leading-tight  mt-4'>{resume.about2}</p>
        <div className='mt-8' />
      </div>
    </article>
  );
};
