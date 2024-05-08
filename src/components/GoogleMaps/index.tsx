'use client'

import { useAtomValue } from 'jotai'

import { institutionsAtom } from '@/atoms/institutions'

import { APIProvider, Map } from '@vis.gl/react-google-maps'

import InstitutionMarker from './InstitutionMarker'

import { SaoPauloStateCenterPosition } from './constants'
import { handleCameraChange } from './helpers'

export default function GoogleMaps() {
  const institutions = useAtomValue(institutionsAtom)

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
          {institutions.map((institution) => (
            <InstitutionMarker key={institution.id} institution={institution} />
          ))}
        </Map>
      </div>
    </APIProvider>
  )
}
