'use client';

import { InfoCol } from '@/components/info-col';
import { Navbar } from '@/components/navbar';

import { ClientWrapper } from '@/components/client-wrapper';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <>
      <main className='p-4 font-gohu min-h-screen max-w-screen-2xl mx-auto text-primary z-9999'>
        <Navbar />
        {/* Content grid */}
        <ClientWrapper>
          <div className='grid-cols-1 grid lg:grid-cols-12 gap-2 h-full'>
            <InfoCol />

            <Services />

            <Projects />

            
          </div>
        </ClientWrapper>
      </main>
    </>
  );
}
