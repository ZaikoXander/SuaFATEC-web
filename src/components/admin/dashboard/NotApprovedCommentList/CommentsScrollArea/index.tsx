'use client'

import { useEffect, Fragment, useState } from 'react'

import { useAtom } from 'jotai'
import {
  notApprovedCommentsAtom,
  type Comment as CommentData,
} from '@/atoms/admin'

import commentsApi from '@/lib/api/commentsApi'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import { CommentsScrollAreaFeedbackMessage as FeedbackMessage } from '@/components/CommentsScrollAreaFeedbackMessage'

import Comment from './Comment'

interface NotApprovedCommentsResponse {
  comments: CommentData[]
}

export default function CommentsScrollArea() {
  const [notApprovedComments, setNotApprovedCommentsAtom] = useAtom(
    notApprovedCommentsAtom,
  )
  const [loadingComments, setLoadingComments] = useState(true)

  useEffect(() => {
    const adminAuthToken = localStorage.getItem('adminAuthToken')

    async function fetchNotApprovedComments() {
      try {
        if (!adminAuthToken) return

        const {
          data: { comments },
        } = await commentsApi.get<NotApprovedCommentsResponse>('not-approved', {
          headers: { Authorization: 'Bearer ' + adminAuthToken },
        })

        setNotApprovedCommentsAtom(comments)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingComments(false)
      }
    }

    fetchNotApprovedComments()
  }, [setNotApprovedCommentsAtom])

  const noComments = notApprovedComments.length === 0

  return (
    <ScrollArea className='h-[36rem] px-4 py-2'>
      {loadingComments || noComments ? (
        <FeedbackMessage
          loadingComments={loadingComments}
          noComments={noComments}
        />
      ) : (
        notApprovedComments.map(
          ({ id, studentName, content, conclusionDate }, index) => {
            const isLastComment = index === notApprovedComments.length - 1

            return (
              <Fragment key={id}>
                <Comment
                  id={id}
                  studentName={studentName}
                  content={content}
                  conclusionDate={conclusionDate}
                />
                {!isLastComment && <Separator className='my-2' />}
              </Fragment>
            )
          },
        )
      )}
    </ScrollArea>
  )
}
