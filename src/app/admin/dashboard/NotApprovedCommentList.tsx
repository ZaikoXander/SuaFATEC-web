'use client'

import { useEffect, Fragment } from 'react'

import { useAtom, useAtomValue } from 'jotai'
import { adminAuthTokenAtom, notApprovedCommentsAtom } from '@/atoms/admin'
import { type Comment } from '@/atoms/comments'

import api from '@/lib/api'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import NotApprovedComment from './NotApprovedComment'

interface NotApprovedCommentsResponse {
  comments: Comment[]
}

export default function NotApprovedCommentList() {
  const adminAuthToken = useAtomValue(adminAuthTokenAtom)
  const [notApprovedComments, setNotApprovedCommentsAtom] = useAtom(
    notApprovedCommentsAtom,
  )

  useEffect(() => {
    async function fetchNotApprovedComments() {
      try {
        if (!adminAuthToken) return

        const {
          data: { comments },
        } = await api.get<NotApprovedCommentsResponse>(
          'comments/not-approved',
          {
            headers: { Authorization: 'Bearer ' + adminAuthToken },
          },
        )

        setNotApprovedCommentsAtom(comments)
      } catch (error) {
        console.error(error)
      }
    }

    fetchNotApprovedComments()
  }, [adminAuthToken, setNotApprovedCommentsAtom])

  return (
    <div className='my-auto ml-auto mr-32 h-full rounded-md border shadow-sm'>
      <div className='mx-4 my-3 flex h-7 items-center gap-2'>
        <div className='text-lg font-semibold'>Novos comentários</div>
      </div>
      <Separator className='mt-2' />
      <ScrollArea className='h-[48rem] px-4 py-2'>
        {notApprovedComments.map((comment) => {
          const lastCommentId = notApprovedComments.at(-1)?.id
          if (lastCommentId === comment.id) {
            return (
              <NotApprovedComment
                key={comment.id}
                id={comment.id}
                studentName={comment.studentName}
                content={comment.content}
                conclusionDate={comment.conclusionDate}
              />
            )
          }

          return (
            <Fragment key={comment.id}>
              <NotApprovedComment
                id={comment.id}
                studentName={comment.studentName}
                content={comment.content}
                conclusionDate={comment.conclusionDate}
              />
              <Separator className='my-2' />
            </Fragment>
          )
        })}
      </ScrollArea>
    </div>
  )
}
