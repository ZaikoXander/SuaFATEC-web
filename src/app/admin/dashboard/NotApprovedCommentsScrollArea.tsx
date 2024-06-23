'use client'

import { useEffect, Fragment, useState } from 'react'

import { useAtom } from 'jotai'
import { notApprovedCommentsAtom } from '@/atoms/admin'
import { type Comment } from '@/atoms/comments'

import api from '@/lib/api'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import NotApprovedComment from './NotApprovedComment'
import CommentsScrollAreaFeedbackMessage from '@/components/CommentsScrollAreaFeedbackMessage'

interface NotApprovedCommentsResponse {
  comments: Comment[]
}

export default function NotApprovedCommentsScrollArea() {
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
        } = await api.get<NotApprovedCommentsResponse>(
          'comments/not-approved',
          {
            headers: { Authorization: 'Bearer ' + adminAuthToken },
          },
        )

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

  function feedBackMessageContent(): string | undefined {
    if (loadingComments) {
      return 'Carregando comentários...'
    } else if (noComments) {
      return 'Ainda não há comentários 🗨️.'
    }
  }

  return (
    <ScrollArea className='h-[48rem] px-4 py-2'>
      {loadingComments || noComments ? (
        <CommentsScrollAreaFeedbackMessage>
          {feedBackMessageContent()}
        </CommentsScrollAreaFeedbackMessage>
      ) : (
        notApprovedComments.map(
          ({ id, studentName, content, conclusionDate }, index) => {
            const isLastComment = index === notApprovedComments.length - 1

            return (
              <Fragment key={id}>
                <NotApprovedComment
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
