import adminsApi from '../api/adminsApi'

import authorizedRequestConfig from './authorizedRequestConfig'

interface AdminsAuthResponse {
  admin: {
    id: number
    name: string
  }
  token: string
}

async function authentication(credentials: {
  name: string
  password: string
}): Promise<AdminsAuthResponse> {
  const { data } = await adminsApi.post<AdminsAuthResponse>('auth', credentials)

  return data
}

async function tokenValidation(adminAuthToken: string) {
  return await adminsApi.get(
    'validate-token',
    authorizedRequestConfig(adminAuthToken),
  )
}

const admins = {
  authentication,
  tokenValidation,
}

export default admins
