import { useParams } from 'react-router-dom'

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <main className="py-12">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink">
        {slug ?? 'Post'}
      </h1>
      <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-muted">
        Markdown rendering for this slug will land with the content pipeline.
      </p>
    </main>
  )
}
