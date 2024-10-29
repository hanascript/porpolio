import Link from 'next/link'
import { Terminal } from './terminal'

type Props = {
  project: {
    coverImage: string
    title: string
    description: string
    href: string
    display?: string
  }
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={project.href} className='w-10/12'>
      <Terminal
        title={project.title}
        image={project.coverImage}
      >
        <div className='space-y-1 text-right text-xs'>
          <p className='text-sm text-muted-foreground'>{project.description}</p>
        </div>
      </Terminal>
    </Link>
  )
}
