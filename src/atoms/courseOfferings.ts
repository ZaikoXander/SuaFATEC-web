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

const courseOfferingsAtom = atom<CourseOffering[]>([
  {
    id: 1,
    courseId: 1,
    institutionId: 1,
    shifts: ['morning', 'afternoon', 'night'],
    distanceLearning: false,
  },
  {
    id: 2,
    courseId: 2,
    institutionId: 2,
    shifts: ['morning', 'afternoon'],
    distanceLearning: true,
  },
  {
    id: 3,
    courseId: 3,
    institutionId: 1,
    shifts: ['night'],
    distanceLearning: true,
  },
  {
    id: 4,
    courseId: 4,
    institutionId: 1,
    shifts: ['morning', 'afternoon'],
    distanceLearning: false,
  },
  {
    id: 5,
    courseId: 5,
    institutionId: 1,
    shifts: ['afternoon', 'night'],
    distanceLearning: false,
  },
])

const institutionCourseOfferingsAtom = atom<CourseOffering[]>((get) => {
  const courseOfferings = get(courseOfferingsAtom)
  const selectedInstitution = get(selectedInstitutionAtom)

  return courseOfferings.filter(
    (courseOffering) =>
      courseOffering.institutionId === selectedInstitution?.id,
  )
})

const selectedCourseOfferingAtom = atom<CourseOffering | undefined>((get) => {
  const selectedCourse = get(selectedCourseAtom)
  const institutionCourseOfferings = get(institutionCourseOfferingsAtom)

  return institutionCourseOfferings.find(
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
  courseOfferingsAtom,
  institutionCourseOfferingsAtom,
  selectedCourseOfferingAtom,
  formattedShiftsAtom,
}
