import { atom } from 'jotai'

const courseCommentsOpenAtom = atom(false)

const openCourseCommentsAtom = atom(null, (_get, set) =>
  set(courseCommentsOpenAtom, true),
)

export { courseCommentsOpenAtom, openCourseCommentsAtom }
