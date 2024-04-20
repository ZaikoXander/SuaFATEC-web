import { useAtom } from 'jotai'

import {
  ascendingOrderFilterAtom,
  descendingOrderFilterAtom,
  likeFilterAtom,
  moreRecentFilterAtom,
} from '@/atoms/commentListFilters'

import FilterButton from './FilterButton'
import { Button } from '../../ui/button'
import { Separator } from '../../ui/separator'

import { cn } from '@/lib/utils'

import { ChevronDown, ChevronUp, Heart } from 'lucide-react'

export default function Filters() {
  const [likeFilter, setLikeFilter] = useAtom(likeFilterAtom)

  return (
    <div className='flex h-7 items-center gap-2'>
      <small className='text-sm font-medium leading-none'>Filtros</small>
      <Separator orientation='vertical' className='mx-1 h-full' />
      <div className='flex w-full justify-between'>
        <div className='flex items-center gap-3'>
          <Button
            className='group flex h-min items-center bg-transparent p-0 hover:bg-transparent'
            onClick={() => setLikeFilter(!likeFilter)}
          >
            <Heart
              className={cn(
                'rounded-full group-hover:stroke-red-600',
                'p-1 transition-colors duration-500',
                likeFilter
                  ? 'fill-red-600 stroke-red-600'
                  : 'fill-transparent stroke-gray-500',
              )}
              size={28}
            />
          </Button>
          <FilterButton filterAtom={moreRecentFilterAtom}>
            mais recentes
          </FilterButton>
        </div>
        <div className='flex items-center gap-3'>
          <FilterButton
            filterAtom={descendingOrderFilterAtom}
            icon={ChevronUp}
          />
          <FilterButton
            filterAtom={ascendingOrderFilterAtom}
            icon={ChevronDown}
          />
        </div>
      </div>
    </div>
  )
}
