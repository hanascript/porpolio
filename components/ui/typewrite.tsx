'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LETTER_DELAY = 0.025
const BOX_FADE_DURATION = 0.125

const FADE_DELAY = 5
const MAIN_FADE_DURATION = 0.25

const SWAP_DELAY_IN_MS = 5500

export const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex(pv => (pv + 1) % examples.length)
    }, SWAP_DELAY_IN_MS)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <p className='text-lg uppercase tracking-widest'>
      <span>
        {examples[exampleIndex].split('').map((l, i) => (
          <motion.span
            initial={{
              opacity: 1
            }}
            animate={{
              opacity: 0
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: 'easeInOut'
            }}
            key={`${exampleIndex}-${i}`}
            className='relative'
          >
            <motion.span
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: [0, 1, 0]
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: 'easeInOut'
              }}
              className='absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950'
            />
          </motion.span>
        ))}
      </span>
    </p>
  )
}
