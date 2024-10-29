import { TerminalLayer } from '@/components/terminal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { ArrowUpLeft } from 'lucide-react'
import Link from 'next/link'

export const Posts = ({ data }: { data: PostMetadata[] }) => {
  return (
    <section id='posts'>
      <Card>
        <CardHeader>
          <CardTitle>POSTS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-8'>
            {data.map(post => (
              <Link href={`/posts/${post.slug}`} className='group'>
                <TerminalLayer
                  title={post.title ? post.title : ''}
                  className='-top-3 text-sm'
                  key={post.slug}
                >
                  <div className='flex justify-between py-4'>
                    <span className='leading-1 text-xs text-primary-100'>
                      {post.summary}
                    </span>
                    <ArrowUpLeft className='size-4 group-hover:text-primary-100 relative -bottom-4' />
                  </div>

                  {/* {post.publishedAt && (
                    <p className='mt-1 text-sm font-light'>
                      {formatDate(post.publishedAt)}
                    </p>
                  )} */}
                </TerminalLayer>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
