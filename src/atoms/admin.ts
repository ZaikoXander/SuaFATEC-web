import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { type Comment } from './comments'

interface Admin {
  id: number
  name: string
}

const adminAtom = atom<Admin | undefined>(undefined)

const adminAuthTokenAtom = atomWithStorage<string | undefined>(
  'adminAuthToken',
  undefined,
)

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
  adminAtom,
  adminAuthTokenAtom,
  notApprovedCommentsAtom,
  removeNotApprovedCommentByIdAtom,
}
