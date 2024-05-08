'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import {
  type Institution,
  institutionsAtom,
  selectedInstitutionAtom,
} from '@/atoms/institutions'
import { getInstitutionCityAtom } from '@/atoms/cities'
import { openInstitutionInfoAtom } from '@/atoms/sheets'

import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Pin,
} from '@vis.gl/react-google-maps'

import { GraduationCap } from 'lucide-react'

const SaoPauloStateCenterPosition: google.maps.LatLngLiteral = {
  lat: -22.43096057384716,
  lng: -49.130443886609,
}

const SaoPauloStateBounds: google.maps.LatLngBoundsLiteral = {
  north: -19.7796559,
  south: -25.3579997,
  east: -53.1101115,
  west: -44.1613651,
}

function isPositionWithinSaoPauloStateBounds(
  position: google.maps.LatLngLiteral,
): boolean {
  const { lat, lng } = position
  const { north, south, east, west } = SaoPauloStateBounds

  return lat <= north && lat >= south && lng <= west && lng >= east
}

function handleCameraChange(event: MapCameraChangedEvent) {
  const newPosition = event.detail.center

  if (!isPositionWithinSaoPauloStateBounds(newPosition)) {
    event.map.setZoom(7.5)
    event.map.panTo(SaoPauloStateCenterPosition)
  }
}

export default function GoogleMaps() {
  const institutions = useAtomValue(institutionsAtom)
  const getInstitutionCity = useAtomValue(getInstitutionCityAtom)
  const setSelectedInstitution = useSetAtom(selectedInstitutionAtom)
  const openInstitutionInfo = useSetAtom(openInstitutionInfoAtom)

  function handleInstitutionClick(institution: Institution) {
    setSelectedInstitution(institution)
    openInstitutionInfo()
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
          {institutions.map((institution) => {
            const {
              id,
              name,
              latitudeCoordinate: lat,
              longitudeCoordinate: lng,
            } = institution
            const cityName = getInstitutionCity(institution)?.name

            return (
              <AdvancedMarker
                key={id}
                position={{ lat, lng }}
                title={`${name}, ${cityName}`}
                onClick={() => handleInstitutionClick(institution)}
              >
                <Pin>
                  <GraduationCap fill='#b00' stroke='#b00' size={20} />
                </Pin>
              </AdvancedMarker>
            )
          })}
        </Map>
      </div>
    </APIProvider>
  )
}
