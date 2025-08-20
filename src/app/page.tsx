'use client';

import { InfoCol } from '@/components/info-col';
import { Navbar } from '@/components/navbar';

import Fallback from '@/components/animations/background/fallback';
import { Filter } from '@/components/animations/filter';
import { ClientWrapper } from '@/components/client-wrapper';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
import dynamic from 'next/dynamic';

const Background = dynamic(() => import('@/components/animations/background/background'), {
  ssr: false,
  loading: () => <Fallback />,
});

export default function Home() {
  return (
    <>
      <Background />
      <Filter>
        <main className='p-4 font-gohu min-h-screen max-w-screen-2xl mx-auto text-primary z-9999'>
          <Navbar />

          <ClientWrapper>
            <div className='grid-cols-1 grid lg:grid-cols-12 gap-2 h-full'>
              <InfoCol />

              <Services />

              <Projects />
            </div>
          </ClientWrapper>
        </main>
      </Filter>
    </>
  );
}
