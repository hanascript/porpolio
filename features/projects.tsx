import { Floating } from '@/components/animations/floating'
import { ProjectCard } from '@/components/project-card'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FolderOpen } from 'lucide-react'

export const Projects = () => {
  const PROJECTS = DATA.projects

  return (
    <section id='projects' className='flex flex-col gap-2 pb-6'>
      {/* <p className='flex items-center gap-2 text-xs font-semibold uppercase leading-none tracking-tight text-primary-100'>
        projects
      </p>
      <Floating className='space-y-8'>
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className={cn(
              'flex items-center',
              i % 2 === 0 ? 'justify-end' : 'justify-start'
            )}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </Floating> */}
      <Card className='border-none shadow'>
        <CardHeader className='pb-4'>
          <CardTitle className='flex items-center gap-2 text-xs font-semibold uppercase leading-none tracking-tight text-primary-100'>
            <FolderOpen className='size-4' />
            projects
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-2'>
          <Floating className='space-y-8'>
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className={cn(
                  'flex items-center',
                  i % 2 === 0 ? 'justify-end' : 'justify-start'
                )}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </Floating>
        </CardContent>
      </Card>
    </section>
  )
}
