'use client'

import { useAtom } from 'jotai'

import { institutionInfoOpenAtom } from '@/atoms/sheets'

import { Sheet } from '../ui/sheet'

import Content from './Content'

export default function InstitutionInfo() {
  const [open, setOpen] = useAtom(institutionInfoOpenAtom)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Content />
    </Sheet>
  )
}
