'use client'

import { useAtom } from 'jotai'

import { institutionInfoOpenAtom } from '@/atoms/sheets'

import { Sheet, SheetContent } from '../ui/sheet'

import InstitutionInfoContent from './InstitutionInfoContent'

export default function InstitutionInfo() {
  const [open, setOpen] = useAtom(institutionInfoOpenAtom)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className='flex w-full flex-col gap-4 sm:w-[84%] sm:max-w-full md:w-[66%] lg:w-[52%] xl:w-[42%] 2xl:w-[36%]'>
        <InstitutionInfoContent />
      </SheetContent>
    </Sheet>
  )
}
