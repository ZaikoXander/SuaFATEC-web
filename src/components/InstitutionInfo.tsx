'use client'

import Image from 'next/image'

import { useAtom, useAtomValue } from 'jotai'
import { institutionInfoOpenAtom } from '@/atoms/sheets'
import { selectedInstitutionAtom } from '@/atoms/institutions'

import { Button } from './ui/button'
import CourseList from './CourseList'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export default function InstitutionInfo() {
  const [open, setOpen] = useAtom(institutionInfoOpenAtom)
  const selectedInstitution = useAtomValue(selectedInstitutionAtom)

  const imagePairs = selectedInstitution?.images.reduce(
    (result: string[][], value, index, array) => {
      if (index % 2 === 0) result.push(array.slice(index, index + 2))
      return result
    },
    [],
  )

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className='absolute z-10 mt-20' variant='outline'>
          Open
        </Button>
      </SheetTrigger>
      <SheetContent className='flex w-[36%] flex-col gap-4 sm:max-w-[86%]'>
        <SheetHeader>
          <SheetTitle>Informações da {selectedInstitution?.name}</SheetTitle>
          <SheetDescription>
            {selectedInstitution?.description.map((paragraph, index) => (
              <span key={index} className='block'>
                {paragraph}
              </span>
            ))}
          </SheetDescription>
        </SheetHeader>
        <div className='flex flex-col gap-2'>
          <span className='font-semibold'>
            Endereço:{' '}
            <span className='self-center text-sm font-medium leading-none'>
              {selectedInstitution?.address}
            </span>
          </span>
          <span className='font-semibold'>
            Telefone:{' '}
            <span className='text-sm font-medium leading-none'>
              {selectedInstitution?.phoneNumber}
            </span>
          </span>
          <div className='flex gap-2'>
            {imagePairs?.map((imagePair, index) => (
              <div key={index} className='flex flex-col gap-2'>
                {imagePair.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt=''
                    width={256}
                    height={256}
                    className='rounded-sm'
                  />
                ))}
              </div>
            ))}
          </div>
          <CourseList />
        </div>
      </SheetContent>
    </Sheet>
  )
}
