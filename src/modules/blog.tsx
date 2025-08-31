'use client';

import { startTransition, useState } from 'react';
import { RestrictToWindow } from '@dnd-kit/dom/modifiers';
import { DragDropProvider, useDraggable } from '@dnd-kit/react';
import { ChevronsDown, X } from 'lucide-react';

import { blogs } from '@/lib/data';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useKernel } from '@/components/hooks/use-kernel';
import { useIsMobile } from '@/components/hooks/use-mobile';
import { useSounds } from '@/components/hooks/use-sounds';

type Coordinates = {
  x: number;
  y: number;
};

const defaultCoordinates: Coordinates = {
  x: 650,
  y: 220,
};

export const BlogButton = () => {
  const { setIsBlogOpen } = useKernel();

  const { play } = useSounds();

  const handleClick = () => {
    play({ id: 'click2' });
    setIsBlogOpen(true);
  };

  return (
    <button
      className='glass-hover flex flex-1 items-center justify-center py-2 uppercase hover:cursor-pointer'
      onClick={handleClick}
    >
      Blog
    </button>
  );
};

export const BlogWindow = () => {
  const isMobile = useIsMobile();
  const [{ x, y }, setCoordinates] = useState<Coordinates>(defaultCoordinates);
  const { focusWindow } = useKernel();

  if (isMobile) {
    return <BlogDrawer />;
  }

  return (
    <DragDropProvider
      onDragStart={() => {
        focusWindow('blog');
      }}
      onDragEnd={({ operation }) => {
        startTransition(() => {
          setCoordinates(({ x, y }) => ({
            x: x + operation.transform.x,
            y: y + operation.transform.y,
          }));
        });
      }}
    >
      <BlogDraggable
        top={y}
        left={x}
      />
    </DragDropProvider>
  );
};

const BlogDraggable = ({ top, left }: { top: number; left: number }) => {
  const { isBlogOpen, setIsBlogOpen, focusWindow, getWindowZIndex } = useKernel();

  const { ref, handleRef } = useDraggable({
    id: 'blog-draggable',
    modifiers: [RestrictToWindow],
  });

  const { play } = useSounds();

  if (!isBlogOpen) return null;

  const style: React.CSSProperties = {
    position: 'absolute',
    top,
    left,
    zIndex: getWindowZIndex('blog'),
  };

  const handleClick = () => {
    focusWindow('blog');
  };

  const handleDragStart = () => {
    focusWindow('blog');
  };

  return (
    <article
      className='bg-background relative w-[568px] rounded-xs border font-sans'
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
          <p className='cursor-grab p-2 text-xs font-bold tracking-wide uppercase'>blog //</p>
        </div>
        <span
          onClick={() => {
            play({ id: 'click1' });
            setIsBlogOpen(false);
          }}
          className='hover:bg-background/40 flex cursor-pointer items-center justify-center rounded-xs p-1'
        >
          [<X className='size-4' />]
        </span>
      </div>

      <div className='text-primary p-2'>
        <input
          className='focus:border-secondary w-full rounded-xs border p-2 focus:outline-none'
          type='text'
          placeholder='Search'
        />
        <div className='mt-2 h-[200px]'>
          {blogs.length > 0 ? (
            blogs.map((blog, index) => <div key={index}>blog</div>)
          ) : (
            <div className='text-primary flex h-full items-center justify-center text-xs'>
              Sorry, I don&apos;t have any blogs yet...
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const BlogDrawer = () => {
  const { isBlogOpen, setIsBlogOpen } = useKernel();
  return (
    <Drawer
      open={isBlogOpen}
      onOpenChange={setIsBlogOpen}
    >
      <DrawerContent className='font-sans'>
        <DrawerHeader className='bg-primary flex flex-row items-center justify-between rounded-t-lg p-2'>
          <DrawerTitle className='text-primary-foreground text-sm font-bold uppercase'>
            Blog //
          </DrawerTitle>
          <DrawerClose
            className='text-primary-foreground hover:cursor-pointer'
            onClick={() => setIsBlogOpen(false)}
          >
            <ChevronsDown className='size-4' />
          </DrawerClose>
        </DrawerHeader>
        <div className='mt-2 h-[200px]'>
          {blogs.length > 0 ? (
            blogs.map((blog, index) => <div key={index}>blog</div>)
          ) : (
            <div className='text-primary flex h-full items-center justify-center text-xs'>
              Sorry, I don&apos;t have any blogs yet...
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
