'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

// Source: https://medium.com/@caden0002/implementing-an-infinite-slider-in-react-with-tailwind-css-and-framer-motion-69173adb31a3


type LogoSliderProps = {
  logos: JSX.Element[]
  className?: string
}

export const LogoSlider = ({ logos, className }: LogoSliderProps) => {
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className='relative w-full overflow-hidden'>
      <div className='before:blur-3 after:blur-3 absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:h-full before:w-1/4 before:bg-gradient-to-r before:from-background before:to-transparent before:filter after:absolute after:right-0 after:top-0 after:h-full after:w-1/4 after:bg-gradient-to-l after:from-background after:to-transparent after:filter'></div>
      {/* Wrapping div for seamless looping */}
      <motion.div
        className='flex'
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: 10,
            repeat: Infinity
          }
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className='flex-shrink-0'
            style={{ width: `${100 / logos.length}%` }}
          >
            <div
              className={cn(
                'flex h-full flex-col items-center justify-center',
                className
              )}
            >
              {logo}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
