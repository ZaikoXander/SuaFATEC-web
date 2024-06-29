import { Fragment, useEffect, useState } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'

import request from '@/lib/request'

import { filteredCourseOfferingCommentsAtom } from '@/atoms/comments'
import { selectedCourseOfferingAtom } from '@/atoms/courseOfferings'
import { addCommentsAtom } from '@/atoms/comments'
import {
  fetchedCourseOfferingsIdsOnCourseOfferingCommentsAtom,
  addFetchedCourseOfferingIdOnCourseOfferingCommentsAtom,
} from '@/atoms/fetchedData'

import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

import { CommentsScrollAreaFeedbackMessage as FeedbackMessage } from '@/components/CommentsScrollAreaFeedbackMessage'

import Comment from './Comment'

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

        const comments = await request.comments.from.courseOffering(
          selectedCourseOffering.id,
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
  const lastCommentIndex = filteredCourseOfferingComments.length - 1

  return (
    <ScrollArea className='h-[36rem] px-4 pb-0 pt-2 lg:h-[46rem]'>
      {loadingComments || noComments ? (
        <FeedbackMessage
          loadingComments={loadingComments}
          noComments={noComments}
        />
      ) : (
        filteredCourseOfferingComments.map(
          (
            { id, studentName, content, conclusionDate, liked, quantityLikes },
            index,
          ) => {
            const isNotLastComment = index !== lastCommentIndex

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
                {isNotLastComment && <Separator className='my-2' />}
              </Fragment>
            )
          },
        )
      )}
    </ScrollArea>
  )
}
