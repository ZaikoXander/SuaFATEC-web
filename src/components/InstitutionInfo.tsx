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

interface InstitutionInfoProps {
  title: string
  description: string[]
  address: string
  phoneNumber: string
  images: {
    src: string
    alt: string
  }[]
}

export default function InstitutionInfo({
  title,
  description,
  address,
  phoneNumber,
  images,
}: InstitutionInfoProps) {
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
          <div className='flex flex-col gap-1'>
            <div className='flex gap-1'>
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={240}
                height={240}
              />
              <Image
                src={images[1].src}
                alt={images[1].alt}
                width={240}
                height={240}
              />
            </div>
            <div className='flex gap-1'>
              <Image
                src={images[2].src}
                alt={images[2].alt}
                width={240}
                height={240}
              />
              <Image
                src={images[3].src}
                alt={images[3].alt}
                width={240}
                height={240}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
