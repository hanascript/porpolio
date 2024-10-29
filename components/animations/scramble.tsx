'use client'

import { LucideProps } from 'lucide-react'
import { useScramble } from 'use-scramble'

type Props = {
  text: string
  icon?: React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >
}

export const Scramble = ({ text, icon: Icon }: Props) => {
  const { ref, replay } = useScramble({
    text,
    speed: 0.5,
    tick: 3,
    scramble: 9,
    seed: 0,
    overdrive: false
  })

  return (
    <div
      className='flex items-center gap-2 hover:text-primary-100'
      onMouseOver={replay}
    >
      {Icon && <Icon className='size-4' />}
      <p ref={ref} className='text-xs' />
    </div>
  )
}
