import { DiamondIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  title: string
}

export const Terminal = ({ children, className, title }: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col border bg-muted',
        className
      )}
    >
      <div className='bg-muted-shade flex h-10 w-full items-center justify-between px-3 text-sm'>
        <p>{title}</p>
        <div className='flex items-center gap-2'>
          <DiamondIcon className='size-3 fill-accent opacity-30' />
          <DiamondIcon className='size-3 fill-accent opacity-60' />
          <DiamondIcon className='size-3 fill-accent opacity-90' />
        </div>
      </div>
      <div
        className='flex-1  p-3 text-sm'
        style={{
          backgroundImage: `radial-gradient(#EAE5D1 1px, transparent 1px)`,
          backgroundSize: '5px 5px'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export const TerminalLayer = ({ children, title, className }: Props) => {
  return (
    <div className='relative mt-4 border border-accent p-2'>
      <div
        className={cn(
          'absolute -top-4 left-3 bg-muted px-0.5 text-lg font-semibold',
          className
        )}
        style={{
          backgroundImage: `radial-gradient(#EAE5D1 1px, transparent 1px)`,
          backgroundSize: '5px 5px'
        }}
      >
        <span>[{title}]</span>
      </div>
      {children}
    </div>
  )
}
