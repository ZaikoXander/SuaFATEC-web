import axios from 'axios'

import { baseURL } from '.'

const commentsApi = axios.create({
  baseURL: `${baseURL}/comments`,
})

export default commentsApi
