import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import { Sun } from 'lucide-react'
import Link from 'next/link'

export const Navbar = () => {
  const LINKS = DATA.navbar

  return (
    <div className='fixed bottom-10 left-1/2 flex w-11/12 max-w-screen-md -translate-x-1/2 items-center justify-between rounded-2xl border border-foreground/15 bg-gradient-to-tr from-transparent to-foreground/5 p-2 pl-6 backdrop-blur-md sm:w-3/4 lg:w-2/5'>
      <Link href='/'>
        <h1 className={cn('font-semibold hover:text-primary-100')}>
          HANASCRIPT
        </h1>
      </Link>
      <div className='flex items-center gap-4'>
        {LINKS.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className='text-sm font-semibold hover:text-primary-100'
          >
            {link.label}
          </Link>
        ))}
        {/* <Sun className='size-4' /> // Todo: add dark mode */}
      </div>
    </div>
  )
}
