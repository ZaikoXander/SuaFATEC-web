'use client'

import { useAtom, useSetAtom } from 'jotai'

import { courseCommentsOpenAtom, openCourseInfoAtom } from '@/atoms/sheets'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

import Image from 'next/image'

interface CourseCommentsProps {
  courseName: string
  courseImageUrl: string
}

export default function CourseComments({
  courseName,
  courseImageUrl,
}: CourseCommentsProps) {
  const [open, setOpen] = useAtom(courseCommentsOpenAtom)
  const openCourseInfo = useSetAtom(openCourseInfoAtom)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        onReturnButtonClick={openCourseInfo}
        className='flex w-[58rem] flex-col gap-4 sm:max-w-[90rem]'
      >
        <SheetHeader className='self-center'>
          <SheetTitle>Comentários do curso {courseName}</SheetTitle>
        </SheetHeader>
        <div className='flex justify-between'>
          <CommentList />
          <div className='flex w-min flex-col items-center justify-between'>
            <Image
              src={courseImageUrl}
              alt={`Imagem ilustrativa do curso ${courseName}`}
              width={400}
              height={400}
              className='mt-2 w-[28rem] rounded-md shadow-sm'
            />
            <CommentForm />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
