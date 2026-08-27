import { TextLink } from '../components/ui/TextLink'
import { Prose } from '../components/ui/Prose'
import { posts } from '../content/posts'
import { formatDate } from '../lib/formatDate'

export function BlogIndex() {
  return (
    <main className="py-section">
      <Prose>
        <h1>Blog</h1>
        <p className="text-lg text-ink-muted">
          Chronological writing from the journal.
        </p>
      </Prose>

      {posts.length === 0 ? (
        <p className="mt-10 text-ink-muted">No posts yet.</p>
      ) : (
        <ul className="mt-10 m-0 flex list-none flex-col gap-8 p-0">
          {posts.map((post) => (
            <li key={post.slug} className="max-w-prose">
              <time
                dateTime={post.date}
                className="block font-sans text-xs tracking-wide text-ink-faint"
              >
                {formatDate(post.date)}
              </time>
              <p className="mt-1 font-serif text-xl font-semibold tracking-tight">
                <TextLink to={`/blog/${post.slug}`} tone="ink" weight="medium">
                  {post.title}
                </TextLink>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {post.summary}
              </p>
              {post.tags.length > 0 ? (
                <p className="mt-2 font-sans text-xs tracking-wide text-ink-faint">
                  {post.tags.join(' · ')}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
