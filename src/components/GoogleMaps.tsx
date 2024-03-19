'use client'

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const SaoPauloStateCenterPosition: google.maps.LatLngLiteral = {
  lat: -22.43096057384716,
  lng: -49.130443886609
}

export default function GoogleMaps() {
  const santosFatecPosition: google.maps.LatLngLiteral = {
    lat: -23.9426566,
    lng: -46.3263839,
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div className="h-screen w-full">
        <Map
          disableDefaultUI
          minZoom={7.5}
          defaultZoom={7.5}
          defaultCenter={SaoPauloStateCenterPosition}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <AdvancedMarker position={santosFatecPosition} />
        </Map>
      </div>
    </APIProvider>
  )
}
