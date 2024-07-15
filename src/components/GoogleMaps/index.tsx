'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'

import request from '@/request'

import { institutionsAtom } from '@/atoms/institutions'
import { citiesAtom } from '@/atoms/cities'

import { APIProvider, Map } from '@vis.gl/react-google-maps'

import InstitutionMarker from './InstitutionMarker'

import { SaoPauloStateCenterPosition } from './constants'
import { handleCameraChange } from './helpers'

export default function GoogleMaps() {
  const [institutions, setInstitutions] = useAtom(institutionsAtom)
  const [cities, setCities] = useAtom(citiesAtom)

  useEffect(() => {
    async function fetchData() {
      try {
        const institutionsRequest = request.institutions.getAllInstitutions()
        const citiesRequest = request.cities.getAllCities()

        const [fetchedInstitutions, fetchedCities] = await Promise.all([
          institutionsRequest,
          citiesRequest,
        ])

        setInstitutions(fetchedInstitutions)
        setCities(fetchedCities)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [setInstitutions, setCities])

  if (!institutions.length || !cities.length) {
    return (
      <div className='flex w-full items-center justify-center'>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div className='w-full'>
        <Map
          disableDefaultUI
          minZoom={7.5}
          defaultZoom={7.5}
          defaultCenter={SaoPauloStateCenterPosition}
          onCameraChanged={handleCameraChange}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          {institutions.map((institution) => (
            <InstitutionMarker key={institution.id} institution={institution} />
          ))}
        </Map>
      </div>
    </APIProvider>
  )
}
