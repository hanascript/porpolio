'use client'

import { DATA } from '@/data/resume'
import Link from 'next/link'
import { Scramble } from './animations/scramble'

export const LinkMinimap = () => {
  const LINKS = DATA.links

  return (
    <div className='fixed -right-20 top-10 z-50 hidden w-full max-w-xs flex-col gap-2 lg:flex'>
      {LINKS.map((link, index) => (
        <Link key={index} href={link.href} className='text-sm'>
          <Scramble text={link.label} icon={link.icon} />
        </Link>
      ))}
    </div>
  )
}
