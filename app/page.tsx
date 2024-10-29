import { LinkMinimap } from '@/components/link-minimap'
import { Contact } from '@/features/contact'
import { Header } from '@/features/header'
import { Hero } from '@/features/hero'
import { Projects } from '@/features/projects'
import { Skills } from '@/features/skills'

export default function Home() {
  return (
    <main className='relative mx-auto flex w-11/12 flex-col pb-40 sm:w-3/4 lg:w-[55%]'>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <LinkMinimap />
    </main>
  )
}
