'use client'

import Image from 'next/image'

import { useAtom, useAtomValue } from 'jotai'

import { institutionInfoOpenAtom } from '@/atoms/sheets'
import { selectedInstitutionAtom } from '@/atoms/institutions'
import { institutionPhotosAtom } from '@/atoms/photos'

import CourseList from './CourseList'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'

export default function InstitutionInfo() {
  const [open, setOpen] = useAtom(institutionInfoOpenAtom)
  const selectedInstitution = useAtomValue(selectedInstitutionAtom)
  const institutionPhotos = useAtomValue(institutionPhotosAtom)

  const imagePairs: string[][] = []
  for (let i = 0; i < institutionPhotos.length; i += 2) {
    const pair: string[] = institutionPhotos
      .slice(i, i + 2)
      .map((photo) => photo.url)
    imagePairs.push(pair)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
