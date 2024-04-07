import { Fragment } from 'react'

import { useAtomValue } from 'jotai'

import { filteredCommentsAtom } from '@/atoms/comments'

import Filters from './Filters'
import Comment from '../Comment'

import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

export default function CommentList() {
  const filteredComments = useAtomValue(filteredCommentsAtom)

  return (
    <ScrollArea className='h-[48rem] rounded-md border p-4'>
      <Filters />
      <Separator className='my-2' />
      {filteredComments.map((comment) => {
        const lastCommentId = filteredComments.at(-1)?.id
        if (lastCommentId === comment.id) {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              studentName={comment.studentName}
              content={comment.content}
              conclusionDate={comment.conclusionDate}
              liked={comment.liked}
              quantityLikes={comment.quantityLikes}
            />
          )
        }

        return (
          <Fragment key={comment.id}>
            <Comment
              id={comment.id}
              studentName={comment.studentName}
              content={comment.content}
              conclusionDate={comment.conclusionDate}
              liked={comment.liked}
              quantityLikes={comment.quantityLikes}
            />
            <Separator className='my-2' />
          </Fragment>
        )
      })}
    </ScrollArea>
  )
}
