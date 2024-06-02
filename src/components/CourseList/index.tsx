'use client'

import { useAtomValue } from 'jotai'
import { institutionCoursesAtom } from '@/atoms/courses'

import { ScrollArea } from '../ui/scroll-area'

import CourseListItems from './CourseListItems'
import { cn } from '@/lib/utils'

export default function CourseList() {
  const institutionCourses = useAtomValue(institutionCoursesAtom)

  return (
    <ScrollArea
      className={cn(
        'h-min rounded-md border p-4',
        institutionCourses && institutionCourses.length >= 4 ? 'h-72' : null,
      )}
    >
      <h4 className='mb-4 text-lg font-bold leading-none'>
        Cursos disponíveis
      </h4>
      <CourseListItems />
    </ScrollArea>
  )
}
