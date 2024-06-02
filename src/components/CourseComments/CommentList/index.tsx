'use client'

import { Fragment, useEffect } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'

import {
  type Comment as CommentData,
  commentsAtom,
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
import api from '@/lib/api'

interface FetchCourseOfferingCommentsResponse {
  comments: CommentData[]
}

export default function CommentList() {
  const filteredCourseOfferingComments = useAtomValue(
    filteredCourseOfferingCommentsAtom,
  )
  const selectedCourseOffering = useAtomValue(selectedCourseOfferingAtom)
  const setComments = useSetAtom(commentsAtom)
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
          `/comments/${selectedCourseOffering.id}`,
        )

        setComments(comments)
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
    setComments,
    addFetchedCourseOfferingIdOnCourseOfferingComments,
  ])

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
