'use client'

import { Fragment } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'
import { coursesAtom, selectedCourseAtom } from '@/atoms/institutionCoursesData'

import { Button } from './ui/button'
import { SheetClose } from './ui/sheet'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'

export default function CourseList() {
  const courses = useAtomValue(coursesAtom)
  const setSelectedCourse = useSetAtom(selectedCourseAtom)

  return (
    <ScrollArea className='h-80 w-full rounded-md border p-4'>
      <h4 className='mb-4 text-lg font-bold leading-none'>
        Cursos disponíveis
      </h4>
      {courses.map((course) => {
        const lastCourseId = courses.at(-1)?.id
        if (lastCourseId === course.id) {
          return (
            <SheetClose key={course.id} asChild>
              <Button
                variant='outline'
                className='h-auto w-full text-pretty'
                onClick={() => setSelectedCourse(course)}
              >
                {course.title}
              </Button>
            </SheetClose>
          )
        }

        return (
          <Fragment key={course.id}>
            <SheetClose key={course.id} asChild>
              <Button
                variant='outline'
                className='h-auto w-full text-pretty'
                onClick={() => setSelectedCourse(course)}
              >
                {course.title}
              </Button>
            </SheetClose>
            <Separator className='my-2' />
          </Fragment>
        )
      })}
    </ScrollArea>
  )
}
