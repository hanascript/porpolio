'use client'

import { Variants, motion } from 'framer-motion'
import { DiamondIcon } from 'lucide-react'

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 1,
      ease: 'circIn'
    }
  }
} as Variants

export const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25
      }}
      initial='initial'
      animate='animate'
      className='flex items-center gap-1.5'
    >
      <motion.div variants={variants}>
        <DiamondIcon className='size-3 fill-accent' />
      </motion.div>
      <motion.div variants={variants}>
        <DiamondIcon className='size-3 fill-accent' />
      </motion.div>
      <motion.div variants={variants}>
        <DiamondIcon className='size-3 fill-accent' />
      </motion.div>
    </motion.div>
  )
}
