import { atom } from 'jotai'

import type { Institution } from './institutions'

interface City {
  id: number
  name: string
}

const citiesAtom = atom<City[]>([
  {
    id: 1,
    name: 'Santos',
  },
  {
    id: 2,
    name: 'São Paulo',
  },
])

const getInstitutionCityAtom = atom((get) => (institution: Institution) => {
  const cities = get(citiesAtom)

  return cities.find((city) => city.id === institution.cityId)
})

export { getInstitutionCityAtom }
