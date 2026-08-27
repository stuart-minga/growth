import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { TextLink } from '../ui/TextLink'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'font-sans text-sm tracking-wide no-underline transition-colors',
    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
  )

export function SiteHeader() {
  return (
    <header className="flex items-baseline justify-between gap-6 border-b border-rule py-8">
      <TextLink
        to="/"
        tone="ink"
        weight="medium"
        className="font-serif text-xl font-semibold tracking-tight no-underline hover:no-underline"
      >
        Growth
      </TextLink>
      <nav className="flex gap-5" aria-label="Primary">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/blog" className={navLinkClass}>
          Blog
        </NavLink>
      </nav>
    </header>
  )
}
