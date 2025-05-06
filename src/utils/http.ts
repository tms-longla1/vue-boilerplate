import axios, { AxiosError } from 'axios'
import { getAccessTokenFromLocalStorage } from './localStorage'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
})

http.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessTokenFromLocalStorage()
    if (accessToken && config.headers) {
      config.headers.authorization = accessToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    // if (error.response?.status === HttpStatusCode.Unauthorized && window.location.pathname !== '/login') {
    //   window.location.href = '/login'
    // }
    return Promise.reject(error)
  }
)

export default http
