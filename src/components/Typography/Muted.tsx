import { cn } from '@/lib/utils'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'

interface MutedProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export default function Muted({ children, className }: MutedProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  )
}
