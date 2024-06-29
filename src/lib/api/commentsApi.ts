import axios from 'axios'
import api from '.'

const commentsApi = axios.create({
  baseURL: `${api.defaults.baseURL}/comments`,
})

export default commentsApi
