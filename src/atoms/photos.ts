import { atom } from 'jotai'

import { selectedInstitutionAtom } from './institutions'
import { selectedCourseAtom } from './courses'

interface Photo {
  id: number
  url: string
  institutionId?: number | null
}

const photosAtom = atom<Photo[]>([
  {
    id: 1,
    url: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/fatec-praia-grande.jpg',
    institutionId: 1,
  },
  {
    id: 2,
    url: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
])

const institutionPhotosAtom = atom((get) => {
  const selectedInstitution = get(selectedInstitutionAtom)
  const photos = get(photosAtom)

  return photos.filter(
    (photo) => photo.institutionId === selectedInstitution?.id,
  )
})

const coursePhotoAtom = atom<Photo | undefined>((get) => {
  const selectedCourse = get(selectedCourseAtom)
  const photos = get(photosAtom)

  return photos.find((photo) => photo.id === selectedCourse?.photoId)
})

export { institutionPhotosAtom, coursePhotoAtom }
