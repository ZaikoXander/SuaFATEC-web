'use client'

import { Fragment, useEffect } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'

import api from '@/lib/api'

import {
  addCommentsAtom,
  type Comment as CommentData,
  filteredCourseOfferingCommentsAtom,
} from '@/atoms/comments'
import { selectedCourseOfferingAtom } from '@/atoms/courseOfferings'
import {
  fetchedCourseOfferingsIdsOnCourseOfferingCommentsAtom,
  addFetchedCourseOfferingIdOnCourseOfferingCommentsAtom,
} from '@/atoms/fetchedData'

import Filters from './Filters'
import Comment from '../../Comment'

import { ScrollArea } from '../../ui/scroll-area'
import { Separator } from '../../ui/separator'
import { cn } from '@/lib/utils'

interface FetchCourseOfferingCommentsResponse {
  comments: CommentData[]
}

export default function CommentList({ className }: { className?: string }) {
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

  useEffect(() => {
    async function fetchData() {
      try {
        if (
          !selectedCourseOffering ||
          fetchedCourseOfferingsIdsOnCourseOfferingComments.includes(
            selectedCourseOffering.id,
          )
        )
          return

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
      }
    }

    fetchData()
  }, [
    selectedCourseOffering,
    fetchedCourseOfferingsIdsOnCourseOfferingComments,
    addComments,
    addFetchedCourseOfferingIdOnCourseOfferingComments,
  ])

  return (
    <div
      className={cn(
        'h-full w-full rounded-md border shadow-sm lg:w-auto',
        className,
      )}
    >
      <Filters />
      <Separator className='mt-2' />
      <ScrollArea className='h-[36rem] px-4 pb-0 pt-2 lg:h-[46rem]'>
        {filteredCourseOfferingComments.map(
          ({
            id,
            studentName,
            content,
            conclusionDate,
            liked,
            quantityLikes,
          }) => {
            const lastCommentId = filteredCourseOfferingComments.at(-1)?.id
            if (lastCommentId === id) {
              return (
                <Comment
                  key={id}
                  id={id}
                  studentName={studentName}
                  content={content}
                  conclusionDate={conclusionDate}
                  liked={liked}
                  quantityLikes={quantityLikes}
                />
              )
            }

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
                <Separator className='my-2' />
              </Fragment>
            )
          },
        )}
      </ScrollArea>
    </div>
  )
}
