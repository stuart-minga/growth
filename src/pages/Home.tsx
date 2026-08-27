import { goals } from '../../content/goals'
import { milestones } from '../../content/milestones'
import { Status } from '../components/ui/Status'
import { TextLink } from '../components/ui/TextLink'
import { Timeline } from '../components/ui/Timeline'
import { Prose } from '../components/ui/Prose'
import { getLatestPosts } from '../content/posts'
import { formatDate } from '../lib/formatDate'

export function Home() {
  const latest = getLatestPosts(3)

  return (
    <main className="flex flex-col gap-section py-section">
      <Prose>
        <h1>Current focus</h1>
        <p className="text-lg text-ink-muted">
          Standing up the journal and naming the first focus. Write weekly,
          keep goals honest, and let the milestones mark the year.
        </p>
      </Prose>

      <section aria-labelledby="goals-heading">
        <h2
          id="goals-heading"
          className="mb-6 font-serif text-2xl font-semibold tracking-tight text-ink"
        >
          Goals
        </h2>
        <ul className="m-0 flex list-none flex-col gap-5 p-0">
          {goals.map((goal) => (
            <li key={goal.id} className="max-w-prose">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="font-serif text-lg font-semibold tracking-tight text-ink">
                  {goal.title}
                </p>
                <Status status={goal.status} />
              </div>
              {goal.description ? (
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {goal.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="milestones-heading">
        <h2
          id="milestones-heading"
          className="mb-6 font-serif text-2xl font-semibold tracking-tight text-ink"
        >
          Milestones
        </h2>
        <Timeline items={milestones} />
      </section>

      <section aria-labelledby="latest-heading">
        <h2
          id="latest-heading"
          className="mb-6 font-serif text-2xl font-semibold tracking-tight text-ink"
        >
          Latest writing
        </h2>
        {latest.length === 0 ? (
          <p className="text-ink-muted">No posts yet.</p>
        ) : (
          <ul className="m-0 flex list-none flex-col gap-5 p-0">
            {latest.map((post) => (
              <li key={post.slug} className="max-w-prose">
                <time
                  dateTime={post.date}
                  className="block font-sans text-xs tracking-wide text-ink-faint"
                >
                  {formatDate(post.date)}
                </time>
                <p className="mt-1 font-serif text-lg font-semibold tracking-tight">
                  <TextLink to={`/blog/${post.slug}`} tone="ink" weight="medium">
                    {post.title}
                  </TextLink>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {post.summary}
                </p>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6">
          <TextLink to="/blog" tone="muted">
            All posts →
          </TextLink>
        </p>
      </section>
    </main>
  )
}
