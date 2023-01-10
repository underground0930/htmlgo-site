import { createClient } from 'microcms-js-sdk'

export const microcmsClient = createClient({
  serviceDomain: 'htmlgo',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
})
