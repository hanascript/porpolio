import { getAllPosts } from '@/lib/posts'
import { Posts } from './posts'

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className='space-y-2'>
      <Posts data={posts} />
    </div>
  )
}
