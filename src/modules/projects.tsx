'use client';

import { startTransition, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RestrictToWindow } from '@dnd-kit/dom/modifiers';
import { DragDropProvider, useDraggable } from '@dnd-kit/react';
import { AppWindow, ChevronsDown, Github, Smile, SquareArrowOutUpRight, X } from 'lucide-react';

import { projects, techStackDevelopment, techStackTools } from '@/lib/data';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useKernel } from '@/components/hooks/use-kernel';
import { useIsMobile } from '@/components/hooks/use-mobile';
import { useSounds } from '@/components/hooks/use-sounds';

type Coordinates = {
  x: number;
  y: number;
};

const defaultCoordinates: Coordinates = {
  x: 550,
  y: 115,
};

export const ProjectsButton = () => {
  const { setIsProjectsOpen } = useKernel();

  const { play } = useSounds();

  const handleClick = () => {
    play({ id: 'click2' });
    setIsProjectsOpen(true);
  };

  return (
    <button
      className='glass-hover flex flex-1 items-center justify-center py-2 uppercase hover:cursor-pointer'
      onClick={handleClick}
    >
      Projects
    </button>
  );
};

export const ProjectsWindow = () => {
  const isMobile = useIsMobile();
  const [{ x, y }, setCoordinates] = useState<Coordinates>(defaultCoordinates);
  const { focusWindow } = useKernel();

  if (isMobile) {
    return <ProjectsDrawer />;
  }

  return (
    <DragDropProvider
      onDragStart={() => {
        focusWindow('projects');
      }}
      onDragEnd={({ operation }) => {
        startTransition(() => {
          setCoordinates(({ x, y }) => ({
            x: x + operation.transform.x,
            y: y + operation.transform.y,
          }));
          console.log('projects', x, y);
        });
      }}
    >
      <ProjectsDraggable
        top={y}
        left={x}
      />
    </DragDropProvider>
  );
};

