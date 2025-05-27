'use client';

import { cn } from '@/lib/utils';

import { Navbar } from '@/components/navbar';
import { InfoCol } from '@/components/info-col';

import { useHarddrive } from '@/components/hooks/use-harddrive';
import { useIsMobile } from '@/components/hooks/use-mobile';

import { StateDisplay } from '@/components/state-display';
import { MobileContent } from '@/components/mobile-content';
import { TerminalFooter } from '@/components/terminal-footer';

import { BlogList } from '@/views/blog/blog-list';
import { GamesList } from '@/views/games/games-list';
import { ProjectList } from '@/views/project/project-list';
import { BlogDisplay } from '@/views/blog/blog-display';
import { ProjectDisplay } from '@/views/project/project-display';

export default function Home() {
  const { currentModule, isDisabled } = useHarddrive();
  const isMobile = useIsMobile();

  return (
    <main className='p-4 font-gohu min-h-screen max-w-screen-xl mx-auto text-primary '>
      <Navbar />
      {/* Content grid */}
      <div className={cn('grid-cols-1 lg:grid-cols-12  gap-4', isDisabled ? 'hidden' : 'grid')}>
        {/* Left column */}
        <InfoCol />

        {isMobile ? (
          <MobileContent />
        ) : (
          <div className='space-y-4 md:flex flex-col col-span-1 lg:col-span-9 hidden'>
            {/* State Display */}
            <StateDisplay />
            {/* Main Content Panel */}
            <div className='flex-1 grid grid-cols-8 border bg-background rounded-xs '>
              {/* Project List */}
              <div className='col-span-2 rounded-tl-xs rounded-bl-xs bg-primary flex flex-col gap-2 pr-0.5'>
                {(() => {
                  switch (currentModule) {
                    case 'projects':
                      return <ProjectList />;
                    case 'blogs':
                      return <BlogList />;
                    case 'games':
                      return <GamesList />;
                    default:
                      return <ProjectList />;
                  }
                })()}
              </div>
              {/* Project Content */}
              <div className='col-span-6 text-[11px] p-1'>
                {(() => {
                  switch (currentModule) {
                    case 'projects':
                      return <ProjectDisplay />;
                    case 'blogs':
                      return <BlogDisplay />;
                    default:
                      return <ProjectDisplay />;
                  }
                })()}
              </div>
            </div>
            {/* Contact footer */}
            <TerminalFooter />
          </div>
        )}
      </div>
    </main>
  );
}
