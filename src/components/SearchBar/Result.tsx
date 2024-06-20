import Image from 'next/image'

import { Button } from '../ui/button'

import Small from '../Typography/Small'
import Muted from '../Typography/Muted'

import type { SearchBarResult } from '.'

interface ResultProps extends Omit<SearchBarResult, 'id'> {}

export default function Result({
  name,
  address,
  cityName,
  photoUrl,
}: ResultProps) {
  return (
    <Button variant='secondary' className='flex h-32 w-full gap-x-2'>
      <div className='flex h-full flex-1 flex-col gap-y-6 pt-1 text-start'>
        <Small>{name}</Small>
        <Muted className='text-pretty'>{address}</Muted>
      </div>
      <div className='flex flex-1 flex-col items-center gap-y-2'>
        <Muted>{cityName}</Muted>
        <Image
          src={photoUrl || ''}
          alt={`Imagem da ${name}`}
          width={160}
          height={82.064516112}
          className='rounded-sm shadow-sm'
        />
      </div>
    </Button>
  )
}
