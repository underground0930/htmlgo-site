////////////////////////////////////////////////////////////////////////////////////////////////////
// works List
////////////////////////////////////////////////////////////////////////////////////////////////////

import { microcmsClient } from '@/libs'
import { WORKS_PER_PAGE, CATEGORY_RIMIT } from '@/const'

import type { MicroCMSResponse, WorkIndex, WorksCategory } from '@/types'

// types

export async function fetchWorksIndex() {
  const result = await Promise.allSettled([
    microcmsClient.get<MicroCMSResponse<WorkIndex[]>>({
      endpoint: 'works',
      queries: {
        limit: WORKS_PER_PAGE,
        fields: 'id,title,slug,date,publishedAt2,category,technology,slider',
      },
    }),
    microcmsClient.get<MicroCMSResponse<WorksCategory[]>>({
      endpoint: 'works_category',
      queries: { limit: CATEGORY_RIMIT },
    }),
    microcmsClient.get<MicroCMSResponse<WorksCategory[]>>({
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
      works: resultsVal[0],
      categories: resultsVal[1],
      technologies: resultsVal[2],
    } as {
      works: WorkIndex[]
      categories: WorksCategory[]
      technologies: WorksCategory[]
    }
  })

  return result
}