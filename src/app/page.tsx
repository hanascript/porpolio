'use client';

import { useHarddrive } from '@/components/hooks/use-harddrive';
import { InfoCol } from '@/components/info-col';
import { Navbar } from '@/components/navbar';

import { ListDisplay } from '@/components/display/list-display';
import { PanelDisplay } from '@/components/display/panel-display';
import { StateDisplay } from '@/components/display/state-display';
import { TerminalFooter } from '@/components/terminal-footer';
import { cn } from '@/lib/utils';

export default function Home() {
  const { isDisabled } = useHarddrive();



  return (
    <main className='p-4 font-gohu min-h-screen relative'>
      <div
        className='absolute inset-0 z-9999 opacity-55 pointer-events-none'
        style={{
          backgroundImage: "url('noise.png')",
          backgroundSize: 'cover',
        }}
      />
      <div className='relative z-10 max-w-screen-xl mx-auto text-primary'>
        {/* Navbar */}
        <Navbar />

        {/* Content grid */}
        <div className={cn('grid-cols-1 lg:grid-cols-12  gap-4', isDisabled ? 'hidden' : 'grid')}>
          {/* Left column */}
          <InfoCol />

          {/* Main Content */}
          <div className='space-y-4 flex flex-col col-span-1 lg:col-span-9'>
            {/* State Display */}
            <StateDisplay />

            {/* Main Content Panel */}
            <div className='flex-1 grid grid-cols-8 border bg-background rounded-xs '>
              {/* Project List */}
              <div className='col-span-2 rounded-tl-xs rounded-bl-xs bg-primary flex flex-col gap-2 pr-0.5'>
                <ListDisplay />
              </div>

              {/* Project Content */}
              <div className='col-span-6 text-[11px] p-0.5'>
                <PanelDisplay />
              </div>
            </div>

            {/* Contact footer */}
            <TerminalFooter />
          </div>
        </div>
      </div>
    </main>
  );
}
