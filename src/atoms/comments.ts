import { atom } from 'jotai'
import {
  ascendingOrderFilterAtom,
  likeFilterAtom,
  moreRecentFilterAtom,
} from './commentListFilters'

import { compareAsc, parse } from 'date-fns'

interface Comment {
  id: number
  studentName: string
  content: string
  quantityLikes: number
  conclusionDate: string
  liked: boolean
}

const initialComments: Comment[] = [
  {
    id: 0,
    studentName: 'Pedro Henrique',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus eligendi amet nihil et perferendis minus rerum reiciendis recusandae, similique laudantium at, nisi voluptatibus distinctio illo exercitationem provident labore ex?',
    quantityLikes: 437,
    conclusionDate: '01/03/2024',
    liked: false,
  },
  {
    id: 1,
    studentName: 'Roberto Carlos',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.',
    quantityLikes: 56,
    conclusionDate: '20/06/2019',
    liked: true,
  },
  {
    id: 2,
    studentName: 'Paulo Ricardo',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.',
    quantityLikes: 269,
    conclusionDate: '10/10/2021',
    liked: false,
  },
  {
    id: 3,
    studentName: 'Paulo Ricardo',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.',
    quantityLikes: 269,
    conclusionDate: '10/10/2021',
    liked: false,
  },
  {
    id: 4,
    studentName: 'Paulo Ricardo',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.',
    quantityLikes: 269,
    conclusionDate: '10/10/2021',
    liked: false,
  },
]

const commentsAtom = atom<Comment[]>(initialComments)

const filteredCommentsAtom = atom((get) => {
  const comments = [...get(commentsAtom)]
  let sortFunction

  if (get(likeFilterAtom)) {
    sortFunction = (a: Comment, b: Comment) => a.quantityLikes - b.quantityLikes
  } else if (get(moreRecentFilterAtom)) {
    sortFunction = (a: Comment, b: Comment) =>
      compareAsc(
        parse(a.conclusionDate, 'dd/MM/yyyy', new Date()),
        parse(b.conclusionDate, 'dd/MM/yyyy', new Date()),
      )
  }

  if (sortFunction) {
    const orderMultiplier = get(ascendingOrderFilterAtom) ? 1 : -1
    comments.sort((a, b) => orderMultiplier * sortFunction(a, b))
  } else if (get(ascendingOrderFilterAtom)) comments.reverse()

  return comments
})

const toggleCommentLikeByIdAtom = atom(null, (get, set, commentId) => {
  const updatedComments = get(commentsAtom).map((comment) => {
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

const courseCommentsOpenAtom = atom(false)

const openCourseCommentsAtom = atom(null, (_get, set) => {
  set(courseCommentsOpenAtom, true)
})

export {
  commentsAtom,
  filteredCommentsAtom,
  toggleCommentLikeByIdAtom,
  courseCommentsOpenAtom,
  openCourseCommentsAtom,
}
