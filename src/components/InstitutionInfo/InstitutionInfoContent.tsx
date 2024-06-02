import { useEffect } from 'react'

import Image from 'next/image'

import api from '@/lib/api'

import { useAtomValue, useSetAtom } from 'jotai'

import { institutionPhotosAtom } from '@/atoms/photos'
import { selectedInstitutionAtom } from '@/atoms/institutions'
import {
  fetchedInstitutionsIdsOnInstitutionCoursesDataAtom,
  addFetchedInstitutionIdOnInstitutionCoursesDataAtom,
} from '@/atoms/fetchedData'
import { addCoursesAtom, coursesAtom, type Course } from '@/atoms/courses'
import {
  addCourseOfferingsAtom,
  type CourseOffering,
} from '@/atoms/courseOfferings'

import { SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet'

import CourseList from '../CourseList'
import { ScrollArea } from '../ui/scroll-area'

interface FetchInstitutionCoursesDataResponse {
  courses: Course[]
  courseOfferings: CourseOffering[]
}

export default function InstitutionInfoContent() {
  const institutionPhotos = useAtomValue(institutionPhotosAtom)
  const selectedInstitution = useAtomValue(selectedInstitutionAtom)
  const fetchedInstitutionsIdsOnInstitutionCoursesData = useAtomValue(
    fetchedInstitutionsIdsOnInstitutionCoursesDataAtom,
  )
  const addFetchedInstitutionIdOnInstitutionCoursesData = useSetAtom(
    addFetchedInstitutionIdOnInstitutionCoursesDataAtom,
  )
  const addCourses = useSetAtom(addCoursesAtom)
  const addCourseOfferings = useSetAtom(addCourseOfferingsAtom)

  useEffect(() => {
    async function fetchData() {
      try {
        if (
          !selectedInstitution ||
          fetchedInstitutionsIdsOnInstitutionCoursesData.includes(
            selectedInstitution.id,
          )
        )
          return

        const {
          data: { courses, courseOfferings },
        } = await api.get<FetchInstitutionCoursesDataResponse>(
          `/institution-courses-data/${selectedInstitution.id}`,
        )

        addCourses(courses)
        addCourseOfferings(courseOfferings)
        addFetchedInstitutionIdOnInstitutionCoursesData(selectedInstitution.id)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [
    selectedInstitution,
    fetchedInstitutionsIdsOnInstitutionCoursesData,
    addFetchedInstitutionIdOnInstitutionCoursesData,
    addCourses,
    addCourseOfferings,
  ])

  if (!selectedInstitution) return

  return (
    <>
      <SheetHeader>
        <SheetTitle>Informações da {selectedInstitution.name}</SheetTitle>
        <SheetDescription>
          {selectedInstitution.description.map((paragraph, index) => (
            <span key={index} className='block'>
              {paragraph}
            </span>
          ))}
        </SheetDescription>
      </SheetHeader>
      <ScrollArea className='mr-3'>
        <div className='flex flex-col gap-2'>
          <span className='font-semibold'>
            Endereço:{' '}
            <span className='self-center text-sm font-medium leading-none'>
              {selectedInstitution.address}
            </span>
          </span>
          <span className='font-semibold'>
            Telefone:{' '}
            <span className='text-sm font-medium leading-none'>
              {selectedInstitution.phoneNumber}
            </span>
          </span>
          <div className='w-[96%] space-y-4'>
            <div className=' flex flex-wrap gap-3'>
              {institutionPhotos.map((image, index) => (
                <Image
                  key={index}
                  src={image.url}
                  alt=''
                  width={256}
                  height={256}
                  className='w-48 rounded-sm shadow-md sm:w-52 2xl:w-72'
                />
              ))}
            </div>
            <CourseList />
          </div>
        </div>
      </ScrollArea>
    </>
  )
}
