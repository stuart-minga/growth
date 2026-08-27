import type { ReactNode } from 'react'

type PageProps = {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-6">
      {children}
    </div>
  )
}
