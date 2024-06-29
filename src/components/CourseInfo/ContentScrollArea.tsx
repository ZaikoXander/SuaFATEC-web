'use client'

import { useAtomValue, useSetAtom } from 'jotai'

import { selectedCourseAtom } from '@/atoms/courses'
import {
  selectedCourseOfferingAtom,
  formattedShiftsAtom,
} from '@/atoms/courseOfferings'
import { openCourseCommentsAtom } from '@/atoms/sheets'

import { Button } from '../ui/button'
import { SheetClose, SheetDescription } from '../ui/sheet'
import { ScrollArea } from '../ui/scroll-area'

import CoursePhoto from '../CoursePhoto'

export default function ContentScrollArea() {
  const selectedCourseOffering = useAtomValue(selectedCourseOfferingAtom)
  const selectedCourse = useAtomValue(selectedCourseAtom)
  const openCourseComments = useSetAtom(openCourseCommentsAtom)
  const formattedShifts = useAtomValue(formattedShiftsAtom)

  return (
    <ScrollArea className='pr-3'>
      <SheetDescription>{selectedCourse?.description}</SheetDescription>
      <CoursePhoto height={230} className='w-full' />
      <div className='flex h-full flex-col gap-2'>
        <span className='font-semibold'>
          Turnos:{' '}
          <span className='self-center text-sm font-medium leading-none'>
            {formattedShifts}
          </span>
        </span>
        <span className='font-semibold'>
          EAD?{' '}
          <span className='self-center text-sm font-medium leading-none'>
            {selectedCourseOffering?.distanceLearning ? 'Sim' : 'Não'}
          </span>
        </span>
        <SheetClose asChild>
          <Button
            className='mt-auto w-full'
            variant='outline'
            onClick={openCourseComments}
          >
            Abrir comentários
          </Button>
        </SheetClose>
      </div>
    </ScrollArea>
  )
}
