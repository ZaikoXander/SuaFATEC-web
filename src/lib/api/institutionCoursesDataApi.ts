import axios from 'axios'

import { baseURL } from '.'

const institutionCoursesDataApi = axios.create({
  baseURL: `${baseURL}/institution-courses-data`,
})

export default institutionCoursesDataApi
