import type { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface SmallProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export default function Small({ children, className }: SmallProps) {
  return (
    <small className={cn('text-sm font-medium leading-none', className)}>
      {children}
    </small>
  )
}
