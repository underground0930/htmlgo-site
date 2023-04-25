import { createClient } from 'newt-client-js'

export const newtClient = createClient({
  spaceUid: 'htmlgo',
  token: process.env.NEWT_API_KEY ?? '',
  apiType: 'cdn',
})
