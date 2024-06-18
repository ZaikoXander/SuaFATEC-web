import { atom } from 'jotai'

import { type Comment } from './comments'

interface Admin {
  id: number
  name: string
}

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

export { adminAtom, notApprovedCommentsAtom, removeNotApprovedCommentByIdAtom }
