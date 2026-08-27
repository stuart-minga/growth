import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '../../lib/cn'

const textLinkVariants = cva(
  'font-sans transition-colors underline-offset-2 hover:underline',
  {
    variants: {
      tone: {
        accent: 'text-accent hover:text-accent-hover',
        muted: 'text-ink-muted no-underline hover:text-ink',
        ink: 'text-ink no-underline hover:text-ink-muted',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
      },
    },
    defaultVariants: {
      tone: 'accent',
      weight: 'normal',
    },
  },
)

type TextLinkVariants = VariantProps<typeof textLinkVariants>

type SharedProps = {
  children: ReactNode
  className?: string
} & TextLinkVariants

type InternalTextLinkProps = SharedProps &
  Omit<LinkProps, 'className' | 'children'> & {
    href?: never
  }

type ExternalTextLinkProps = SharedProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'className' | 'children' | 'href'
  > & {
    href: string
    to?: never
  }

export type TextLinkProps = InternalTextLinkProps | ExternalTextLinkProps

export function TextLink({
  children,
  className,
  tone,
  weight,
  ...props
}: TextLinkProps) {
  const classes = cn(textLinkVariants({ tone, weight }), className)

  if ('href' in props && props.href != null) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { to, ...rest } = props
  return (
    <Link to={to} className={classes} {...rest}>
      {children}
    </Link>
  )
}
