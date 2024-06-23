import { Fragment, useEffect, useState } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'

import api from '@/lib/api'

import { filteredCourseOfferingCommentsAtom } from '@/atoms/comments'
import { selectedCourseOfferingAtom } from '@/atoms/courseOfferings'
import { addCommentsAtom, type Comment as CommentData } from '@/atoms/comments'
import {
  fetchedCourseOfferingsIdsOnCourseOfferingCommentsAtom,
  addFetchedCourseOfferingIdOnCourseOfferingCommentsAtom,
} from '@/atoms/fetchedData'

import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

import Comment from '@/components/Comment'
import CommentsScrollAreaFeedbackMessage from '@/components/CommentsScrollAreaFeedbackMessage'

interface FetchCourseOfferingCommentsResponse {
  comments: CommentData[]
}

export default function CommentsScrollArea() {
  const filteredCourseOfferingComments = useAtomValue(
    filteredCourseOfferingCommentsAtom,
  )
  const selectedCourseOffering = useAtomValue(selectedCourseOfferingAtom)
  const addComments = useSetAtom(addCommentsAtom)
  const fetchedCourseOfferingsIdsOnCourseOfferingComments = useAtomValue(
    fetchedCourseOfferingsIdsOnCourseOfferingCommentsAtom,
  )
  const addFetchedCourseOfferingIdOnCourseOfferingComments = useSetAtom(
    addFetchedCourseOfferingIdOnCourseOfferingCommentsAtom,
  )
  const [loadingComments, setLoadingComments] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        if (
          !selectedCourseOffering ||
          fetchedCourseOfferingsIdsOnCourseOfferingComments.includes(
            selectedCourseOffering.id,
          )
        ) {
          setLoadingComments(false)
          return
        }

        const {
          data: { comments },
        } = await api.get<FetchCourseOfferingCommentsResponse>(
          `/comments/course-offering/${selectedCourseOffering.id}`,
        )

        addComments(comments)
        addFetchedCourseOfferingIdOnCourseOfferingComments(
          selectedCourseOffering.id,
        )
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingComments(false)
      }
    }

    fetchData()
  }, [
    selectedCourseOffering,
    fetchedCourseOfferingsIdsOnCourseOfferingComments,
    addComments,
    addFetchedCourseOfferingIdOnCourseOfferingComments,
  ])

  const noComments = filteredCourseOfferingComments.length === 0

  function feedBackMessageContent(): string | undefined {
    if (loadingComments) {
      return 'Carregando comentários...'
    } else if (noComments) {
      return 'Ainda não há comentários 🗨️.'
    }
  }

  return (
    <ScrollArea className='h-[36rem] px-4 pb-0 pt-2 lg:h-[46rem]'>
      {loadingComments || noComments ? (
        <CommentsScrollAreaFeedbackMessage>
          {feedBackMessageContent()}
        </CommentsScrollAreaFeedbackMessage>
      ) : (
        filteredCourseOfferingComments.map(
          (
            { id, studentName, content, conclusionDate, liked, quantityLikes },
            index,
          ) => {
            const isLastComment =
              index === filteredCourseOfferingComments.length - 1

            return (
              <Fragment key={id}>
                <Comment
                  id={id}
                  studentName={studentName}
                  content={content}
                  conclusionDate={conclusionDate}
                  liked={liked}
                  quantityLikes={quantityLikes}
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
