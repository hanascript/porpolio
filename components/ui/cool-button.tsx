'use client'

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring
} from 'framer-motion'
import { LucideProps } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { useScramble } from 'use-scramble'

type Props = {
  href: string
  label: string
  icon: React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >
}

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100
}

export const CoolButton = ({ href, label, icon: Icon }: Props) => {
  const { ref: refScramble, replay: replayScramble } = useScramble({
    text: label,
    speed: 0.5,
    tick: 3,
    scramble: 9,
    seed: 0,
    overdrive: false
  })

  const ref = useRef<HTMLButtonElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, SPRING_OPTIONS)
  const ySpring = useSpring(y, SPRING_OPTIONS)

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`

  const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!ref.current) return

    const { height, width } = ref.current.getBoundingClientRect()
    const { offsetX, offsetY } = e.nativeEvent

    const xPct = offsetX / width
    const yPct = 1 - offsetY / height

    const newY = 3 + yPct * 3
    const newX = 3 + xPct * 3

    x.set(newX)
    y.set(-newY)
  }

  const handleReset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={href} className='rounded bg-black'>
      <motion.button
        ref={ref}
        style={{
          transform
        }}
        onMouseOver={replayScramble}
        onMouseMove={handleMove}
        onMouseLeave={handleReset}
        onMouseDown={handleReset}
        className='group mx-auto flex w-full items-center justify-center gap-4 rounded border border-black bg-card p-2 text-xs'
      >
        <Icon className='size-4 group-hover:animate-bounce' />
        <p ref={refScramble}>{label}</p>
      </motion.button>
    </Link>
  )
}
