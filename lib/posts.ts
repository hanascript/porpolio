import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export type Post = {
  metadata: PostMetadata
  content: string
}

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug?: string
}

const rootDirectory = path.join(process.cwd(), 'data', 'posts')

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}`)
    const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' })

    const { data, content } = matter(fileContents)

    return {
      metadata: { ...data, slug },
      content
    }
  } catch (error) {
    return null
  }
}

export async function getAllPosts(limit?: number): Promise<PostMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const posts = files.map(file => getPostMetadata(file)).sort((a, b) => {
    if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
      return 1 
    } else {
      return -1
    }
  })

  if(limit) {
    return posts.slice(0, limit)
  }

  return posts
}

export function getPostMetadata(file: string): PostMetadata {
  const slug = file.replace('\/.mdx$/', '')
  const filePath = path.join(rootDirectory, file)
  const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data } = matter(fileContents)

  return {
    ...data,
    slug
  }
}
