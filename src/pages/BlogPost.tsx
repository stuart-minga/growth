import { Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prose } from '../components/ui/Prose'
import { TextLink } from '../components/ui/TextLink'
import { getPostBySlug } from '../content/posts'
import { formatDate } from '../lib/formatDate'

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <main className="py-section">
      <p className="mb-6 text-sm">
        <TextLink to="/blog" tone="muted">
          ← Blog
        </TextLink>
      </p>
      <Prose as="article">
        <header className="mb-8">
          <time
            dateTime={post.date}
            className="block font-sans text-xs tracking-wide text-ink-faint"
          >
            {formatDate(post.date, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="mt-2">{post.title}</h1>
          <p className="text-lg text-ink-muted">{post.summary}</p>
          {post.tags.length > 0 ? (
            <p className="mt-3 font-sans text-xs tracking-wide text-ink-faint">
              {post.tags.join(' · ')}
            </p>
          ) : null}
        </header>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </Prose>
    </main>
  )
}
