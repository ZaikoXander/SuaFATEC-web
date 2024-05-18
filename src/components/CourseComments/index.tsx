'use client'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { courseCommentsOpenAtom, openCourseInfoAtom } from '@/atoms/sheets'
import { selectedCourseAtom } from '@/atoms/courses'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import CommentList from './CommentList'
import CoursePhoto from '../CoursePhoto'
import CommentForm from './CommentForm'

export default function CourseComments() {
  const [open, setOpen] = useAtom(courseCommentsOpenAtom)
  const openCourseInfo = useSetAtom(openCourseInfoAtom)
  const selectedCourse = useAtomValue(selectedCourseAtom)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        onReturnButtonClick={openCourseInfo}
        className='flex w-[58rem] flex-col gap-4 sm:max-w-[90rem]'
      >
        <SheetHeader className='self-center'>
          <SheetTitle>Comentários do curso {selectedCourse?.name}</SheetTitle>
        </SheetHeader>
        <div className='flex justify-between'>
          <CommentList />
          <div className='flex w-min flex-col items-center justify-between'>
            <CoursePhoto className='mt-2 w-[28rem]' />
            <CommentForm />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
