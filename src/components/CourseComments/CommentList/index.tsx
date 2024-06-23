import { cn } from '@/lib/utils'

import Filters from './Filters'
import CommentsScrollArea from './CommentsScrollArea'

import { Separator } from '../../ui/separator'

export default function CommentList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'h-full w-full rounded-md border shadow-sm lg:w-auto',
        className,
      )}
    >
      <Filters />
      <Separator className='mt-2' />
      <CommentsScrollArea />
    </div>
  )
}
