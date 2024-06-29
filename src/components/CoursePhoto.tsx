import { useEffect } from 'react'

import Image from 'next/image'

import photosApi from '@/lib/api/photosApi'

import { useAtomValue, useSetAtom } from 'jotai'

import { addPhotoAtom, coursePhotoAtom, type Photo } from '@/atoms/photos'
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

  const coursePhoto = useAtomValue(coursePhotoAtom)

  const addPhoto = useSetAtom(addPhotoAtom)

  useEffect(() => {
    async function fetchCoursePhoto() {
      try {
        if (selectedCourse?.id !== undefined) {
          const {
            data: { photo: newPhoto },
          } = await photosApi.get<{ photo: Photo }>(
            'course/' + selectedCourse.id.toString(),
          )

          addPhoto(newPhoto)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchCoursePhoto()
  }, [addPhoto, selectedCourse])

  if (!coursePhoto) {
    return <p>Loading...</p>
  }

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
