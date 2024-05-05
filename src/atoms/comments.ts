import { atom } from 'jotai'

import {
  ascendingOrderFilterAtom,
  likeFilterAtom,
  moreRecentFilterAtom,
} from './commentListFilters'
import { selectedCourseOfferingAtom } from './courseOfferings'

import { compareAsc, parse } from 'date-fns'

interface Comment {
  id: number
  courseOfferingId: number
  studentName: string
  content: string
  quantityLikes: number
  conclusionDate: string
  liked: boolean
}

const commentsAtom = atom<Comment[]>([
  {
    id: 0,
    courseOfferingId: 2,
    studentName: 'Pedro Henrique',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus eligendi amet nihil et perferendis minus rerum reiciendis recusandae, similique laudantium at, nisi voluptatibus distinctio illo exercitationem provident labore ex?',
    quantityLikes: 437,
    conclusionDate: '01/03/2024',
    liked: false,
  },
  {
    id: 1,
    courseOfferingId: 1,
    studentName: 'Roberto Carlos',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.',
    quantityLikes: 56,
    conclusionDate: '20/06/2019',
    liked: true,
  },
  {
    id: 2,
    courseOfferingId: 2,
    studentName: 'Paulo Ricardo',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.',
    quantityLikes: 269,
    conclusionDate: '10/10/2021',
    liked: false,
  },
  {
    id: 3,
    courseOfferingId: 1,
    studentName: 'Paulo Ricardo',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.',
    quantityLikes: 269,
    conclusionDate: '10/10/2021',
    liked: false,
  },
  {
    id: 4,
    courseOfferingId: 2,
    studentName: 'Paulo Ricardo',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.',
    quantityLikes: 269,
    conclusionDate: '10/10/2021',
    liked: false,
  },
])

const courseOfferingCommentsAtom = atom<Comment[]>((get) => {
  const comments = get(commentsAtom)
  const selectedCourseOffering = get(selectedCourseOfferingAtom)

  return comments.filter(
    (comment) => comment.courseOfferingId === selectedCourseOffering?.id,
  )
})

const filteredCourseOfferingCommentsAtom = atom<Comment[]>((get) => {
  const courseOfferingComments = [...get(courseOfferingCommentsAtom)]

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

  const updatedComments = comments.map((comment) => {
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
  filteredCourseOfferingCommentsAtom,
  toggleCommentLikeByIdAtom,
}
