import { atom } from 'jotai'

import type { Comment as ApprovedComment } from './comments'

interface Admin {
  id: number
  name: string
}

type Comment = Omit<ApprovedComment, 'liked'>

const adminAtom = atom<Admin | undefined>(undefined)

const notApprovedCommentsAtom = atom<Comment[]>([])

const removeNotApprovedCommentByIdAtom = atom(
  null,
  (get, set, commentId: number) => {
    set(
      notApprovedCommentsAtom,
      get(notApprovedCommentsAtom).filter(
        (comment) => comment.id !== commentId,
      ),
    )
  },
)

export {
  type Comment,
  adminAtom,
  notApprovedCommentsAtom,
  removeNotApprovedCommentByIdAtom,
}
