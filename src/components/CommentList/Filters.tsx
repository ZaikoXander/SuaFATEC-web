import { useAtom } from 'jotai'

import {
  ascendingOrderFilterAtom,
  descendingOrderFilterAtom,
  likeFilterAtom,
  moreRecentFilterAtom,
} from '@/atoms/commentListFilters'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

import { cn } from '@/lib/utils'

import { ChevronDown, ChevronUp, Heart } from 'lucide-react'

export default function Filters() {
  const [likeFilter, setLikeFilter] = useAtom(likeFilterAtom)
  const [moreRecentFilter, setMoreRecentFilter] = useAtom(moreRecentFilterAtom)
  const [descendingOrderFilter, setDescendingOrderFilter] = useAtom(
    descendingOrderFilterAtom,
  )
  const [ascendingOrderFilter, setAscendingOrderFilter] = useAtom(
    ascendingOrderFilterAtom,
  )

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
          <Button
            className={cn(
              'flex h-min items-center bg-transparent p-0',
              'transition-colors duration-500 hover:bg-transparent',
              'hover:text-red-600',
              moreRecentFilter ? 'text-red-600' : 'text-gray-500',
            )}
            onClick={() => setMoreRecentFilter(!moreRecentFilter)}
          >
            mais recentes
          </Button>
        </div>
        <div className='flex items-center gap-3'>
          <Button
            className={cn(
              'flex h-min items-center bg-transparent p-0',
              'transition-colors duration-500 hover:bg-transparent',
              'hover:text-red-600',
              descendingOrderFilter ? 'text-red-600' : 'text-gray-500',
            )}
            onClick={() => setDescendingOrderFilter(!descendingOrderFilter)}
          >
            <ChevronUp />
          </Button>
          <Button
            className={cn(
              'flex h-min items-center bg-transparent p-0',
              'transition-colors duration-500 hover:bg-transparent',
              'hover:text-red-600',
              ascendingOrderFilter ? 'text-red-600' : 'text-gray-500',
            )}
            onClick={() => setAscendingOrderFilter(!ascendingOrderFilter)}
          >
            <ChevronDown />
          </Button>
        </div>
      </div>
    </div>
  )
}
