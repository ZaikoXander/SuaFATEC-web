import { ReactNode } from 'react'

import { useAtom, type WritableAtom } from 'jotai'

import { Button } from '../ui/button'

import { cn } from '@/lib/utils'

import type { LucideIcon } from 'lucide-react'

type FilterButtonProps = {
  filterAtom: WritableAtom<boolean, [update: boolean], void>
} & (
  | { children?: ReactNode; icon?: never }
  | { children?: never; icon?: LucideIcon }
)

export default function FilterButton({
  filterAtom,
  children,
  icon: Icon,
}: FilterButtonProps) {
  const [filter, setFilter] = useAtom(filterAtom)

  return (
    <Button
      className={cn(
        'flex h-min items-center bg-transparent p-0',
        'transition-colors duration-500 hover:bg-transparent',
        'hover:text-red-600',
        filter ? 'text-red-600' : 'text-gray-500',
      )}
      onClick={() => setFilter(!filter)}
    >
      {children || (Icon && <Icon />)}
    </Button>
  )
}
