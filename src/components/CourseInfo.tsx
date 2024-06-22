'use client'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { selectedInstitutionAtom } from '@/atoms/institutions'
import { selectedCourseAtom } from '@/atoms/courses'
import {
  selectedCourseOfferingAtom,
  formattedShiftsAtom,
} from '@/atoms/courseOfferings'
import {
  courseInfoOpenAtom,
  openInstitutionInfoAtom,
  openCourseCommentsAtom,
} from '@/atoms/sheets'

import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'

import CoursePhoto from './CoursePhoto'
import { ScrollArea } from './ui/scroll-area'

export default function CourseInfo() {
  const selectedInstitution = useAtomValue(selectedInstitutionAtom)
  const selectedCourse = useAtomValue(selectedCourseAtom)
  const selectedCourseOffering = useAtomValue(selectedCourseOfferingAtom)
  const [open, setOpen] = useAtom(courseInfoOpenAtom)
  const openInstitutionInfo = useSetAtom(openInstitutionInfoAtom)
  const openCourseComments = useSetAtom(openCourseCommentsAtom)
  const formattedShifts = useAtomValue(formattedShiftsAtom)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        onReturnButtonClick={openInstitutionInfo}
        className='flex w-full flex-col gap-4 sm:w-[84%] sm:max-w-full md:w-[66%] lg:w-[52%] xl:w-[42%] 2xl:w-[36%]'
      >
        <SheetHeader>
          <SheetTitle>
            <span className='block scroll-m-20 text-2xl font-semibold tracking-tight'>
              {selectedInstitution?.name}
            </span>
            <span className='block scroll-m-20 text-xl font-semibold tracking-tight'>
              Informações do curso {selectedCourse?.name}
            </span>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea>
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
      </SheetContent>
    </Sheet>
  )
}
