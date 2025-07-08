'use client';

import { TextScroll } from '@/components/animations/text-scroll';
import { AppWindow, ChevronLeft, ChevronRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { resume } from '@/lib/resume';
import { cn } from '@/lib/utils';
import { SpinningDonut } from './animations/spinning-donut';
import { useKernel } from './hooks/use-kernel';
import { useSounds } from './hooks/use-sounds';
import { Button } from './ui/button';

export const Projects = () => {
  const { activeProjectIndex, setActiveProjectIndex } = useKernel();

  const { play } = useSounds();

  const goToNextProject = () => {
    setActiveProjectIndex(activeProjectIndex === resume.projects.length - 1 ? 0 : activeProjectIndex + 1);
  };

  const goToPreviousProject = () => {
    setActiveProjectIndex(activeProjectIndex === 0 ? resume.projects.length - 1 : activeProjectIndex - 1);
  };

  const handleClick = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      goToNextProject();
    } else {
      goToPreviousProject();
    }
    play({ id: 'click2' });
  };

  const currentProject = resume.projects[activeProjectIndex];

  return (
    <article className='grid-cols-1 grid lg:grid-cols-12 gap-2 h-full col-span-1 lg:col-span-12'>
      <div className='border bg-background p-2 rounded-xs col-span-1 lg:col-span-12'>
        <TextScroll text={`Projects //`} />
      </div>

      {/* Project Image - Left Side */}
      <div className='col-span-1 lg:col-span-9 border rounded-xs overflow-hidden relative aspect-video bg-background'>
        <Image
          src={currentProject.image.src}
          alt={currentProject.image.alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-contain'
        />
      </div>

      {/* Project Details - Right Side */}
      <div className='col-span-1 lg:col-span-3 flex flex-col gap-2'>
        <div className='border rounded-xs flex flex-col justify-between bg-background flex-1'>
          <div className='flex items-center justify-between p-2 text-background bg-primary'>
            <p className='uppercase text-xs tracking-wide font-bold'>
              Project // <span className='text-orange-700'>{currentProject.title}</span>{' '}
            </p>
          </div>
          <div className='flex-1 p-2 text-xs flex flex-col gap-8'>
            <div className='space-y-2'>
              <p>
                <span className=' uppercase text-purple-300'>OS:</span> {currentProject.details.os}
              </p>
              <p>
                <span className=' uppercase text-orange-300'>Type:</span> {currentProject.type}
              </p>
              <p>
                <span className=' uppercase text-blue-300'>Packages:</span> {currentProject.details.packages}
              </p>
              <p>
                <span className=' uppercase text-green-300'>Status:</span> {currentProject.details.status}
              </p>
              <p>
                <span className=' uppercase text-red-300'>Description:</span> {currentProject.description}
              </p>
            </div>
            <div className='flex gap-4'>
              <Button
                className='p-2 w-full'
                asChild
              >
                <Link
                  href={currentProject.links.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-4'
                >
                  <AppWindow />
                  Live
                </Link>
              </Button>
              <Button
                className='p-2 w-full'
                asChild
              >
                <Link
                  href={currentProject.links.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-4'
                >
                  <Github />
                  Repo
                </Link>
              </Button>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className='flex justify-between items-center p-2 gap-4 mt-8'>
            <Button
              onClick={() => handleClick('prev')}
              className='h-10 flex items-center justify-center gap-2 flex-1'
              aria-label='Previous project'
            >
              <ChevronLeft className='size-5' />
              <span className='text-xs'>Prev</span>
            </Button>
            <div className='flex space-x-2'>
              {resume.projects.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    index === activeProjectIndex ? 'bg-secondary' : 'bg-primary'
                  )}
                />
              ))}
            </div>
            <Button
              onClick={() => handleClick('next')}
              className='flex-1 h-10 flex items-center justify-center gap-2'
              aria-label='Next project'
            >
              <span className='text-xs'>Next</span>
              <ChevronRight className='size-5' />
            </Button>
          </div>
        </div>
        <div className='border rounded-xs p-2 bg-background flex flex-col items-center justify-center'>
          <SpinningDonut />
        </div>
      </div>
    </article>
  );
};
