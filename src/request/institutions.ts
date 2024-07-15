import institutionsApi from '@/lib/api/institutionsApi'

import type { Institution } from '@/atoms/institutions'

async function getAllInstitutions(): Promise<Institution[]> {
  const {
    data: { institutions },
  } = await institutionsApi.get<{ institutions: Institution[] }>('/')

  return institutions
}

const institutions = { getAllInstitutions }

export default institutions
