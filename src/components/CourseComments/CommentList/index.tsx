'use client'

import { Fragment } from 'react'

import { useAtomValue } from 'jotai'

import { filteredCourseOfferingCommentsAtom } from '@/atoms/comments'

import Filters from './Filters'
import Comment from '../../Comment'

import { ScrollArea } from '../../ui/scroll-area'
import { Separator } from '../../ui/separator'

export default function CommentList() {
  const filteredCourseOfferingComments = useAtomValue(
    filteredCourseOfferingCommentsAtom,
  )

  return (
    <div className='h-full rounded-md border shadow-sm'>
      <Filters />
      <Separator className='mt-2' />
      <ScrollArea className='h-[48rem] px-4 pb-0 pt-2'>
        {filteredCourseOfferingComments.map((comment) => {
          const lastCommentId = filteredCourseOfferingComments.at(-1)?.id
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
    </div>
  )
}
