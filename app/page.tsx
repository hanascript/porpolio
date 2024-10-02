import { AboutMe } from '@/components/about-me'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Container } from '@/components/ui/container'

const MainPage = () => {
  return (
    <div className='pb-10'>
      <AboutMe />
      <Projects />
      <Education />
      <Container />
    </div>
  )
}
export default MainPage
