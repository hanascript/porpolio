'use client'

import { cn } from '@/lib/utils'
import { LucideProps } from 'lucide-react'
import { useScramble } from 'use-scramble'

type Props = {
  text: string
  repeat?: boolean
  icon?: React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >
  className?: string
  speed?: number
}

export const Scramble = ({
  text,
  repeat = true,
  className,
  speed = 0.5,
  icon: Icon
}: Props) => {
  const { ref, replay } = useScramble({
    text,
    speed,
    tick: 3,
    step: 5,
    scramble: 9,
    seed: 0,
    overdrive: false
  })

  return (
    <div
      className={cn('flex items-center gap-2', className)}
      onMouseOver={repeat ? replay : () => {}}
    >
      {Icon && <Icon className='size-4' />}
      <p ref={ref} />
    </div>
  )
}
