import { DiamondIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { BarLoader } from './animations/bar-loader'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
  className?: string
  title: string
  image?: string
}

export const Terminal = ({
  children,
  className,
  title,
  image,
}: Props) => {
  return (
    <div className={cn('shadow-6xl flex flex-col bg-accent rounded w-full max-w-lg', className)}>
      <div className='flex h-10 w-full items-center justify-between rounded-t bg-primary-500 px-3 text-sm text-background'>
        <p>{title}</p>
        <div className='flex items-center gap-2'>
          <BarLoader />
        </div>
      </div>
      <div
        className='relative flex-1 p-3 text-sm'
        style={{
          backgroundImage: `radial-gradient(#EAE5D1 1px, transparent 1px)`,
          backgroundSize: '5px 5px'
        }}
      >
        {image && (
          <div
            className={cn(
              'relative mb-2 h-48 aspect-video w-full'
            )}
          >
            <Image src={image} alt={title} fill className='rounded-md' />
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export const TerminalBoarder = ({ children, title, className }: Props) => {
  return (
    <div className='relative mt-4 border border-black p-2'>
      <div
        className={cn(
          'absolute -top-4 left-3 bg-card px-1 uppercase',
          className
        )}
        style={{
          backgroundImage: `radial-gradient(#EAE5D1 1px, transparent 1px)`,
          backgroundSize: '5px 5px'
        }}
      >
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}
