'use client'

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

const santosFatecPosition: google.maps.LatLngLiteral = {
  lat: -23.9426566,
  lng: -46.3263839,
}

function isPositionWithinSaoPauloStateBounds(
  position: google.maps.LatLngLiteral,
) {
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
          <AdvancedMarker position={santosFatecPosition} onClick={() => {}}>
            <Pin>
              <GraduationCap fill='#b00' stroke='#b00' size={20} />
            </Pin>
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  )
}
