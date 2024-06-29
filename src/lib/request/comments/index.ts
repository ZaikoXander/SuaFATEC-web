import commentsApi from '../../api/commentsApi'
import from from './from'

import { type Comment as NotApprovedComment } from '@/atoms/notApprovedComments'

interface AuthorizedRequestConfig {
  headers: { Authorization: string }
}

function authorizedRequestConfig(
  adminAuthToken: string,
): AuthorizedRequestConfig {
  return { headers: { Authorization: 'Bearer ' + adminAuthToken } }
}

// Pegar retorno dessa funcao pra ficar documentado
async function deletion(id: number, adminAuthToken: string) {
  return await commentsApi.delete(
    id.toString(),
    authorizedRequestConfig(adminAuthToken),
  )
}

async function approval(id: number, adminAuthToken: string) {
  return await commentsApi.patch(
    id.toString() + '/approve',
    undefined,
    authorizedRequestConfig(adminAuthToken),
  )
}

async function notApproved(
  adminAuthToken: string,
): Promise<NotApprovedComment[]> {
  const {
    data: { comments },
  } = await commentsApi.get<{ comments: NotApprovedComment[] }>(
    'not-approved',
    authorizedRequestConfig(adminAuthToken),
  )

  return comments
}

interface CreationRequest {
  courseOfferingId: number
  studentName: string
  conclusionDate: Date
  content: string
}

async function creation({
  courseOfferingId,
  studentName,
  conclusionDate,
  content,
}: CreationRequest) {
  return await commentsApi.post('', {
    courseOfferingId,
    studentName,
    conclusionDate: new Date(conclusionDate),
    content,
  })
}

async function addDislike(id: number) {
  return await commentsApi.patch(id.toString() + '/dislike')
}

async function addLike(id: number) {
  return await commentsApi.patch(id.toString() + '/like')
}

async function toggleLike(id: number, liked: boolean) {
  return liked ? addDislike(id) : addLike(id)
}

const comments = {
  deletion,
  approval,
  notApproved,
  creation,
  addDislike,
  addLike,
  toggleLike,
  from,
}

export default comments
