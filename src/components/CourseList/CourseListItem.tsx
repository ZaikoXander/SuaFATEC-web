import { useSetAtom } from 'jotai'

import { type Course, selectedCourseAtom } from '@/atoms/courses'
import { openCourseInfoAtom } from '@/atoms/sheets'

import { SheetClose } from '../ui/sheet'
import { Button } from '../ui/button'

export default function CourseListItem({ course }: { course: Course }) {
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
