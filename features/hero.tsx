import { SpinningDonut } from '@/components/animations/spinning-donut'
import { TerminalBoarder } from '@/components/terminal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typewrite } from '@/components/ui/typewrite'
import { Computer } from 'lucide-react'

export const Hero = () => {
  return (
    <section id='about' className='flex flex-col gap-2 pb-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col leading-3'>
          <h1 className='text-shadow text-6xl font-bold'>NATHAN</h1>
          <h1 className='text-shadow text-6xl font-bold'>MARCELLOUS</h1>
          <Typewrite
            examples={[
              'WEB DEVELOPER',
              'UI/UX DESIGNER',
              'FULLSTACK DEVELOPER'
            ]}
          />
        </div>
        <div className='hidden md:block'>
          <SpinningDonut />
        </div>
      </div>
      <TerminalBoarder
        title='about me'
        className='-top-2 bg-background text-xs text-primary-100'
      >
        <span className='text-xs leading-snug'>
          I'm a software developer focused on creating dynamic and user-friendly
          applications. I mainly work in Next.js I'm a software engineer and a
          web developer. I love to create beautiful and functional websites
          using React.
        </span>
      </TerminalBoarder>
    </section>
  )
}
