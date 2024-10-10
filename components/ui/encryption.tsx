'use client'

import {
  motion,
  useAnimationControls
} from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  children: string
}

const FAKES = '##·$%&/=€|()@+09*+]}{['

const replaceCharacters = (input: string) => {
  // Generate a new string where each character is replaced with a random character from availableChars
  return Array.from(input)
    .map(() => {
      const randomChar = FAKES.charAt(Math.floor(Math.random() * FAKES.length))
      return randomChar
    })
    .join('')
}

export const Encryption = ({ children }: Props) => {
  const controls = useAnimationControls()
  const controls2 = useAnimationControls()

  const [isHovered, setIsHovered] = useState(false)

  const [dummyText, setDummyText] = useState('')
  const [dummyText2, setDummyText2] = useState('')

  useEffect(() => {
    setDummyText(replaceCharacters(children))
    setDummyText2(replaceCharacters(children))
  }, [])

  useEffect(() => {
    if (isHovered) {
      console.log('start')
      controls.start((i) => ({
        opacity: [0, 1, 0],
        transition: {
          duration: 0.3, // Total duration for the flip back and forth
          delay: i * 0.065, // Each letter starts after the previous finishes flipping back
          ease: 'easeInOut',
        },
      }))
      controls2.start((i) => ({
        opacity: [0, 1, 0],
        transition: {
          duration: 0.4, // Total duration for the flip back and forth
          delay: i * 0.065, // Each letter starts after the previous finishes flipping back
          ease: 'easeInOut',
        },
      }))
    }
  }, [isHovered])

  const handleAnimationComplete = () => {
    setIsHovered(false)
  }

  return (
    <div onMouseEnter={() => setIsHovered(true)}>
      {children.split('').map((char, idx) => (
        <div
          key={idx}
          className="relative inline-block cursor-default select-none hover:cursor-default"
        >
          <motion.span
            custom={idx}
            className="absolute inset-0 bg-primary-500 text-primary-foreground opacity-0"
            initial={{ opacity: 0 }}
            animate={controls}
            onAnimationComplete={
              idx === children.length - 1 ? handleAnimationComplete : undefined
            }
          >
            {dummyText[idx]}
          </motion.span>
          <motion.span
            custom={idx}
            className="absolute inset-0 bg-primary-500 text-primary-foreground opacity-0"
            initial={{ opacity: 0 }}
            animate={controls2}
            onAnimationComplete={
              idx === children.length - 1 ? handleAnimationComplete : undefined
            }
          >
            {dummyText2[idx]}
          </motion.span>
          <span className="">{char}</span>
        </div>
      ))}
    </div>
  )
}
