import { ChevronRight } from 'lucide-react'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiPostgresql, SiTypescript } from 'react-icons/si'

import { ProjectCard } from '@/components/project-card'
import {
  Container,
  ContainerLeft,
  ContainerRight
} from '@/components/ui/container'
import { Title } from '@/components/ui/title'

const myProjects = [
  {
    img: '/images/sorting-visualizer.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere, possimus similique rem eligendi voluptatibus incidunt iusto.',
    title: 'Sorting Visualizer',
    href: '/projects/sorting-visualizer',
    icons: [
      <RiNextjsFill />,
      <SiTypescript />,
      <RiTailwindCssFill />,
      <SiPostgresql />
    ]
  },
  {
    img: '/images/sorting-visualizer.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere, possimus similique rem eligendi voluptatibus incidunt iusto.',
    title: 'Sorting Visualizer',
    href: '/projects/demo1',
    icons: [
      <RiNextjsFill />,
      <SiTypescript />,
      <RiTailwindCssFill />,
      <SiPostgresql />
    ]
  },
  {
    img: '/images/sorting-visualizer.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere, possimus similique rem eligendi voluptatibus incidunt iusto.',
    title: 'Sorting Visualizer',
    href: '/projects/demo2',
    icons: [
      <RiNextjsFill />,
      <SiTypescript />,
      <RiTailwindCssFill />,
      <SiPostgresql />
    ]
  },
  {
    img: '/images/sorting-visualizer.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere, possimus similique rem eligendi voluptatibus incidunt iusto.',
    title: 'Sorting Visualizer',
    href: '/projects/demo3',
    icons: [
      <RiNextjsFill />,
      <SiTypescript />,
      <RiTailwindCssFill />,
      <SiPostgresql />
    ]
  }
]

export const Projects = () => {
  return (
    <div id='projects'>
      <Container>
        <ContainerLeft>
          <Title className='py-2'>Projects</Title>
        </ContainerLeft>
        <ContainerRight>
          <div className='grid grid-cols-1 gap-4 pt-2'>
            {myProjects.map(project => (
              // <Link
              //   key={project.href}
              //   href={project.href}
              //   className='h-[150px] w-[240px] group/item'
              // >
              //   <Image
              //     src={project.img}
              //     alt={project.title}
              //     width={240}
              //     height={100}
              //   />
              // <Title className='pt-2 flex justify-between items-center '>
              //   <p>{project.title}</p>
              //   <p className='hidden group-hover/item:flex items-center text-foreground transition-all'>
              //     View <ChevronRight className='size-3' />
              //   </p>
              // </Title>
              // </Link>
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
          {/* <a
            href='https://github.com/TabuHana'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-end pt-2 text-xs tracking-widest hover:underline'
          >
            View More <ChevronRight className='size-4' />
          </a> */}
        </ContainerRight>
      </Container>
    </div>
  )
}
