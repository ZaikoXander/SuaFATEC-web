import axios from 'axios'

import { baseURL } from '.'

const photosApi = axios.create({
  baseURL: `${baseURL}/photos`,
})

export default photosApi
