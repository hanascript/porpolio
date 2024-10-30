import { Scramble } from '@/components/animations/scramble'
import { SpinningDonut } from '@/components/animations/spinning-donut'
import { TerminalBoarder } from '@/components/terminal'
import { Typewrite } from '@/components/ui/typewrite'
import { DATA } from '@/data/resume'

export const Hero = () => {
  return (
    <section id='about' className='flex flex-col gap-2 pb-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col leading-3'>
          <h1 className='text-shadow text-6xl font-bold'>NATHAN</h1>
          <h1 className='text-shadow text-6xl font-bold'>MARCELLOUS</h1>
          <Typewrite
            examples={[
              'FULLSTACK DEVELOPER',
              'SOLUTION STRATEGIST',
              'CREATEIVE ANALYST',
              'STRATEGIC THINKER',
              'DIGETAL ARCHITECT'
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
        <Scramble
          className='px-2 py-4 text-sm hover:cursor-default'
          repeat={false}
          speed={1}
          text={DATA.description}
        />
      </TerminalBoarder>
    </section>
  )
}
