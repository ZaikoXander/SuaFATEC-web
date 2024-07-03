interface AuthorizedRequestConfig {
  headers: { Authorization: string }
}

export default function authorizedRequestConfig(
  adminAuthToken: string,
): AuthorizedRequestConfig {
  return { headers: { Authorization: 'Bearer ' + adminAuthToken } }
}
