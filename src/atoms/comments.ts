import { atom } from 'jotai'

import {
  ascendingOrderFilterAtom,
  likeFilterAtom,
  moreRecentFilterAtom,
} from './commentListFilters'
import { selectedCourseOfferingAtom } from './courseOfferings'

import { compareAsc, parse } from 'date-fns'

export interface Comment {
  id: number
  courseOfferingId: number
  studentName: string
  content: string
  quantityLikes: number
  conclusionDate: string
  liked: boolean
  approved: boolean
}

const commentsAtom = atom<Comment[]>([])

const addCommentsAtom = atom(null, (get, set, newComments: Comment[]) => {
  const comments = get(commentsAtom)

  set(commentsAtom, [...comments, ...newComments])
})

const courseOfferingCommentsAtom = atom<Comment[] | undefined>((get) => {
  const comments = get(commentsAtom)
  const selectedCourseOffering = get(selectedCourseOfferingAtom)

  return comments?.filter(
    (comment) => comment.courseOfferingId === selectedCourseOffering?.id,
  )
})

const filteredCourseOfferingCommentsAtom = atom<Comment[]>((get) => {
  const courseOfferingComments = [...(get(courseOfferingCommentsAtom) ?? [])]

  const likeFilter = get(likeFilterAtom)
  let sortFunction
  const moreRecentFilter = get(moreRecentFilterAtom)

  if (likeFilter) {
    sortFunction = (a: Comment, b: Comment) => a.quantityLikes - b.quantityLikes
  } else if (moreRecentFilter) {
    sortFunction = (a: Comment, b: Comment) =>
      compareAsc(
        parse(a.conclusionDate, 'dd/MM/yyyy', new Date()),
        parse(b.conclusionDate, 'dd/MM/yyyy', new Date()),
      )
  }

  const ascendingOrderFilter = get(ascendingOrderFilterAtom)

  if (sortFunction) {
    const orderMultiplier = ascendingOrderFilter ? 1 : -1
    courseOfferingComments.sort((a, b) => orderMultiplier * sortFunction(a, b))
  } else if (ascendingOrderFilter) courseOfferingComments.reverse()

  return courseOfferingComments
})

const toggleCommentLikeByIdAtom = atom(null, (get, set, commentId: number) => {
  const comments = get(commentsAtom)

  const updatedComments = comments?.map((comment) => {
    if (comment.id === commentId) {
      return {
        ...comment,
        quantityLikes: comment.liked
          ? comment.quantityLikes - 1
          : comment.quantityLikes + 1,
        liked: !comment.liked,
      }
    }

    return comment
  })

  set(commentsAtom, updatedComments)
})

export {
  commentsAtom,
  addCommentsAtom,
  filteredCourseOfferingCommentsAtom,
  toggleCommentLikeByIdAtom,
}
