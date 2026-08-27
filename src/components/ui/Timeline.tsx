import type { Milestone } from '../../../content/milestones'
import { formatDate } from '../../lib/formatDate'
import { cn } from '../../lib/cn'

export type TimelineItem = Milestone

type TimelineProps = {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <ol className={cn('relative m-0 list-none border-l border-rule p-0', className)}>
      {items.map((item, index) => (
        <li
          key={item.id}
          className={cn('relative pl-6', index === 0 ? 'pb-5 pt-0' : 'py-5 last:pb-0')}
        >
          <span
            className={cn(
              'absolute left-0 size-2.5 -translate-x-1/2 rounded-full border-2 border-paper',
              index === 0 ? 'top-1.5' : 'top-6',
              item.achieved ? 'bg-accent' : 'bg-rule-strong',
            )}
            aria-hidden="true"
          />
          <time
            dateTime={item.date}
            className="block font-sans text-xs tracking-wide text-ink-faint"
          >
            {formatDate(item.date)}
          </time>
          <p
            className={cn(
              'mt-1 font-serif text-lg font-semibold tracking-tight',
              item.achieved ? 'text-ink' : 'text-ink-muted',
            )}
          >
            {item.title}
          </p>
          {item.description ? (
            <p className="mt-1 max-w-prose text-sm leading-relaxed text-ink-muted">
              {item.description}
            </p>
          ) : null}
          <span className="sr-only">
            {item.achieved ? 'Achieved' : 'Not yet achieved'}
          </span>
        </li>
      ))}
    </ol>
  )
}
