import axios from 'axios'

import { baseURL } from '.'

const citiesApi = axios.create({
  baseURL: `${baseURL}/cities`,
})

export default citiesApi
