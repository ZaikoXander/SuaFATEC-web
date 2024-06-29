import axios from 'axios'

import { baseURL } from '.'

const adminsApi = axios.create({
  baseURL: `${baseURL}/admins`,
})

export default adminsApi
