import { atom } from 'jotai'

const fetchedInstitutionsIdsOnInstitutionCoursesDataAtom = atom<number[]>([])

const addFetchedInstitutionIdOnInstitutionCoursesDataAtom = atom(
  null,
  (_get, set, institutionId: number) => {
    set(fetchedInstitutionsIdsOnInstitutionCoursesDataAtom, (prev) => [
      ...prev,
      institutionId,
    ])
  },
)

const fetchedCourseOfferingsIdsOnCourseOfferingCommentsAtom = atom<number[]>([])

const addFetchedCourseOfferingIdOnCourseOfferingCommentsAtom = atom(
  null,
  (_get, set, courseOfferingId: number) => {
    set(fetchedCourseOfferingsIdsOnCourseOfferingCommentsAtom, (prev) => [
      ...prev,
      courseOfferingId,
    ])
  },
)

export {
  fetchedInstitutionsIdsOnInstitutionCoursesDataAtom,
  addFetchedInstitutionIdOnInstitutionCoursesDataAtom,
  fetchedCourseOfferingsIdsOnCourseOfferingCommentsAtom,
  addFetchedCourseOfferingIdOnCourseOfferingCommentsAtom,
}
