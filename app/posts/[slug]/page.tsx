import { ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { MDXContent } from '@/components/mdx-content'
import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  console.log(post)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, summary, image, author, publishedAt } = metadata

  return (
    <section>
      <div className='container'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='size-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='overlfow-hidden relative mb-6 h-96 w-full rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 max-w-none dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )

}
