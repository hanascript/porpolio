'use client'

import { motion } from 'framer-motion'

export const Floating = ({
  children,
  duration = 3,
  y = 7,
  className
}: {
  children: React.ReactNode
  duration?: number
  y?: number
  className?: string
}) => {
  return (
    <motion.div
      animate={{
        y: [-y, y]
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        staggerChildren: 0.5
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
