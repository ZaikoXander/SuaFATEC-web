import { atom } from 'jotai'

import { selectedInstitutionAtom } from './institutions'
import { selectedCourseAtom } from './courses'

type Shift = 'morning' | 'afternoon' | 'night'

interface CourseOffering {
  id: number
  courseId: number
  institutionId: number
  shifts: Shift[]
  distanceLearning: boolean
}

const courseOfferingsAtom = atom<CourseOffering[] | undefined>(undefined)

const institutionCourseOfferingsAtom = atom<CourseOffering[] | undefined>(
  (get) => {
    const courseOfferings = get(courseOfferingsAtom)
    const selectedInstitution = get(selectedInstitutionAtom)

    return courseOfferings?.filter(
      (courseOffering) =>
        courseOffering.institutionId === selectedInstitution?.id,
    )
  },
)

const selectedCourseOfferingAtom = atom<CourseOffering | undefined>((get) => {
  const selectedCourse = get(selectedCourseAtom)
  const institutionCourseOfferings = get(institutionCourseOfferingsAtom)

  return institutionCourseOfferings?.find(
    (courseOffering) => courseOffering.courseId === selectedCourse?.id,
  )
})

const shiftsToPortugueseAtom = atom<string[] | undefined>((get) => {
  const selectedCourseOffering = get(selectedCourseOfferingAtom)
  const shiftsMap = {
    morning: 'Matutino',
    afternoon: 'Vespertino',
    night: 'Noturno',
  }

  return selectedCourseOffering?.shifts.map((shift) => shiftsMap[shift])
})

const formattedShiftsAtom = atom<string | undefined>((get) => {
  const shiftsToPortuguese = get(shiftsToPortugueseAtom)

  return shiftsToPortuguese
    ?.map((shift, index) => {
      if (index === shiftsToPortuguese.length - 1) return shift
      if (index === shiftsToPortuguese.length - 2) return `${shift} e `

      return `${shift}, `
    })
    .join('')
})

export {
  type Shift,
  type CourseOffering,
  courseOfferingsAtom,
  institutionCourseOfferingsAtom,
  selectedCourseOfferingAtom,
  formattedShiftsAtom,
}
