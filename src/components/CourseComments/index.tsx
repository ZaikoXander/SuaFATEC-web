'use client'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { courseCommentsOpenAtom, openCourseInfoAtom } from '@/atoms/sheets'
import { selectedCourseAtom } from '@/atoms/courses'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import ContentScrollArea from './ContentScrollArea'

export default function CourseComments() {
  const [open, setOpen] = useAtom(courseCommentsOpenAtom)
  const openCourseInfo = useSetAtom(openCourseInfoAtom)
  const selectedCourse = useAtomValue(selectedCourseAtom)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        onReturnButtonClick={openCourseInfo}
        className='flex w-full flex-col gap-4 sm:max-w-[35rem] lg:max-w-[58rem]'
      >
        <SheetHeader className='sm:self-center'>
          <SheetTitle className='mt-6'>
            Comentários do curso {selectedCourse?.name}
          </SheetTitle>
        </SheetHeader>
        <ContentScrollArea />
      </SheetContent>
    </Sheet>
  )
}
