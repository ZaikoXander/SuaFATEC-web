import { useState } from 'react'

import CommentList from './CommentList'
import CoursePhoto from '../CoursePhoto'
import CommentForm from './CommentForm'

import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'

import { cn } from '@/lib/utils'

export default function ContentScrollArea() {
  const [commentFormOpen, setCommentFormOpen] = useState(false)

  return (
    <ScrollArea className='pr-1'>
      <div className='p-3'>
        <Button
          variant='secondary'
          className='mb-3 w-full py-5 font-bold transition-all lg:hidden'
          onClick={() => setCommentFormOpen((open) => !open)}
        >
          {commentFormOpen ? 'Ver comentários' : 'Escrever um comentário'}
        </Button>
        <div className='flex justify-between transition-all'>
          <CommentList
            className={cn('transition-all', {
              'hidden lg:block': commentFormOpen,
            })}
          />
          <div
            className={cn(
              'hidden w-full flex-col items-center justify-between transition-all lg:flex lg:w-min',
              { flex: commentFormOpen },
            )}
          >
            <CoursePhoto className='hidden w-[28rem] lg:block' />
            <CommentForm />
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
