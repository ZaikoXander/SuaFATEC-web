'use client'

import { useEffect, Fragment, useState } from 'react'

import { useAtom } from 'jotai'

import { notApprovedCommentsAtom } from '@/atoms/notApprovedComments'

import request from '@/lib/request'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import { CommentsScrollAreaFeedbackMessage as FeedbackMessage } from '@/components/CommentsScrollAreaFeedbackMessage'

import Comment from './Comment'

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

        const comments = await request.comments.notApproved(adminAuthToken)

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
  const lastCommentIndex = notApprovedComments.length - 1

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
            const isNotLastComment = index !== lastCommentIndex

            return (
              <Fragment key={id}>
                <Comment
                  id={id}
                  studentName={studentName}
                  content={content}
                  conclusionDate={conclusionDate}
                />
                {isNotLastComment && <Separator className='my-2' />}
              </Fragment>
            )
          },
        )
      )}
    </ScrollArea>
  )
}
