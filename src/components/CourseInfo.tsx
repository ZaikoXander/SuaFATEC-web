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

import Image from 'next/image'

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
        className='flex w-[36%] flex-col gap-4 sm:max-w-[86%]'
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
          <SheetDescription>{selectedCourse?.description}</SheetDescription>
          {selectedCourse ? (
            <Image
              src={selectedCourse?.photoUrl}
              alt={`Foto de ${selectedCourse?.name}`}
              width={400}
              height={230}
              className='w-full rounded-md'
            />
          ) : null}
        </SheetHeader>
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
      </SheetContent>
    </Sheet>
  )
}
