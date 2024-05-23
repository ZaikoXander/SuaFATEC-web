import { useEffect } from 'react'

import Image from 'next/image'

import axios from 'axios'

import { useAtomValue, useSetAtom } from 'jotai'

import { institutionPhotosAtom } from '@/atoms/photos'
import { selectedInstitutionAtom } from '@/atoms/institutions'
import {
  fetchedInstitutionsIdsOnInstitutionCoursesDataAtom,
  addFetchedInstitutionIdOnInstitutionCoursesDataAtom,
} from '@/atoms/fetchedData'
import { type Course, coursesAtom } from '@/atoms/courses'
import {
  type CourseOffering,
  courseOfferingsAtom,
} from '@/atoms/courseOfferings'

import { SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet'

import CourseList from '../CourseList'

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
  const setCourses = useSetAtom(coursesAtom)
  const setCourseOfferings = useSetAtom(courseOfferingsAtom)

  const imagePairs: string[][] = []
  for (let i = 0; i < institutionPhotos.length; i += 2) {
    const pair: string[] = institutionPhotos
      .slice(i, i + 2)
      .map((photo) => photo.url)
    imagePairs.push(pair)
  }

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
        } = await axios.get<FetchInstitutionCoursesDataResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/institution-courses-data/${selectedInstitution.id}`,
        )

        setCourses(courses)
        setCourseOfferings(courseOfferings)
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
    setCourses,
    setCourseOfferings,
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
        <div className='flex gap-2'>
          {imagePairs.map((imagePair, index) => (
            <div key={index} className='flex flex-col gap-2'>
              {imagePair.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt=''
                  width={256}
                  height={256}
                  className='rounded-sm'
                />
              ))}
            </div>
          ))}
        </div>
        <CourseList />
      </div>
    </>
  )
}
