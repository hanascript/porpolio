'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'motion/react';

import { AboutButton } from '@/modules/about';
import { BlogButton } from '@/modules/blog';
import { ContactButton } from '@/modules/contact';
import { ProjectsButton } from '@/modules/projects';

import Fallback from '@/components/animations/background/fallback';
import { VHSFilter } from '@/components/animations/vhs-filter';
import { Footer } from '@/components/footer';
import { MobileNotification } from '@/components/mobile-notification';
import { Navbar } from '@/components/navbar';
import { Preloader } from '@/components/preloader';
import { WindowProvider } from '@/components/providers/window-provider';
import { Terminal } from '@/components/terminal';

const Background = dynamic(() => import('@/components/animations/background/scene'), {
  ssr: false,
  loading: () => <Fallback />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, 2500);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>{isLoading && <Preloader />}</AnimatePresence>
      <div className='flex h-dvh flex-col overflow-hidden font-sans'>
        <Navbar />
        <main className='text-secondary flex flex-1 items-center justify-center px-4 font-sans'>
          <div className='relative px-4 pt-20 select-none'>
            <div className='relative top-2 flex animate-pulse items-center justify-end gap-1 text-end uppercase lg:top-4'>
              <span className='mt-0.5 size-2 rounded-full border border-black bg-green-400' />
              <span className='text-xs lg:text-sm'>Available for work</span>
            </div>
            <h1 className='font-satoshi text-primary-100 m-0 text-[3.3rem] leading-none font-black uppercase lg:text-[8rem]'>
              HANASCRIPT
            </h1>
            <p className='text-primary-100 relative bottom-2 left-1 text-xs uppercase lg:bottom-13 lg:left-2.5 lg:mt-10 lg:text-sm'>
              011 01110 00001 10110 00101
            </p>
            <div className='relative -bottom-4 flex flex-col justify-evenly gap-2 text-sm uppercase lg:bottom-8 lg:flex-row'>
              <AboutButton />
              <ProjectsButton />
              <BlogButton />
              <ContactButton />
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <WindowProvider />
      <VHSFilter />
      <Background />
      <MobileNotification />
      <Terminal />
    </>
  );
}
