import { Prose } from '../components/ui/Prose'

export function Home() {
  return (
    <main className="py-section">
      <Prose>
        <h1>Current focus</h1>
        <p className="text-lg text-ink-muted">
          Standing up the journal and naming the first focus. Goals, milestones,
          and the latest writing will live here.
        </p>
      </Prose>
    </main>
  )
}
