import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'font-sans text-sm tracking-wide no-underline',
    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
  ].join(' ')

export function SiteHeader() {
  return (
    <header className="flex items-baseline justify-between gap-6 border-b border-rule py-8">
      <NavLink
        to="/"
        className="font-serif text-xl font-semibold tracking-tight text-ink no-underline"
      >
        Growth
      </NavLink>
      <nav className="flex gap-5" aria-label="Primary">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/blog" className={linkClass}>
          Blog
        </NavLink>
      </nav>
    </header>
  )
}
