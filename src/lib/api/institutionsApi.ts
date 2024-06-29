import axios from 'axios'

import { baseURL } from '.'

const institutionsApi = axios.create({
  baseURL: `${baseURL}/institutions`,
})

export default institutionsApi
