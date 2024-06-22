import Image from 'next/image'

import { useAtomValue } from 'jotai'

import { institutionPhotosAtom } from '@/atoms/photos'
import { selectedInstitutionAtom } from '@/atoms/institutions'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

export default function PhotosCarousel() {
  const institutionPhotos = useAtomValue(institutionPhotosAtom)
  const selectedInstitution = useAtomValue(selectedInstitutionAtom)

  if (!selectedInstitution) return

  const institutionName = selectedInstitution.name

  return (
    <Carousel className='m-auto w-full max-w-80 sm:max-w-sm md:max-w-80 lg:max-w-sm 2xl:max-w-sm'>
      <CarouselContent>
        {institutionPhotos.map(({ id, url: photoUrl }) => (
          <CarouselItem key={id}>
            <div className='p-2'>
              <Image
                src={photoUrl}
                alt={`Imagem da ${institutionName} ${id}`}
                width={512}
                height={262.606451558}
                className='rounded-sm shadow-md'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
