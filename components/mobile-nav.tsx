import { cn } from '@/lib/utils'
import { Sun } from 'lucide-react'
import Link from 'next/link'



export const MobileNav = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-11/12 sm:w-3/4 lg:w-2/5 p-2 pl-6 bg-gradient-to-tr from-transparent to-foreground/5 border border-foreground/15 rounded-2xl flex items-center justify-between backdrop-blur-md">
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
        <Sun className='size-4' />
    </div>
  )
}
