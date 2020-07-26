import { CSRF_TOKEN } from './csrf_token.js'

const axios = require('axios')

async function handleResponse (response) {
  if (response.status === 204) {
    return ''
  } else if (response.status === 404) {
    return null
  } else {
    return response.data
  }
}

/* eslint-disable */
function apiService (AUTH_TOKEN) {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    timeout: 5000,
    headers: {
      'content-type': 'application/json',
      'X-CSRFTOKEN': CSRF_TOKEN
    }
  })
  if (AUTH_TOKEN !== undefined) {
    instance.defaults.headers.common['Authorization'] = ('JWT '  + AUTH_TOKEN).toString()
  }

  return instance
}
/* eslint-enable */

export { apiService }
export { handleResponse }
