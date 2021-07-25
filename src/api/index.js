import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/' })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`
  }

  return req
})

export const getuser = (id) => API.get(`/${id}`)
export const getalluser = () => API.get(`/users`)
export const signIn = (formData) => API.post('/login', formData)
export const signUp = (formData) => API.post('/register', formData)
export const deleteUser = (id) => API.delete(`/${id}`)

export const updateUser = (id, formData) => API.patch(`/${id}`, formData)