const ProjectsDraggable = ({ top, left }: { top: number; left: number }) => {
  const { isProjectsOpen, setIsProjectsOpen, focusWindow, getWindowZIndex } = useKernel();

  const { ref, handleRef } = useDraggable({
    id: 'projects-draggable',
    modifiers: [RestrictToWindow],
  });

  const { play } = useSounds();

  if (!isProjectsOpen) return null;

  const style: React.CSSProperties = {
    position: 'absolute',
    top,
    left,
    zIndex: getWindowZIndex('projects'),
  };

  const handleClick = () => {
    focusWindow('projects');
  };

  const handleDragStart = () => {
    focusWindow('projects');
  };

  return (
    <article
      className='bg-background relative w-[736px] rounded-xs border font-sans'
      ref={ref}
      style={style}
      onClick={handleClick}
      onMouseDown={handleDragStart}
    >
      <div className='bg-primary text-primary-foreground flex items-center'>
        <div
          ref={handleRef}
          className='flex-1'
        >
          <p className='cursor-grab p-2 text-xs font-bold tracking-wide uppercase'>projects //</p>
        </div>
        <span
          onClick={() => {
            play({ id: 'click1' });
            setIsProjectsOpen(false);
          }}
          className='hover:bg-background/40 flex cursor-pointer items-center justify-center rounded-xs p-1'
        >
          [<X className='size-4' />]
        </span>
      </div>

      <div className='text-primary'>
        <div className='bg-secondary text-background m-2 rounded-xs p-2 text-sm'>
          <p className='font-bold'>
            Accepting work offers via my email{' '}
            <span className='hover:text-secondary underline hover:cursor-pointer'>
              hello@hanascript.com
            </span>
            .
          </p>
          <p>
            I do web/app development & web design.{' '}
            <span className='inline-flex'>
              <Smile className='size-4' />
            </span>
          </p>
        </div>
        <ScrollArea className='h-[520px] p-2 pr-6'>
          <div className='flex gap-4 pt-4'>
            <div className='flex-1'>
              <h3 className='pb-2 underline'>Development Tools:</h3>
              <ul className='flex flex-wrap gap-2 text-sm'>
                {techStackDevelopment.map((tool, index) => (
                  <li
                    key={index}
                    className='hover:text-secondary hover:border-secondary rounded-xs border px-2 py-1 hover:cursor-pointer'
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex-1'>
              <h3 className='pb-2 underline'>Other Tools:</h3>
              <ul className='flex flex-wrap gap-2 text-sm'>
                {techStackTools.map((tool, index) => (
                  <li
                    key={index}
                    className='hover:text-secondary hover:border-secondary rounded-xs border px-2 py-1 hover:cursor-pointer'
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='pt-4'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='grid grid-cols-3 gap-2 pb-4'
              >
                <div className='relative col-span-2 h-[250px] w-full'>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                  />
                </div>
                <div>
                  <h3 className='font-bold'>{project.title}</h3>
                  <p className='text-sm'>{project.description}</p>
                  <div className='flex gap-2 pt-2'>
                    <Link
                      href={project.links.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-secondary hover:border-secondary flex items-center gap-1 rounded-xs border px-2 py-1 text-xs uppercase hover:cursor-pointer'
                    >
                      <AppWindow className='size-4' />
                      Live
                    </Link>
                    <Link
                      href={project.links.repo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-secondary hover:border-secondary flex items-center gap-1 rounded-xs border px-2 py-1 text-xs uppercase hover:cursor-pointer'
                    >
                      <Github className='size-4' />
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <Link
              href='https://github.com/hanascript'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-secondary flex items-center gap-2 text-xs uppercase hover:cursor-pointer'
            >
              View More on Github <SquareArrowOutUpRight className='size-4' />
            </Link>
          </div>
        </ScrollArea>
      </div>
    </article>
  );
};

const ProjectsDrawer = () => {
  const { isProjectsOpen, setIsProjectsOpen } = useKernel();
  return (
    <Drawer
      open={isProjectsOpen}
      onOpenChange={setIsProjectsOpen}
    >
      <DrawerContent className='font-sans'>
        <DrawerHeader className='bg-primary flex flex-row items-center justify-between rounded-t-lg p-2'>
          <DrawerTitle className='text-primary-foreground text-sm font-bold uppercase'>
            Projects //
          </DrawerTitle>
          <DrawerClose
            className='text-primary-foreground hover:cursor-pointer'
            onClick={() => setIsProjectsOpen(false)}
          >
            <ChevronsDown className='size-4' />
          </DrawerClose>
        </DrawerHeader>
        <div className='text-primary'>
          <div className='bg-secondary text-background m-2 rounded-xs p-2 text-sm'>
            <p className='font-bold'>
              Accepting work offers via my email{' '}
              <span className='hover:text-secondary underline hover:cursor-pointer'>
                hello@hanascript.com
              </span>
              .
            </p>
            <p>
              I do web/app development & web design.{' '}
              <span className='inline-flex'>
                <Smile className='size-4' />
              </span>
            </p>
          </div>
          <ScrollArea className='h-[60vh] overflow-y-auto p-2 pr-5'>
            <div className='flex flex-col gap-4 pt-4'>
              <div className='flex-1'>
                <h3 className='pb-2 underline'>Development Tools:</h3>
                <ul className='flex flex-wrap gap-2 text-sm'>
                  {techStackDevelopment.map((tool, index) => (
                    <li
                      key={index}
                      className='hover:text-secondary hover:border-secondary rounded-xs border px-2 py-1 hover:cursor-pointer'
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex-1'>
                <h3 className='pb-2 underline'>Other Tools:</h3>
                <ul className='flex flex-wrap gap-2 text-sm'>
                  {techStackTools.map((tool, index) => (
                    <li
                      key={index}
                      className='hover:text-secondary hover:border-secondary rounded-xs border px-2 py-1 hover:cursor-pointer'
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='pt-4'>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='flex flex-col gap-2 pb-4'
                >
                  <div className='relative col-span-2 h-[250px] w-full'>
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                    />
                  </div>
                  <div>
                    <h3 className='font-bold'>{project.title}</h3>
                    <p className='text-sm'>{project.description}</p>
                    <div className='flex gap-4 pt-2'>
                      <Link
                        href={project.links.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-secondary hover:border-secondary flex flex-1 items-center justify-center gap-1 rounded-xs border p-2 text-xs uppercase hover:cursor-pointer'
                      >
                        <AppWindow className='size-4' />
                        Live
                      </Link>
                      <Link
                        href={project.links.repo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-secondary hover:border-secondary flex flex-1 items-center justify-center gap-1 rounded-xs border p-2 text-xs uppercase hover:cursor-pointer'
                      >
                        <Github className='size-4' />
                        Repo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <Link
                href='https://github.com/hanascript'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-secondary flex items-center gap-2 pb-6 uppercase hover:cursor-pointer'
              >
                View More on Github <SquareArrowOutUpRight className='size-4' />
              </Link>
            </div>
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
