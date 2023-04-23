////////////////////////////////////////////////////////////////////////////////////////////////////
// works detail Meta
////////////////////////////////////////////////////////////////////////////////////////////////////

import { microcmsClient } from '@/libs'
import { MicroCMSResponse, WorkDetailMeta } from '@/types'

export const fetchWorksDetailMeta = async ({ slug }: { slug: string }) => {
  const post = await microcmsClient
    .get<MicroCMSResponse<WorkDetailMeta[]>>({
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
