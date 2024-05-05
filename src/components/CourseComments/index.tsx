'use client'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { courseCommentsOpenAtom, openCourseInfoAtom } from '@/atoms/sheets'
import { selectedCourseAtom } from '@/atoms/institutionCoursesData'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

import Image from 'next/image'

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
            {selectedCourse ? (
              <Image
                src={selectedCourse?.photoUrl}
                alt={`Imagem ilustrativa do curso ${selectedCourse?.name}`}
                width={400}
                height={400}
                className='mt-2 w-[28rem] rounded-md shadow-sm'
              />
            ) : null}
            <CommentForm />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
