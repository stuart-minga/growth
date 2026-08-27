import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-sans font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-paper-elevated hover:bg-accent-hover',
        secondary:
          'border border-rule-strong bg-transparent text-ink hover:border-ink-muted hover:bg-paper-elevated',
        ghost: 'bg-transparent text-ink-muted hover:bg-accent-soft hover:text-ink',
      },
      size: {
        sm: 'rounded-sm px-3 py-1.5 text-sm',
        md: 'rounded-sm px-4 py-2 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export function Button({
  className,
  variant,
  size,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
