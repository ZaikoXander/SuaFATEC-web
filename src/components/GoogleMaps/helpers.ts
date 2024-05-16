import { SaoPauloStateBounds, SaoPauloStateCenterPosition } from './constants'

import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps'

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

export { handleCameraChange }
