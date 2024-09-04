'use client';

import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useMedia } from 'react-use';

import { Logo } from '@/components/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navlinks = [
  {
    href: '/#about-me',
    text: 'About me',
  },
  {
    href: '/#projects',
    text: 'Projects',
  },
  {
    href: '/#education',
    text: 'Education',
  },
  {
    href: '/',
    text: 'Faq',
  },
  {
    href: '/#contact',
    text: 'Contact',
  },
];

export const Navbar = () => {
  // const isMobile = useMedia('(min-width: 768px)', true);
  // return isMobile ? (
  //   <div>
  //     <DesktopNav />
  //   </div>
  // ) : (
  //   <div>
  //     <MobileNav />
  //   </div>
  // );
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

const DesktopNav = () => {
  return (
    <>
      <nav className='max-w-screen-md mx-auto py-6 justify-between items-center hidden md:flex'>
        <Logo />
        <div className='flex items-center gap-12 text-xs tracking-widest'>
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
  );
};

const MobileNav = () => {
  return (
    <>
      <nav className='max-w-screen-md mx-auto p-6 flex md:hidden justify-between items-center'>
        <Logo />
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className='pt-16 flex flex-col gap-5 tracking-widest'>
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
  );
};
