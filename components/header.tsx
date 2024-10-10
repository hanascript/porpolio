'use client'

import { EllipsisIcon } from 'lucide-react'

import { Clock } from '@/components/clock'

import { Button } from '@/components/ui/button'
import { useScramble } from 'use-scramble'
import { VelocityScroll } from './ui/text-slider'

export const Header = () => {
  const { ref, replay } = useScramble({
    text: 'HANASCRIPT',
    speed: 0.5,
    tick: 3,
    scramble: 9,
    seed: 0,

    overdrive: false
  })

  return (
    <div className='mx-auto max-w-screen-lg'>
      <div className='flex items-center justify-between border-b border-black py-2'>
        <p
          ref={ref}
          onMouseOver={replay}
          className='tracking-widest hover:cursor-default'
        >
          HANASCRIPT
        </p>

        <Button variant='ghost' size='icon'>
          <EllipsisIcon className='size-4' />
        </Button>
      </div>
      <div className='flex items-center justify-between gap-1 py-1 text-sm text-muted-foreground'>
        <div className='flex items-center gap-2'>
          <div className='size-2 animate-pulse rounded-full bg-success' />
          <p>ONLINE</p>
        </div>
        
        <Clock />
      </div>
    </div>
  )
}
