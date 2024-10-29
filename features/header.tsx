'use client'


import { Clock } from '@/components/animations/clock'

import { useScramble } from 'use-scramble'
import { DownloadResume } from './download-resume'

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
    <div>
      <div className='flex items-center justify-between border-b border-black pt-4 pb-1 text-sm'>
        <p
          ref={ref}
          onMouseOver={replay}
          className='tracking-widest hover:cursor-default'
        >
          HANASCRIPT
        </p>

        <DownloadResume />
      </div>
      <div className='flex items-center justify-between gap-1 pt-1 text-sm text-muted-foreground'>
        <div className='flex animate-pulse items-center gap-2'>
          <div className='size-2 rounded-full bg-success' />
          <p>ONLINE</p>
        </div>

        <Clock />
      </div>
    </div>
  )
}
