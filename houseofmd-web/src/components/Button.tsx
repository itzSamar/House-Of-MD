import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ')
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: PropsWithChildren<{
  to: string
  variant?: Variant
  size?: Size
  className?: string
}>) {
  return (
    <Link
      to={to}
      className={cx(buttonBase, buttonVariant[variant], buttonSize[size], className)}
    >
      {children}
    </Link>
  )
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
    size?: Size
  }
>) {
  return (
    <button
      className={cx(buttonBase, buttonVariant[variant], buttonSize[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-50'

const buttonVariant: Record<Variant, string> = {
  primary:
    'bg-amber-200/95 text-neutral-950 hover:bg-amber-200 shadow-[0_12px_30px_-18px_rgba(245,200,90,0.75)]',
  secondary:
    'bg-white/5 text-neutral-100 ring-1 ring-white/10 hover:bg-white/8 hover:ring-white/15',
  ghost: 'text-neutral-200 hover:bg-white/5',
}

const buttonSize: Record<Size, string> = {
  sm: 'h-10 text-sm',
  md: 'h-11 text-sm',
}

