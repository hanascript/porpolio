import { Navbar } from '@/components/navbar'
import { Typewrite } from '@/components/ui/typewrite'

export const Hero = () => {
  return (
    <div className='mx-auto max-w-screen-md'>
      <div className='flex flex-col gap-2'>
        <div className='justify-between space-y-2 md:flex'>
          <div className='flex flex-col leading-3'>
            <p className='text-shadow text-6xl font-bold'>POSTS</p>
          </div>
          <Navbar type='grid' />
        </div>
      </div>
    </div>
  )
}
