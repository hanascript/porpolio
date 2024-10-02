'use client'

import Link from 'next/link'
import { AlignJustify } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useMedia } from 'react-use'

import { Logo } from '@/components/logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navlinks = [
  {
    href: '/#about-me',
    text: 'About me'
  },
  {
    href: '/#projects',
    text: 'Projects'
  },
  {
    href: '/#experience',
    text: 'Experience'
  },
  {
    href: '/Posts',
    text: 'Posts'
  },
  {
    href: '/#contact',
    text: 'Contact'
  }
]

export const Navbar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  )
}

const DesktopNav = () => {
  return (
    <>
      <nav className='mx-auto hidden max-w-screen-lg items-center justify-between px-3 py-6 md:flex'>
        <Logo />
        <div className='flex items-center gap-8 text-xs tracking-widest'>
          {navlinks.map(link => (
            <Link
              key={link.text}
              href={link.href}
              className='hover:text-muted-foreground'
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

const MobileNav = () => {
  return (
    <>
      <nav className='mx-auto flex max-w-screen-lg items-center justify-between p-6 md:hidden'>
        <Logo />
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className='flex flex-col gap-5 pt-16 tracking-widest'>
            {navlinks.map(link => (
              <Link
                key={link.text}
                href={link.href}
                className='hover:text-muted-foreground'
              >
                {link.text}
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </nav>
    </>
  )
}
