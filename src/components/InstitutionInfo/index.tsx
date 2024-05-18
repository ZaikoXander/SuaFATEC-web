'use client'

import { useAtom } from 'jotai'

import { institutionInfoOpenAtom } from '@/atoms/sheets'

import { Sheet, SheetContent } from '../ui/sheet'

import InstitutionInfoContent from './InstitutionInfoContent'

export default function InstitutionInfo() {
  const [open, setOpen] = useAtom(institutionInfoOpenAtom)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className='flex w-[36%] flex-col gap-4 sm:max-w-[86%]'>
        <InstitutionInfoContent />
      </SheetContent>
    </Sheet>
  )
}
