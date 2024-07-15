import citiesApi from '@/lib/api/citiesApi'

import type { City } from '@/atoms/cities'

async function getAllCities(): Promise<City[]> {
  const {
    data: { cities },
  } = await citiesApi.get<{ cities: City[] }>('/')

  return cities
}

const cities = { getAllCities }

export default cities
