import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ProseProps = {
  children: ReactNode
  as?: 'article' | 'div' | 'section'
} & Omit<HTMLAttributes<HTMLElement>, 'children'>

export function Prose({
  children,
  as: Component = 'div',
  className,
  ...props
}: ProseProps) {
  return (
    <Component className={cn('prose-growth', className)} {...props}>
      {children}
    </Component>
  )
}
