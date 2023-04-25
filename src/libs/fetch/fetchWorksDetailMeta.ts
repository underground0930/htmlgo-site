////////////////////////////////////////////////////////////////////////////////////////////////////
// works detail Meta
////////////////////////////////////////////////////////////////////////////////////////////////////
import { MicroCMSListResponse } from 'microcms-js-sdk'

import { microcmsClient } from '@/libs'
import { WorkDetailMeta } from '@/types'

export const fetchWorksDetailMeta = async ({ slug }: { slug: string }) => {
  const post = await microcmsClient
    .get<MicroCMSListResponse<WorkDetailMeta>>({
      endpoint: 'works',
      queries: {
        filters: `slug[equals]${slug}`,
        fields: 'title,slug,body,slider',
      },
    })
    .then((v) => (v.contents.length ? v.contents[0] : null))
    .catch(() => null)

  return post
}
