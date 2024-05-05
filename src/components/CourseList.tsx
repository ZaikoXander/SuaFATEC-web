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

export default function CourseList() {
  const institutionCourses = useAtomValue(institutionCoursesAtom)
  const setSelectedCourse = useSetAtom(selectedCourseAtom)
  const openCourseInfo = useSetAtom(openCourseInfoAtom)

  function handleSelectCourse(course: Course) {
    setSelectedCourse(course)
    openCourseInfo()
  }

  return (
    <ScrollArea className='h-80 w-full rounded-md border p-4'>
      <h4 className='mb-4 text-lg font-bold leading-none'>
        Cursos disponíveis
      </h4>
      {institutionCourses.map((course) => {
        const lastCourseId = institutionCourses.at(-1)?.id
        if (lastCourseId === course.id) {
          return (
            <SheetClose key={course.id} asChild>
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

        return (
          <Fragment key={course.id}>
            <SheetClose asChild>
              <Button
                variant='outline'
                className='h-auto w-full text-pretty'
                onClick={() => handleSelectCourse(course)}
              >
                {course.name}
              </Button>
            </SheetClose>
            <Separator className='my-2' />
          </Fragment>
        )
      })}
    </ScrollArea>
  )
}
