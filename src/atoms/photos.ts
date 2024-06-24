import { type Atom, atom } from 'jotai'

import { type Institution, selectedInstitutionAtom } from './institutions'
import { selectedCourseAtom } from './courses'

interface Photo {
  id: number
  url: string
  institutionId?: number | null
}

const photosAtom = atom<Photo[]>([])

const institutionPhotosAtom = atom((get) => {
  const selectedInstitution = get(selectedInstitutionAtom)
  const photos = get(photosAtom)

  return photos.filter(
    (photo) => photo.institutionId === selectedInstitution?.id,
  )
})

const getInstitutionFirstPhotoAtom: Atom<
  (institution: Institution) => Photo | undefined
> = atom((get) => (institution: Institution) => {
  const photos = get(photosAtom)

  return photos.find((photo) => photo.institutionId === institution.id)
})

const coursePhotoAtom = atom<Photo | undefined>((get) => {
  const selectedCourse = get(selectedCourseAtom)
  const photos = get(photosAtom)

  return photos.find((photo) => photo.id === selectedCourse?.photoId)
})

export {
  type Photo,
  institutionPhotosAtom,
  getInstitutionFirstPhotoAtom,
  coursePhotoAtom,
  photosAtom,
}
