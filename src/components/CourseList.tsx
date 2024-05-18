'use client'

import { Fragment } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'
import {
  type Course,
  institutionCoursesAtom,
  selectedCourseAtom,
} from '@/atoms/courses'
import { openCourseInfoAtom } from '@/atoms/sheets'

import { Button } from './ui/button'
import { SheetClose } from './ui/sheet'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'

function CourseListItem({ course }: { course: Course }) {
  const setSelectedCourse = useSetAtom(selectedCourseAtom)
  const openCourseInfo = useSetAtom(openCourseInfoAtom)

  function handleSelectCourse(course: Course) {
    setSelectedCourse(course)
    openCourseInfo()
  }

  return (
    <SheetClose asChild>
      <Button
        variant='outline'
        className='h-auto w-full text-pretty'
        onClick={() => handleSelectCourse(course)}
      >
        {course.name}
      </Button>
    </SheetClose>
  )
}

function CourseListItems() {
  const institutionCourses: (Course | undefined)[] | undefined = useAtomValue(
    institutionCoursesAtom,
  )
  const lastCourse = institutionCourses?.at(-1)

  if (!institutionCourses || !lastCourse) return

  const safeInstitutionCourses: Course[] = institutionCourses.filter(
    (course) => !!course,
  )

  return (
    <>
      {safeInstitutionCourses.map((course: Course) => (
        <Fragment key={course.id}>
          <CourseListItem course={course} />
          {lastCourse.id !== course.id && <Separator className='my-2' />}
        </Fragment>
      ))}
    </>
  )
}

export default function CourseList() {
  return (
    <ScrollArea className='h-80 w-full rounded-md border p-4'>
      <h4 className='mb-4 text-lg font-bold leading-none'>
        Cursos disponíveis
      </h4>
      <CourseListItems />
    </ScrollArea>
  )
}
