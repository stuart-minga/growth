import matter from 'gray-matter'

export type PostFrontmatter = {
  title: string
  date: string
  summary: string
  tags: string[]
  draft: boolean
}

export type Post = PostFrontmatter & {
  slug: string
  body: string
}

const rawPosts = import.meta.glob('../../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function slugFromPath(path: string): string {
  const fileName = path.split('/').pop() ?? path
  return fileName.replace(/\.md$/, '')
}

function parseFrontmatter(data: Record<string, unknown>): PostFrontmatter {
  const title = data.title
  const date = normalizeDate(data.date)
  const summary = data.summary
  const tags = data.tags
  const draft = data.draft

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Post frontmatter requires a non-empty string title')
  }
  if (date === undefined) {
    throw new Error(`Post "${title}" frontmatter requires a string date`)
  }
  if (typeof summary !== 'string') {
    throw new Error(`Post "${title}" frontmatter requires a string summary`)
  }
  if (
    !Array.isArray(tags) ||
    tags.some((tag) => typeof tag !== 'string')
  ) {
    throw new Error(`Post "${title}" frontmatter requires a string[] tags`)
  }
  if (typeof draft !== 'boolean') {
    throw new Error(`Post "${title}" frontmatter requires a boolean draft`)
  }

  return {
    title,
    date,
    summary,
    tags,
    draft,
  }
}

/** gray-matter/js-yaml may parse bare dates as Date objects. */
function normalizeDate(value: unknown): string | undefined {
  if (typeof value === 'string' && value.length > 0) {
    return value
  }
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const year = value.getUTCFullYear()
    const month = String(value.getUTCMonth() + 1).padStart(2, '0')
    const day = String(value.getUTCDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  return undefined
}

function parsePost(path: string, raw: string): Post {
  const { data, content } = matter(raw)
  const frontmatter = parseFrontmatter(data)

  return {
    ...frontmatter,
    slug: slugFromPath(path),
    body: content.trim(),
  }
}

function compareByDateDesc(a: Post, b: Post): number {
  return b.date.localeCompare(a.date)
}

const includeDrafts = import.meta.env.DEV

export const posts: Post[] = Object.entries(rawPosts)
  .map(([path, raw]) => parsePost(path, raw))
  .filter((post) => includeDrafts || !post.draft)
  .sort(compareByDateDesc)

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getLatestPosts(count: number): Post[] {
  return posts.slice(0, count)
}
