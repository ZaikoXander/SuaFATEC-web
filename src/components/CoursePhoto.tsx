import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { coursePhotoAtom, photosAtom } from '@/atoms/photos'
import { selectedCourseAtom } from '@/atoms/courses'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import api from '@/lib/api'
import { useSelectedLayoutSegment } from 'next/navigation'

type Dimension = number | `${number}` | undefined

const fetchCoursePhotos = async (id: number | undefined) => {
  if (id !== undefined) {
    const { data: { photo } } = await api.get(`/photos/course/${id}`);
    console.log(photo)
    return photo;
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
      if (selectedCourse?.id !== undefined) {
        const coursePhoto = await fetchCoursePhotos(selectedCourse.id)
        console.log("logzinho do mal: " + coursePhoto)
        setPhotos((photos) => [...photos, coursePhoto]); 
      }
    }
    getCoursePhoto()
  }, [selectedCourse])


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
