import { cn } from '@/lib/utils'
import { Sun } from 'lucide-react'
import Link from 'next/link'



export const MobileNav = () => {
  return (
    <div className='fixed bottom-10 left-1/2 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-2xl border border-foreground/15 bg-gradient-to-tr from-transparent to-foreground/5 p-2 pl-6 backdrop-blur-md sm:w-3/4 lg:hidden'>
      <Link href='/'>
        <h1 className={cn('font-bold')}>HanaScript</h1>
      </Link>
      {/* <div className='flex items-center gap-4'>
        {LINKS.map((link, i) => (
          <Link key={i} href={link.href} className='text-sm'>
            {link.name}
          </Link>
        ))}
      </div> */}
        <Sun />
    </div>
  )
}
