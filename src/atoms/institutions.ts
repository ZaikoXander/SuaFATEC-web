import { atom } from 'jotai'

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

const institutionsAtom = atom<Institution[] | undefined>(undefined)

const selectedInstitutionAtom = atom<Institution | undefined>(undefined)

export { type Institution, institutionsAtom, selectedInstitutionAtom }
