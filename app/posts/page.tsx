import { getAllPosts } from '@/lib/posts'
import { Hero } from './hero'
import { Posts } from './posts'

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className='space-y-2'>
      <Hero />
      <Posts data={posts} />
    </div>
  )
}
