import { useParams } from 'react-router-dom'
import { Prose } from '../components/ui/Prose'
import { TextLink } from '../components/ui/TextLink'

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <main className="py-section">
      <p className="mb-6 text-sm">
        <TextLink to="/blog" tone="muted">
          ← Blog
        </TextLink>
      </p>
      <Prose as="article">
        <h1>{slug ?? 'Post'}</h1>
        <p className="text-lg text-ink-muted">
          Markdown rendering for this slug will land with the content pipeline.
        </p>
      </Prose>
    </main>
  )
}
