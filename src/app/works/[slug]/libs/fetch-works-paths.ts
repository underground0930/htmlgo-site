////////////////////////////////////////////////////////////////////////////////////////////////////
// works slug List
////////////////////////////////////////////////////////////////////////////////////////////////////

import { microcmsClient } from '@/libs/microcms-client'

export async function fetchWorksPaths() {
  const result = await microcmsClient.getList<{ slug: string }>({
    endpoint: 'works',
    queries: {
      fields: 'slug',
      limit: 100,
    },
  })

  return result.contents
}
