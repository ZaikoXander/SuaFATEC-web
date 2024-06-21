import { type Atom, atom } from 'jotai'

import type { City } from './cities'

interface Institution {
  id: number
  name: string
  address: string
  description: string[]
  phoneNumber: string
  cityId: number
  latitudeCoordinate: number
  longitudeCoordinate: number
}

const institutionsAtom = atom<Institution[]>([])

const selectedInstitutionAtom = atom<Institution | undefined>(undefined)

const getInstitutionByIdAtom: Atom<(id: number) => Institution | undefined> =
  atom((get) => (id: number) => {
    const institutions = get(institutionsAtom)

    return institutions.find((institution) => institution.id === id)
  })

const setSelectedInstitutionByIdAtom = atom(null, (get, set, id: number) => {
  const getInstitutionById = get(getInstitutionByIdAtom)
  const institution = getInstitutionById(id)

  set(selectedInstitutionAtom, institution)
})

const getCityInstitutionsAtom = atom((get) => (city: City) => {
  const institutions = get(institutionsAtom)

  return institutions.filter((institution) => institution.cityId === city.id)
})

export {
  type Institution,
  institutionsAtom,
  selectedInstitutionAtom,
  getInstitutionByIdAtom,
  setSelectedInstitutionByIdAtom,
  getCityInstitutionsAtom,
}
