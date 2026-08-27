import { cva } from 'class-variance-authority'
import { cn } from '../../lib/cn'

export type GoalStatus = 'not-started' | 'in-progress' | 'done'

const statusVariants = cva(
  'inline-flex items-center gap-1.5 font-sans text-xs font-medium tracking-wide',
  {
    variants: {
      status: {
        'not-started': 'text-ink-faint',
        'in-progress': 'text-accent',
        done: 'text-ink-muted',
      },
    },
  },
)

const statusDotVariants = cva('size-1.5 shrink-0 rounded-full', {
  variants: {
    status: {
      'not-started': 'bg-rule-strong',
      'in-progress': 'bg-accent',
      done: 'bg-ink-muted',
    },
  },
})

function statusLabel(status: GoalStatus): string {
  switch (status) {
    case 'not-started':
      return 'Not started'
    case 'in-progress':
      return 'In progress'
    case 'done':
      return 'Done'
    default: {
      const _exhaustive: never = status
      return _exhaustive
    }
  }
}

type StatusProps = {
  status: GoalStatus
  className?: string
}

export function Status({ status, className }: StatusProps) {
  return (
    <span className={cn(statusVariants({ status }), className)}>
      <span className={statusDotVariants({ status })} aria-hidden="true" />
      {statusLabel(status)}
    </span>
  )
}
