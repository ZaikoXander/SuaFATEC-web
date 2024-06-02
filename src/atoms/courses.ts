import { atom } from 'jotai'

import { institutionCourseOfferingsAtom } from './courseOfferings'

interface Course {
  id: number
  name: string
  duration: number
  description: string
  photoId: number
}

const coursesAtom = atom<Course[]>([])

const addCoursesAtom = atom(null, (get, set, newCourses: Course[]) => {
  const courses = get(coursesAtom)

  set(coursesAtom, [...courses, ...newCourses])
})

const selectedCourseAtom = atom<Course | undefined>(undefined)

const institutionCoursesAtom = atom<(Course | undefined)[] | undefined>(
  (get) => {
    const courseOfferings = get(institutionCourseOfferingsAtom)
    const courses = get(coursesAtom)

    return courseOfferings?.map((courseOffering) =>
      courses.find((course) => course.id === courseOffering.courseId),
    )
  },
)

export {
  type Course,
  coursesAtom,
  addCoursesAtom,
  selectedCourseAtom,
  institutionCoursesAtom,
}
