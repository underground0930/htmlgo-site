import { MicroCMSListResponse } from 'microcms-js-sdk'
import { microcmsClient } from '@/libs/microcms-client'
import type { WorksCategory } from '../types'

export async function fetchWorksCategories() {
  return microcmsClient.get<MicroCMSListResponse<WorksCategory>>({
    endpoint: 'works_category',
    queries: {
      limit: 20,
    },
  })
}
