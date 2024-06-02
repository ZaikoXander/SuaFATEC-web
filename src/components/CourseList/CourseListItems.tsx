import { Fragment } from 'react'

import { useAtomValue } from 'jotai'

import { type Course, institutionCoursesAtom } from '@/atoms/courses'

import { Separator } from '../ui/separator'

import CourseListItem from './CourseListItem'

export default function CourseListItems() {
  const institutionCourses = useAtomValue(institutionCoursesAtom)
  const lastCourse = institutionCourses?.at(-1)

  if (!institutionCourses || !lastCourse) return

  return (
    <div className='p-2'>
      {(institutionCourses.filter((course) => !!course) as Course[]).map(
        (course: Course) => (
          <Fragment key={course.id}>
            <CourseListItem course={course} />
            {lastCourse.id !== course.id && <Separator className='my-2' />}
          </Fragment>
        ),
      )}
    </div>
  )
}
