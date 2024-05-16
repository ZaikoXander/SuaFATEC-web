'use client'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

import axios from 'axios'

import { type Institution, institutionsAtom } from '@/atoms/institutions'
import { type City, citiesAtom } from '@/atoms/cities'

import { APIProvider, Map } from '@vis.gl/react-google-maps'

import InstitutionMarker from './InstitutionMarker'

import { SaoPauloStateCenterPosition } from './constants'
import { handleCameraChange } from './helpers'

interface FetchInstitutionsResponse {
  institutions: Institution[]
}
interface FetchCitiesResponse {
  cities: City[]
}

export default function GoogleMaps() {
  const [institutions, setInstitutions] = useAtom(institutionsAtom)
  const [cities, setCities] = useAtom(citiesAtom)

  useEffect(() => {
    async function fetchData() {
      try {
        const institutionsRequest = axios.get<FetchInstitutionsResponse>(
          process.env.NEXT_PUBLIC_API_URL + '/institutions',
        )
        const citiesRequest = axios.get<FetchCitiesResponse>(
          process.env.NEXT_PUBLIC_API_URL + '/cities',
        )

        const [
          {
            data: { institutions: fetchedInstitutions },
          },
          {
            data: { cities: fetchedCities },
          },
        ] = await Promise.all([institutionsRequest, citiesRequest])

        setInstitutions(fetchedInstitutions)
        setCities(fetchedCities)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [setInstitutions, setCities])

  if (!institutions || !cities) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div className='h-screen w-full'>
        <Map
          disableDefaultUI
          minZoom={7.5}
          defaultZoom={7.5}
          defaultCenter={SaoPauloStateCenterPosition}
          onCameraChanged={handleCameraChange}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          {institutions?.map((institution) => (
            <InstitutionMarker key={institution.id} institution={institution} />
          ))}
        </Map>
      </div>
    </APIProvider>
  )
}
