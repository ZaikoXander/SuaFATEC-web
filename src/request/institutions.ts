import institutionsApi from '@/lib/api/institutionsApi'

import type { Institution } from '@/atoms/institutions'

async function getInstitution(id: number): Promise<Institution> {
  const {
    data: { institution },
  } = await institutionsApi.get<{ institution: Institution }>(id.toString())

  return institution
}

async function getAllInstitutions(): Promise<Institution[]> {
  const {
    data: { institutions },
  } = await institutionsApi.get<{ institutions: Institution[] }>('/')

  return institutions
}

const institutions = { getInstitution, getAllInstitutions }

export default institutions
