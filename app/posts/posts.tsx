import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PostMetadata } from '@/lib/posts'

export const Posts = ({ data }: { data: PostMetadata[] }) => {
  return (
    <section id='posts'>
      <Card>
        <CardHeader>
          <CardTitle>POSTS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-8'>
            coming soon
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
