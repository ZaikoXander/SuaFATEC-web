import { useAtomValue, useSetAtom } from 'jotai'

import { type Institution, selectedInstitutionAtom } from '@/atoms/institutions'
import { getInstitutionCityAtom } from '@/atoms/cities'
import { openInstitutionInfoAtom } from '@/atoms/sheets'

import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps'

import { GraduationCap } from 'lucide-react'

export default function InstitutionMarker({
  institution,
}: {
  institution: Institution
}) {
  const {
    id,
    name,
    latitudeCoordinate: lat,
    longitudeCoordinate: lng,
  } = institution

  const getInstitutionCity = useAtomValue(getInstitutionCityAtom)
  const setSelectedInstitution = useSetAtom(selectedInstitutionAtom)
  const openInstitutionInfo = useSetAtom(openInstitutionInfoAtom)

  const cityName = getInstitutionCity(institution)?.name

  function handleInstitutionClick() {
    setSelectedInstitution(institution)
    openInstitutionInfo()
  }

  return (
    <AdvancedMarker
      key={id}
      position={{ lat, lng }}
      title={`${name}, ${cityName}`}
      onClick={handleInstitutionClick}
    >
      <Pin>
        <GraduationCap fill='#b00' stroke='#b00' size={20} />
      </Pin>
    </AdvancedMarker>
  )
}
