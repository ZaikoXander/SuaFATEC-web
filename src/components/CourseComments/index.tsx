'use client'

import { useAtom } from 'jotai'

import { courseCommentsOpenAtom } from '@/atoms/comments'

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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className='flex w-[72%] flex-col gap-4 sm:max-w-[86%]'>
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
              className='mt-2 w-10/12 rounded-md'
            />
            <CommentForm />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
