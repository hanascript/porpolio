import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Container,
  ContainerFull,
  ContainerLeft,
  ContainerRight
} from '@/components/ui/container'
import { SpinningDonut } from './spinning-donut'
import { Terminal, TerminalLayer } from './terminal'

const about = {
  title:
    'Dedicated full stack developer. With a passion to create responsize and feature rich scalable web apps.',
  info: 'Hi, my name is Nathan Marcellous. I am currently looking for opportunities to work with a team. I specialize in Nextjs, but I am open to any tech stack or framework.'
}

export const AboutMe = () => {
  return (
    <div id='about-me'>
      <Container>
        <ContainerFull className='md:hidden'>
          <div className='relative mx-auto h-[300px] w-[245px] md:hidden'>
            <Image
              src='/images/demo.png'
              alt='demo img'
              fill
              className='object-fill'
            />
          </div>
        </ContainerFull>
        <ContainerLeft variant='secondary'>
          <div className='text-xs tracking-widest text-muted-foreground md:hidden'>
            About me
          </div>
          <div className='relative hidden h-[300px] w-full md:block'>
            <Terminal title='Compiling...' className='w-[250px]'>
              <TerminalLayer title='Donut' className='-top-2 text-xs'>
                <div className='pl-4'>
                  <SpinningDonut />
                </div>
              </TerminalLayer>
            </Terminal>
          </div>
        </ContainerLeft>
        <ContainerRight variant='secondary'>
          <Card className='hidden md:block'>
            <CardHeader>
              <CardDescription>About me</CardDescription>
              <CardTitle className=''>{about.title}</CardTitle>
            </CardHeader>
            <CardContent>{about.info}</CardContent>
            <CardFooter>
              <Button>Download Resume</Button>
            </CardFooter>
          </Card>
          <Card className='md:hidden'>
            <CardHeader>
              <CardTitle>{about.title}</CardTitle>
            </CardHeader>
            <CardContent>{about.info}</CardContent>
            <CardFooter>
              <Button>Download Resume</Button>
            </CardFooter>
          </Card>
        </ContainerRight>
      </Container>
    </div>
  )
}
