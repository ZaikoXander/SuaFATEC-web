import { atom } from 'jotai'

const courseCommentsOpenAtom = atom(false)

const openCourseCommentsAtom = atom(null, (_get, set) =>
  set(courseCommentsOpenAtom, true),
)

const courseInfoOpenAtom = atom(false)

const openCourseInfoAtom = atom(null, (_get, set) =>
  set(courseInfoOpenAtom, true),
)

export {
  courseCommentsOpenAtom,
  openCourseCommentsAtom,
  courseInfoOpenAtom,
  openCourseInfoAtom,
}
