import { AboutMe } from '@/components/about-me'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { TerminalLayer } from '@/components/terminal'
import { Container } from '@/components/ui/container'

const MainPage = () => {
  return (
    <>
      {/* <AboutMe />
      <Projects />
      <Education />
      <Container /> */}
      <div className='flex flex-col leading-3'>
        <p className='text-6xl font-bold'>NATHAN</p>
        <p className='text-6xl font-bold'>MARCELLOUS</p>
        <p className='text-lg tracking-widest'>WEB DEVELOPER</p>
      </div>
      <TerminalLayer title='ABOUT ME'>
        <span className='text-primary-100'>
          I'm a software engineer and a web developer. I love to create
          beautiful and functional websites using React, Next.js, and Tailwind
          CSS. I'm passionate about building user-friendly and responsive
          websites that provide a great user experience. I'm also an open-source
          enthusiast and contribute to various open-source projects. I'm
          constantly learning and improving my skills in web development and
          software engineering.
        </span>
      </TerminalLayer>
    </>
  )
}
export default MainPage
