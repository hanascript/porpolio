import { AboutMe } from '@/components/about-me'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Container } from '@/components/ui/container'

const MainPage = () => {
  return (
    <div className='mx-auto flex flex-1 flex-col gap-16 py-12'>
      <AboutMe />
      <Projects />
      <Education />
      <Container />
    </div>
  )
}
export default MainPage
