import Image from 'next/image'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

type Images = {
  src: string
  alt: string
}[]

interface InstitutionInfoProps {
  title: string
  description: string[]
  address: string
  phoneNumber: string
  images: Images
}

export default function InstitutionInfo({
  title,
  description,
  address,
  phoneNumber,
  images,
}: InstitutionInfoProps) {
  const imagePairs = images.reduce((result: Images[], value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2))
    return result
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='absolute z-10 mt-20' variant='outline'>
          Open
        </Button>
      </SheetTrigger>
      <SheetContent className='flex w-[36%] flex-col gap-4 sm:max-w-[86%]'>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </SheetDescription>
        </SheetHeader>
        <div className='flex flex-col gap-2'>
          <span className='font-semibold'>
            Endereço:{' '}
            <span className='self-center text-sm font-medium leading-none'>
              {address}
            </span>
          </span>
          <span className='font-semibold'>
            Telefone:{' '}
            <span className='text-sm font-medium leading-none'>
              {phoneNumber}
            </span>
          </span>
          <div className='flex gap-2'>
            {imagePairs.map((imagePair, index) => (
              <div key={index} className='flex flex-col gap-2'>
                {imagePair.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={256}
                    height={256}
                    className='rounded-sm'
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
