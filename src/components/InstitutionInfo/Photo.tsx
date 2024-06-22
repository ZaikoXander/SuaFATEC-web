import Image from 'next/image'

import { useAtomValue } from 'jotai'

import { institutionPhotosAtom } from '@/atoms/photos'
import { selectedInstitutionAtom } from '@/atoms/institutions'

export default function Photo() {
  const institutionPhotos = useAtomValue(institutionPhotosAtom)
  const selectedInstitution = useAtomValue(selectedInstitutionAtom)

  const hasOnlyOnePhoto = institutionPhotos.length === 1

  if (!hasOnlyOnePhoto) return
  if (!selectedInstitution) return

  const firstPhoto = institutionPhotos[0]
  const firstPhotoUrl = firstPhoto.url

  const institutionName = selectedInstitution.name

  return (
    <Image
      src={firstPhotoUrl}
      alt={`Imagem da ${institutionName}`}
      width={512}
      height={262.606451558}
      className='m-auto w-full max-w-sm rounded-sm shadow-md sm:max-w-md md:max-w-sm 2xl:max-w-md'
    />
  )
}
