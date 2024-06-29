import axios from 'axios'
import api from '.'

const adminsApi = axios.create({
  baseURL: `${api.defaults.baseURL}/admins`,
})

export default adminsApi
