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

type Shift = 'morning' | 'afternoon' | 'night'

interface CourseInfoProps {
  institutionName: string
  courseName: string
  courseDescription: string
  courseImageUrl: string
  shifts: Shift[]
  distanceLearning: boolean
}

export default function CourseInfo({
  institutionName,
  courseName,
  courseDescription,
  courseImageUrl,
  shifts,
  distanceLearning,
}: CourseInfoProps) {
  function shiftsToPortuguese() {
    return shifts.map((shift) => {
      switch (shift) {
        case 'morning':
          return 'Matutino'
        case 'afternoon':
          return 'Vespertino'
        case 'night':
          return 'Noturno'
      }
    })
  }

  function FormattedShifts() {
    return shiftsToPortuguese()
      .map((shift, index) => {
        if (index === shifts.length - 1) return shift
        if (index === shifts.length - 2) return `${shift} e `

        return `${shift}, `
      })
      .join('')
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='absolute z-10 mt-20' variant='outline'>
          Open
        </Button>
      </SheetTrigger>
      <SheetContent className='flex w-[36%] flex-col gap-4 sm:max-w-[86%]'>
        <SheetHeader>
          <SheetTitle>
            <span className='block scroll-m-20 text-2xl font-semibold tracking-tight'>
              {institutionName}
            </span>
            <span className='block scroll-m-20 text-xl font-semibold tracking-tight'>
              Informações do curso {courseName}
            </span>
          </SheetTitle>
          <SheetDescription>{courseDescription}</SheetDescription>
          <Image
            src={courseImageUrl}
            alt={`Foto de ${courseName}`}
            width={400}
            height={230}
            className='w-full rounded-md'
          />
        </SheetHeader>
        <div className='flex h-full flex-col gap-2'>
          <span className='font-semibold'>
            Turnos:{' '}
            <span className='self-center text-sm font-medium leading-none'>
              <FormattedShifts />
            </span>
          </span>
          <span className='font-semibold'>
            EAD?{' '}
            <span className='self-center text-sm font-medium leading-none'>
              {distanceLearning ? 'Sim' : 'Não'}
            </span>
          </span>
          <Button className='mt-auto w-full' variant='outline'>
            Abrir comentários
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
