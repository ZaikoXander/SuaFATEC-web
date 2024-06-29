'use client'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { selectedInstitutionAtom } from '@/atoms/institutions'
import { selectedCourseAtom } from '@/atoms/courses'
import { courseInfoOpenAtom, openInstitutionInfoAtom } from '@/atoms/sheets'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import ContentScrollArea from './ContentScrollArea'

export default function CourseInfo() {
  const selectedInstitution = useAtomValue(selectedInstitutionAtom)
  const selectedCourse = useAtomValue(selectedCourseAtom)
  const [open, setOpen] = useAtom(courseInfoOpenAtom)
  const openInstitutionInfo = useSetAtom(openInstitutionInfoAtom)

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
        <ContentScrollArea />
      </SheetContent>
    </Sheet>
  )
}
