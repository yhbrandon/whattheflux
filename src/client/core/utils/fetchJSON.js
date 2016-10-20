// Core
import fetch from 'isomorphic-fetch'

import { messages } from 'core/constants'

// Cool little check from http://stackoverflow.com/a/34787336
const checkStatus = (response) => {
  if (response.ok) return response

  const error = new Error(messages.error.noLoad)
  error.response = response

  throw error
}

const fetchJSON = (endpoint, method, body) => {
  let options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (body)
    options.body = JSON.stringify(body)

  return fetch(endpoint, options)
    .then(checkStatus)
    .then(response => response.json())
}

export default fetchJSON
