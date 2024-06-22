import { useAtomValue } from 'jotai'

import { coursePhotoAtom } from '@/atoms/photos'
import { selectedCourseAtom } from '@/atoms/courses'

import Image from 'next/image'

import { cn } from '@/lib/utils'

type Dimension = number | `${number}` | undefined

interface CoursePhotoProps {
  className?: string
  width?: Dimension
  height?: Dimension
}

export default function CoursePhoto({
  className,
  width = 400,
  height = 400,
}: CoursePhotoProps) {
  const coursePhoto = useAtomValue(coursePhotoAtom)
  const selectedCourse = useAtomValue(selectedCourseAtom)

  if (!coursePhoto) return

  return (
    <Image
      src={coursePhoto.url}
      alt={`Imagem ilustrativa do curso ${selectedCourse?.name}`}
      width={width}
      height={height}
      className={cn('rounded-md shadow-sm', className)}
    />
  )
}
