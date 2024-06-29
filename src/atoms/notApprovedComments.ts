import { atom } from 'jotai'

import type { Comment as ApprovedComment } from './comments'

type Comment = Omit<ApprovedComment, 'liked'>

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
  notApprovedCommentsAtom,
  removeNotApprovedCommentByIdAtom,
}
