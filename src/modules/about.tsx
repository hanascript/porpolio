'use client';

import { startTransition, useState } from 'react';
import { RestrictToWindow } from '@dnd-kit/dom/modifiers';
import { DragDropProvider, useDraggable } from '@dnd-kit/react';
import { ChevronsDown, X } from 'lucide-react';

import { aboutMe } from '@/lib/data';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useKernel } from '@/components/hooks/use-kernel';
import { useIsMobile } from '@/components/hooks/use-mobile';
import { useSounds } from '@/components/hooks/use-sounds';
import { Services } from '@/components/services';

type Coordinates = {
  x: number;
  y: number;
};

const defaultCoordinates: Coordinates = {
  x: 380,
  y: 85,
};

export const AboutButton = () => {
  const { setIsAboutOpen } = useKernel();

  const { play } = useSounds();

  const handleClick = () => {
    play({ id: 'click2' });
    setIsAboutOpen(true);
  };

  return (
    <button
      className='glass-hover flex flex-1 items-center justify-center py-2 uppercase hover:cursor-pointer'
      onClick={handleClick}
    >
      About
    </button>
  );
};

export const AboutWindow = () => {
  const isMobile = useIsMobile();
  const [{ x, y }, setCoordinates] = useState<Coordinates>(defaultCoordinates);
  const { focusWindow } = useKernel();

  if (isMobile) {
    return <AboutDrawer />;
  }

  return (
    <DragDropProvider
      modifiers={[RestrictToWindow]}
      onDragStart={() => {
        focusWindow('about');
      }}
      onDragEnd={({ operation }) => {
        startTransition(() => {
          setCoordinates(({ x, y }) => ({
            x: x + operation.transform.x,
            y: y + operation.transform.y,
          }));
          console.log('about', x, y);
        });
      }}
    >
      <AboutDraggable
        top={y}
        left={x}
      />
    </DragDropProvider>
  );
};

const AboutDraggable = ({ top, left }: { top: number; left: number }) => {
  const { isAboutOpen, setIsAboutOpen, focusWindow, getWindowZIndex } = useKernel();

  const { ref, handleRef } = useDraggable({
    id: 'about-draggable',
    modifiers: [RestrictToWindow],
  });

  const { play } = useSounds();

  if (!isAboutOpen) return null;

  const style: React.CSSProperties = {
    position: 'absolute',
    top,
    left,
    zIndex: getWindowZIndex('about'),
  };

  const handleClick = () => {
    focusWindow('about');
  };

  const handleDragStart = () => {
    focusWindow('about');
  };

  return (
    <article
      className='bg-background relative w-[368px] rounded-xs border font-sans'
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
          <p className='cursor-grab p-2 text-xs font-bold tracking-wide uppercase'>about //</p>
        </div>
        <span
          onClick={() => {
            play({ id: 'click1' });
            setIsAboutOpen(false);
          }}
          className='hover:bg-background/40 flex cursor-pointer items-center justify-center rounded-xs p-1'
        >
          [<X className='size-4' />]
        </span>
      </div>

      <ScrollArea className='text-primary h-[520px]'>
        <div className='p-2 pr-6'>
          <p className='text-xs leading-tight'>Hey, I&apos;m</p>
          <h1 className='text-secondary text-3xl tracking-wide'>NATHAN MARCELLOUS</h1>
          <p className='pb-2 text-xs leading-tight'>I&apos;m a full stack web developer.</p>

          <Separator className='my-2' />
          <h2 className='text-secondary cursor-default py-2 select-none'>ABOUT ME</h2>
          <p className='text-xs leading-tight'>{aboutMe.about}</p>
          <p className='mt-4 text-xs leading-tight'>{aboutMe.about2}</p>
          <p className='mt-4 pb-2 text-xs leading-tight'>
            If you&apos;re interested in working together, check out my services below & shoot me an
            email at{' '}
            <span className='hover:text-secondary underline hover:cursor-pointer'>
              HELLO@HANASCRIPT.COM
            </span>
            .
          </p>
          <h2 className='text-secondary cursor-default py-2 select-none'>SERVICES</h2>
          <Services />
          <div className='mt-4' />
        </div>
      </ScrollArea>
    </article>
  );
};

const AboutDrawer = () => {
  const { isAboutOpen, setIsAboutOpen } = useKernel();
  return (
    <Drawer
      open={isAboutOpen}
      onOpenChange={setIsAboutOpen}
    >
      <DrawerContent className='font-sans'>
        <DrawerHeader className='bg-primary flex flex-row items-center justify-between rounded-t-lg p-2'>
          <DrawerTitle className='text-primary-foreground text-sm font-bold uppercase'>
            About //
          </DrawerTitle>
          <DrawerClose
            className='text-primary-foreground hover:cursor-pointer'
            onClick={() => setIsAboutOpen(false)}
          >
            <ChevronsDown className='size-4' />
          </DrawerClose>
        </DrawerHeader>
        <div className='text-primary flex-1 overflow-y-auto'>
          <div className='p-4'>
            <p className='text-xs leading-tight'>Hey, I&apos;m</p>
            <h1 className='text-secondary text-3xl tracking-wide'>NATHAN MARCELLOUS</h1>
            <p className='pb-2 text-xs leading-tight'>I&apos;m a full stack web developer.</p>

            <Separator className='my-2' />
            <h2 className='text-secondary cursor-default py-2 select-none'>ABOUT ME</h2>
            <p className='text-xs leading-tight'>{aboutMe.about}</p>
            <p className='mt-4 text-xs leading-tight'>{aboutMe.about2}</p>
            <p className='mt-4 pb-2 text-xs leading-tight'>
              If you&apos;re interested in working together, check out my services below & shoot me
              an email at{' '}
              <span className='hover:text-secondary underline hover:cursor-pointer'>
                HELLO@HANASCRIPT.COM
              </span>
              .
            </p>
            <h2 className='text-secondary cursor-default py-2 select-none'>SERVICES</h2>
            <Services />
            <div className='mt-4' />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
