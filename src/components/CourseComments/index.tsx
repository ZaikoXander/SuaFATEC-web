'use client'

import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'

import { courseCommentsOpenAtom, openCourseInfoAtom } from '@/atoms/sheets'
import { selectedCourseAtom } from '@/atoms/courses'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import CommentList from './CommentList'
import CoursePhoto from '../CoursePhoto'
import CommentForm from './CommentForm'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ScrollArea } from '../ui/scroll-area'

const commentFormOpenAtom = atom(false)

export default function CourseComments() {
  const [open, setOpen] = useAtom(courseCommentsOpenAtom)
  const openCourseInfo = useSetAtom(openCourseInfoAtom)
  const selectedCourse = useAtomValue(selectedCourseAtom)

  const [commentFormOpen, setCommentFormOpen] = useAtom(commentFormOpenAtom)

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
        <ScrollArea className='pr-1'>
          <div className='p-3'>
            <Button
              variant='secondary'
              className='mb-3 w-full py-5 font-bold transition-all lg:hidden'
              onClick={() => setCommentFormOpen((open) => !open)}
            >
              {commentFormOpen ? 'Ver comentários' : 'Escrever um comentário'}
            </Button>
            <div className='flex justify-between transition-all'>
              <CommentList
                className={cn('transition-all', {
                  'hidden lg:block': commentFormOpen,
                })}
              />
              <div
                className={cn(
                  'hidden w-full flex-col items-center justify-between transition-all lg:flex lg:w-min',
                  { flex: commentFormOpen },
                )}
              >
                <CoursePhoto className='hidden w-[28rem] lg:block' />
                <CommentForm />
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
