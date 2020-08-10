import axios from 'axios'

export function getApiData(url, options = {}) {
  return axios.get(url, options)
}
