import citiesApi from '@/lib/api/citiesApi'

import type { City } from '@/atoms/cities'

async function getCity(id: number): Promise<City> {
  const {
    data: { city },
  } = await citiesApi.get<{ city: City }>(id.toString())

  return city
}

async function getAllCities(): Promise<City[]> {
  const {
    data: { cities },
  } = await citiesApi.get<{ cities: City[] }>('/')

  return cities
}

const cities = { getCity, getAllCities }

export default cities
