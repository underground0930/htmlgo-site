////////////////////////////////////////////////////////////////////////////////////////////////////
// works List
////////////////////////////////////////////////////////////////////////////////////////////////////
import { MicroCMSListResponse } from 'microcms-js-sdk'

import { microcmsClient } from '@/libs/microcms-client'
import { WORKS_PER_PAGE, CATEGORY_RIMIT } from '@/constants/microcms'

import type { WorkIndex, WorksCategory } from '@/types/microcms'

export async function fetchWorksIndex() {
  const result = await Promise.allSettled([
    microcmsClient.get<MicroCMSListResponse<WorkIndex>>({
      endpoint: 'works',
      queries: {
        limit: WORKS_PER_PAGE,
        fields:
          'id,title,slug,date,publishedAt2,participationAt,category,technology,slider',
      },
    }),
    microcmsClient.get<MicroCMSListResponse<WorksCategory>>({
      endpoint: 'works_category',
      queries: { limit: CATEGORY_RIMIT },
    }),
    microcmsClient.get<MicroCMSListResponse<WorksCategory>>({
      endpoint: 'works_technology',
      queries: { limit: CATEGORY_RIMIT },
    }),
  ]).then((results) => {
    const resultsVal = results.map((result) => {
      if (result.status === 'fulfilled') {
        return result.value.contents
      }
      return []
    })
    return {
      works: resultsVal[0] as WorkIndex[],
      categories: resultsVal[1] as WorksCategory[],
      technologies: resultsVal[2] as WorksCategory[],
    }
  })

  return result
}
