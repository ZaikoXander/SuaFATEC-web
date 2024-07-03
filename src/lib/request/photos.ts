import photosApi from '../api/photosApi'

import type { Photo } from '@/atoms/photos'

async function course(id: number): Promise<Photo> {
  const {
    data: { photo },
  } = await photosApi.get<{ photo: Photo }>('course/' + id.toString())

  return photo
}

async function institution(id: number): Promise<Photo[]> {
  const {
    data: { photos },
  } = await photosApi.get<{ photos: Photo[] }>('institution/' + id.toString())

  return photos
}

const from = { course, institution }

const photos = { from }

export default photos
