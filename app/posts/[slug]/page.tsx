import { ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXContent } from '@/components/mdx-content'

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, summary, image, author, publishedAt } = metadata

  return (
    <section >
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

        <main className='prose dark:prose-invert mt-16 max-w-none'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}
