'use client'

import { ScrollArea } from '../ui/scroll-area'

import CourseListItems from './CourseListItems'

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
