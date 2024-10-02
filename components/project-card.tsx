import Image from 'next/image'
import { LogoSlider } from './logo-slider'

type Props = {
  project: {
    img: string
    title: string
    description: string
    href: string
    icons: JSX.Element[]
  }
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className='w-full border border-black p-2 shadow-md hover:shadow-none md:w-11/12'>
      <div className='flex flex-col gap-2 pb-2 md:flex-row'>
        <div className='relative w-full bg-black'>
          {/* <Image src={project.img} alt={project.title} fill /> */}
          <Image
            src={project.img}
            alt={project.title}
            width='1920'
            height='1080'
            className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
          />
        </div>
        <div>
          <p className='w-full font-semibold tracking-widest'>
            {project.title}
          </p>
          <p className='w-full text-sm'>{project.description}</p>
          <p>view more -</p>
        </div>
      </div>
      <LogoSlider logos={project.icons} className='text-xl' />
    </div>
  )
}
