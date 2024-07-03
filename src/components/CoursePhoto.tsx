import { useEffect } from 'react'

import Image from 'next/image'

import request from '@/lib/request'

import { useAtomValue, useSetAtom } from 'jotai'

import { addPhotoAtom, selectedCoursePhotoAtom } from '@/atoms/photos'
import { selectedCourseAtom } from '@/atoms/courses'

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
  const selectedCourse = useAtomValue(selectedCourseAtom)

  const selectedCoursePhoto = useAtomValue(selectedCoursePhotoAtom)

  const addPhoto = useSetAtom(addPhotoAtom)

  useEffect(() => {
    async function fetchCoursePhoto() {
      try {
        if (selectedCourse?.id !== undefined) {
          const newPhoto = await request.photos.from.course(selectedCourse.id)

          addPhoto(newPhoto)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchCoursePhoto()
  }, [addPhoto, selectedCourse])

  if (!selectedCoursePhoto) {
    return <p>Loading...</p>
  }

  return (
    <Image
      src={selectedCoursePhoto.url}
      alt={`Imagem ilustrativa do curso ${selectedCourse?.name}`}
      width={width}
      height={height}
      className={cn('rounded-md shadow-sm', className)}
    />
  )
}
