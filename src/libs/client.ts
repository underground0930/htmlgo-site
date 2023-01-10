import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'htmlgo',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
})
