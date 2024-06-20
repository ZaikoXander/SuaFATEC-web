import { atom } from 'jotai'

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

const getCityInstitutionsAtom = atom((get) => (city: City) => {
  const institutions = get(institutionsAtom)

  return institutions.filter((institution) => institution.cityId === city.id)
})

export {
  type Institution,
  institutionsAtom,
  selectedInstitutionAtom,
  getCityInstitutionsAtom,
}
