import { useAtomValue, useSetAtom } from 'jotai'

import { coursePhotoAtom, photosAtom } from '@/atoms/photos'
import { selectedCourseAtom } from '@/atoms/courses'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import api from '@/lib/api'

type Dimension = number | `${number}` | undefined

const fetchCoursePhotos = async (id: number | undefined) => {
  if (id !== undefined) {
    const {
      data: { photo },
    } = await api.get(`/photos/course/${id}`)

    return photo
  }
}

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

  const setPhotos = useSetAtom(photosAtom)

  useEffect(() => {
    const getCoursePhoto = async () => {
      try {
        if (selectedCourse?.id !== undefined) {
          const coursePhoto = await fetchCoursePhotos(selectedCourse.id)

          setPhotos((photos) => [...photos, coursePhoto])
        }
      } catch (error) {
        console.error(error)
      }
    }
    getCoursePhoto()
  }, [selectedCourse, setPhotos])

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
