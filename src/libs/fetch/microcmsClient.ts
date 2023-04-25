////////////////////////////////////////////////////////////////////////////////////////////////////
// microCMS JavaScript SDK
// url: https://github.com/microcmsio/microcms-js-sdk
////////////////////////////////////////////////////////////////////////////////////////////////////

import 'server-only'
import { createClient } from 'microcms-js-sdk'

export const microcmsClient = createClient({
  serviceDomain: 'htmlgo',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
  customFetch: (input, init) => {
    if (typeof input === 'string') {
      const newInput = new URL(input)
      const time = new Date()
      newInput.searchParams.set('cacheclearparam', `${time.getMinutes()}`)
      return fetch(newInput.href, init)
    }
    return fetch(input, init)
  },
})
