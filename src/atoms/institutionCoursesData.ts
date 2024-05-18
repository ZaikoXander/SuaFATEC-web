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

export {
  fetchedInstitutionsIdsOnInstitutionCoursesDataAtom,
  addFetchedInstitutionIdOnInstitutionCoursesDataAtom,
}
