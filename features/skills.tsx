import { Scramble } from '@/components/animations/scramble'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DATA } from '@/data/resume'
import { Wrench } from 'lucide-react'

export const Skills = () => {
  const SKILLS = DATA.skills

  return (
    <section id='skills' className='pb-6'>
      <Card className='border-none shadow'>
        <CardHeader className='pb-4'>
          <CardTitle className='flex items-center gap-2 text-xs font-semibold uppercase leading-none tracking-tight text-primary-100'>
            <Wrench className='size-4' />
            skills
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-2'>
          {SKILLS.map((skill, index) => {
            const text = skill.stack.join(', ')

            return (
              <div
                key={index}
                className='flex gap-2 text-xs hover:cursor-default'
              >
                <p className='font-semibold'>{skill.title}:</p>
                <Scramble className='text-muted-foreground' text={text} />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
