import { Separator } from '@/components/ui/separator'

import NotApprovedCommentsScrollArea from './NotApprovedCommentsScrollArea'

export default function NotApprovedCommentList() {
  return (
    <div className='h-full w-[22.125rem] rounded-md border shadow-sm'>
      <div className='mx-4 my-3 flex h-7 items-center gap-2'>
        <div className='text-lg font-semibold'>Novos comentários</div>
      </div>
      <Separator className='mt-2' />
      <NotApprovedCommentsScrollArea />
    </div>
  )
}
