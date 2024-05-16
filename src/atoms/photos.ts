import { atom } from 'jotai'

import { selectedInstitutionAtom } from './institutions'

interface Photo {
  id: number
  url: string
  institutionId?: number | null
}

const photosAtom = atom<Photo[]>([
  {
    id: 1,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 1,
  },
  {
    id: 2,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 1,
  },
  {
    id: 3,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 1,
  },
  {
    id: 4,
    url: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 5,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 2,
  },
  {
    id: 6,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 2,
  },
  {
    id: 7,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 2,
  },
  {
    id: 8,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 3,
  },
  {
    id: 9,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 3,
  },
  {
    id: 10,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 3,
  },
  {
    id: 11,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 4,
  },
  {
    id: 12,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 4,
  },
  {
    id: 13,
    url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
    institutionId: 4,
  },
])

const institutionPhotosAtom = atom((get) => {
  const selectedInstitution = get(selectedInstitutionAtom)
  const photos = get(photosAtom)

  return photos.filter(
    (photo) => photo.institutionId === selectedInstitution?.id,
  )
})

export { institutionPhotosAtom }
